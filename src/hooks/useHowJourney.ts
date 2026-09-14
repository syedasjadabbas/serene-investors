import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { gsap, registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'
import { formatSampleAmount } from '@/lib/format'

const PIN_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
const SEGMENT_VH = 0.9

function canUsePin() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(PIN_QUERY).matches
}

function refreshWhenReady(root: HTMLElement) {
  let cancelled = false
  const images = Array.from(root.querySelectorAll('img'))
  const refresh = () => {
    if (!cancelled) ScrollTrigger.refresh()
  }

  void document.fonts?.ready.then(refresh)

  if (images.length === 0) {
    requestAnimationFrame(refresh)
    return () => {
      cancelled = true
    }
  }

  let pending = images.length
  const settle = () => {
    pending -= 1
    if (pending <= 0) refresh()
  }

  images.forEach((image) => {
    if (image.complete) {
      settle()
      return
    }
    image.addEventListener('load', settle, { once: true })
    image.addEventListener('error', settle, { once: true })
  })

  return () => {
    cancelled = true
    images.forEach((image) => {
      image.removeEventListener('load', settle)
      image.removeEventListener('error', settle)
    })
  }
}

function createJourneyTimeline(
  root: HTMLElement,
  copies: HTMLElement[],
  visuals: HTMLElement[],
  stateCount: number,
) {
  copies.forEach((layer, index) => {
    gsap.set(layer, {
      opacity: index === 0 ? 1 : 0,
      y: index === 0 ? 0 : 28,
      visibility: 'visible',
      pointerEvents: 'none',
    })
  })

  visuals.forEach((layer, index) => {
    gsap.set(layer, {
      opacity: index === 0 ? 1 : 0,
      y: index === 0 ? 0 : 32,
      z: index === 0 ? 0 : -48,
      scale: index === 0 ? 1 : 0.96,
      visibility: 'visible',
      pointerEvents: 'none',
      force3D: true,
    })
  })

  const amountNode = root.querySelector<HTMLElement>('[data-how-amount]')
  const alloc = root.querySelector<HTMLElement>('[data-how-alloc]')
  const investBits = root.querySelectorAll('[data-how-invest-bit]')
  const receipt = root.querySelector<HTMLElement>('[data-how-receipt]')
  const targetAmount = Number(amountNode?.dataset.howAmountTarget ?? 0)
  const amountProxy = { value: 0 }

  if (amountNode && targetAmount > 0) {
    amountNode.textContent = formatSampleAmount(0)
  }
  if (alloc) gsap.set(alloc, { scaleX: 0.18, transformOrigin: 'left center' })
  if (investBits.length) gsap.set(investBits, { opacity: 0, y: 14 })
  if (receipt) gsap.set(receipt, { opacity: 0, y: 28, scale: 0.96, z: 24 })

  const timeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } })

  for (let index = 0; index < stateCount - 1; index += 1) {
    const at = index
    const outgoingCopy = copies[index]
    const incomingCopy = copies[index + 1]
    const outgoingVisual = visuals[index]
    const incomingVisual = visuals[index + 1]
    const incomingId = incomingVisual?.dataset.howId

    if (outgoingCopy) timeline.to(outgoingCopy, { opacity: 0, y: -24, duration: 1 }, at)
    if (outgoingVisual) {
      timeline.to(
        outgoingVisual,
        { opacity: 0, y: -16, z: -40, scale: 0.96, duration: 1, force3D: true },
        at,
      )
    }
    if (incomingCopy) timeline.to(incomingCopy, { opacity: 1, y: 0, duration: 1 }, at)
    if (incomingVisual) {
      timeline.to(
        incomingVisual,
        { opacity: 1, y: 0, z: 0, scale: 1, duration: 1, force3D: true },
        at,
      )
    }

    if (incomingId === 'invest') {
      if (amountNode && targetAmount > 0) {
        timeline.to(
          amountProxy,
          {
            value: targetAmount,
            duration: 1,
            onUpdate: () => {
              amountNode.textContent = formatSampleAmount(Math.round(amountProxy.value))
            },
          },
          at,
        )
      }
      if (alloc) timeline.to(alloc, { scaleX: 1, duration: 1 }, at)
      if (investBits.length) timeline.to(investBits, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 }, at + 0.15)
    }

    if (incomingId === 'receive' && receipt) {
      timeline.to(receipt, { opacity: 1, y: 0, scale: 1, z: 48, duration: 0.9, force3D: true }, at + 0.08)
    }
  }

  timeline.to({}, { duration: 0.85 }, Math.max(0, stateCount - 1))
  return timeline
}

export function useHowJourney(
  rootRef: RefObject<HTMLElement | null>,
  pinRef: RefObject<HTMLElement | null>,
  stateCount: number,
) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPinned, setIsPinned] = useState(canUsePin)
  const indexRef = useRef(0)

  useEffect(() => {
    const media = window.matchMedia(PIN_QUERY)
    const sync = () => setIsPinned(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useLayoutEffect(() => {
    const root = rootRef.current
    const pin = pinRef.current
    if (!root || !pin || !isPinned || stateCount < 1) {
      indexRef.current = 0
      setActiveIndex(0)
      return
    }

    registerGsapPlugins()
    indexRef.current = 0
    setActiveIndex(0)

    const media = gsap.matchMedia()

    media.add(PIN_QUERY, () => {
      const ctx = gsap.context(() => {
        const copies = Array.from(root.querySelectorAll<HTMLElement>('[data-how-copy]'))
        const visuals = Array.from(root.querySelectorAll<HTMLElement>('[data-how-visual]'))
        const bar = root.querySelector<HTMLElement>('[data-how-progress]')
        const timeline = createJourneyTimeline(root, copies, visuals, stateCount)

        if (bar) gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' })

        ScrollTrigger.create({
          trigger: root,
          pin,
          start: 'top top',
          end: () => `+=${Math.round(window.innerHeight * SEGMENT_VH * stateCount)}`,
          pinSpacing: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: timeline,
          onUpdate: (self) => {
            if (bar) gsap.set(bar, { scaleX: self.progress, transformOrigin: 'left center' })
            const next = Math.min(
              stateCount - 1,
              Math.round(Math.min(stateCount - 1, self.progress * stateCount)),
            )
            if (next === indexRef.current) return
            indexRef.current = next
            setActiveIndex(next)
          },
        })
      }, root)

      const cancelRefresh = refreshWhenReady(root)
      return () => {
        cancelRefresh?.()
        ctx.revert()
      }
    })

    return () => {
      media.revert()
      indexRef.current = 0
    }
  }, [isPinned, pinRef, rootRef, stateCount])

  return { activeIndex, isPinned }
}
