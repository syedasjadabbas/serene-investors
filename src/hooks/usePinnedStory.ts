import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { useLenisControl } from '@/app/providers/LenisProvider'
import { gsap, registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'

const PIN_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'
const SEGMENT_VH = 0.8

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

function activateCopy(layer: Element, direction: 1 | -1) {
  gsap.set(layer, { visibility: 'visible', pointerEvents: 'auto' })
  gsap.fromTo(
    layer,
    { opacity: 0, y: 30 * direction },
    { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', overwrite: 'auto' },
  )
}

function retireCopy(layer: Element, direction: 1 | -1) {
  gsap.to(layer, {
    opacity: 0,
    y: -30 * direction,
    duration: 0.5,
    ease: 'power3.out',
    overwrite: 'auto',
    onComplete: () => {
      gsap.set(layer, { visibility: 'hidden', pointerEvents: 'none' })
    },
  })
}

function activateVisual(layer: Element) {
  gsap.set(layer, { visibility: 'visible', pointerEvents: 'auto' })
  gsap.fromTo(
    layer,
    { opacity: 0, scale: 0.94, y: 36, z: -56, rotateX: 2.4 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      z: 0,
      rotateX: 0,
      duration: 0.65,
      ease: 'power3.out',
      overwrite: 'auto',
      force3D: true,
    },
  )

  const back = layer.querySelectorAll('[data-depth="back"]')
  const front = layer.querySelectorAll(
    '[data-depth="front"]:not(.story-receipt__card):not(.story-value-receive__card--rent):not(.story-grow__float):not([data-build-head])',
  )
  const rows = layer.querySelectorAll('.story-invest__meta div, .story-statement__row')
  const buildHead = layer.querySelector('[data-build-head]')
  const buildFigures = layer.querySelectorAll('[data-build-figure]')
  const receipt = layer.querySelector('.story-receipt__card')
  const income = layer.querySelector('.story-value-receive__card--rent')
  const growPhone = layer.querySelector('.story-grow__phone')
  const growPortfolio = layer.querySelector('.story-grow__float--one')
  const growCard = layer.querySelector('.story-grow__float--two')
  const alloc = layer.querySelector('.story-invest__alloc-bar')

  if (back.length) {
    gsap.fromTo(
      back,
      { scale: 1.06, z: -48 },
      { scale: 1, z: -28, duration: 0.75, ease: 'power3.out', overwrite: 'auto' },
    )
  }

  if (front.length) {
    gsap.fromTo(
      front,
      { opacity: 0, y: 22, z: 64, rotateY: -3 },
      { opacity: 1, y: 0, z: 40, rotateY: 0, duration: 0.6, delay: 0.08, ease: 'power3.out', overwrite: 'auto' },
    )
  }

  if (buildHead) {
    gsap.fromTo(
      buildHead,
      { opacity: 0, y: 26, z: 72, rotateX: 8 },
      {
        opacity: 1,
        y: 0,
        z: 56,
        rotateX: 0,
        duration: 0.62,
        delay: 0.06,
        ease: 'power3.out',
        overwrite: 'auto',
        force3D: true,
      },
    )
  }

  if (rows.length) {
    gsap.fromTo(
      rows,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, delay: 0.12, ease: 'power3.out', overwrite: 'auto' },
    )
  }

  if (buildFigures.length) {
    gsap.fromTo(
      buildFigures,
      { opacity: 0, y: 8, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.06,
        delay: 0.2,
        ease: 'power3.out',
        overwrite: 'auto',
      },
    )
  }

  if (alloc) {
    gsap.fromTo(
      alloc,
      { scaleX: 0.2, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.7, delay: 0.16, ease: 'power3.out', overwrite: 'auto' },
    )
  }

  if (receipt) {
    gsap.fromTo(
      receipt,
      { opacity: 0, y: 20, scale: 0.94, z: 72 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        z: 56,
        duration: 0.55,
        delay: 0.14,
        ease: 'power3.out',
        overwrite: 'auto',
      },
    )
  }

  if (income) {
    gsap.fromTo(
      income,
      { opacity: 0, y: 24, z: 20 },
      { opacity: 1, y: 0, z: 48, duration: 0.55, delay: 0.16, ease: 'power3.out', overwrite: 'auto' },
    )
  }

  if (growPhone) {
    gsap.fromTo(
      growPhone,
      { z: -24, scale: 0.97 },
      { z: 20, scale: 1, duration: 0.7, ease: 'power3.out', overwrite: 'auto' },
    )
  }

  if (growPortfolio) {
    gsap.fromTo(
      growPortfolio,
      { z: 36, y: 12 },
      { z: 8, y: 0, duration: 0.6, delay: 0.06, ease: 'power3.out', overwrite: 'auto' },
    )
  }

  if (growCard) {
    gsap.fromTo(
      growCard,
      { z: -12, y: 18, opacity: 0 },
      { z: 48, y: 0, opacity: 1, duration: 0.6, delay: 0.12, ease: 'power3.out', overwrite: 'auto' },
    )
  }
}

function retireVisual(layer: Element) {
  gsap.to(layer, {
    opacity: 0,
    scale: 0.94,
    y: -18,
    z: -48,
    rotateX: 1.6,
    duration: 0.5,
    ease: 'power3.out',
    overwrite: 'auto',
    force3D: true,
    onComplete: () => {
      gsap.set(layer, { visibility: 'hidden', pointerEvents: 'none' })
    },
  })
}

type Options = {
  stateCount: number
  segmentVh?: number
  thresholds?: number[]
  stepOnScroll?: boolean
}

function progressForState(index: number, stateCount: number) {
  if (stateCount <= 1) return 0
  return (index + 0.5) / stateCount
}

function indexFromProgress(
  progress: number,
  stateCount: number,
  thresholds: number[] | undefined,
) {
  if (thresholds && thresholds.length === stateCount - 1) {
    let index = 0
    for (let i = 0; i < thresholds.length; i += 1) {
      if (progress >= thresholds[i]) index = i + 1
    }
    return index
  }

  return Math.min(stateCount - 1, Math.floor(progress * stateCount + 0.0001))
}

function applyHysteresis(
  progress: number,
  raw: number,
  current: number,
  stateCount: number,
  thresholds: number[] | undefined,
) {
  if (raw === current) return current

  const dead = 0.016
  if (raw > current) {
    const boundary = thresholds?.[current] ?? (current + 1) / stateCount
    return progress >= boundary + dead ? raw : current
  }

  const boundary = thresholds?.[raw] ?? (raw + 1) / stateCount
  return progress <= boundary - dead ? raw : current
}

export function usePinnedStory(
  rootRef: RefObject<HTMLElement | null>,
  pinRef: RefObject<HTMLElement | null>,
  { stateCount, segmentVh = SEGMENT_VH, thresholds, stepOnScroll = false }: Options,
) {
  const { scrollTo } = useLenisControl()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPinned, setIsPinned] = useState(canUsePin)
  const indexRef = useRef(0)
  const thresholdKey = thresholds?.join(',') ?? ''

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

    const copies = root.querySelectorAll('[data-story-copy]')
    const visuals = root.querySelectorAll('[data-story-visual]')

    const media = gsap.matchMedia()

    media.add(PIN_QUERY, () => {
      let disposeStep: (() => void) | undefined
      const ctx = gsap.context(() => {
        copies.forEach((layer, index) => {
          if (index === 0) {
            gsap.set(layer, { opacity: 1, y: 0, visibility: 'visible', pointerEvents: 'auto' })
            return
          }
          gsap.set(layer, { opacity: 0, y: 30, visibility: 'hidden', pointerEvents: 'none' })
        })

        visuals.forEach((layer, index) => {
          if (index === 0) {
            gsap.set(layer, {
              opacity: 1,
              y: 0,
              z: 0,
              scale: 1,
              rotateX: 0,
              visibility: 'visible',
              pointerEvents: 'auto',
            })
            return
          }
          gsap.set(layer, {
            opacity: 0,
            y: 36,
            z: -56,
            visibility: 'hidden',
            pointerEvents: 'none',
          })
        })

        const syncIndex = (progress: number) => {
          const raw = indexFromProgress(progress, stateCount, thresholds)
          return applyHysteresis(progress, raw, indexRef.current, stateCount, thresholds)
        }

        const goTo = (next: number) => {
          if (next === indexRef.current) return
          const previous = indexRef.current
          const direction = next > previous ? 1 : -1
          indexRef.current = next

          const previousCopy = copies[previous]
          const previousVisual = visuals[previous]
          const nextCopy = copies[next]
          const nextVisual = visuals[next]

          if (previousCopy) retireCopy(previousCopy, direction)
          if (previousVisual) retireVisual(previousVisual)
          if (nextCopy) activateCopy(nextCopy, direction)
          if (nextVisual) activateVisual(nextVisual)

          setActiveIndex(next)
        }

        const trigger = ScrollTrigger.create({
          trigger: root,
          pin,
          start: 'top top',
          end: () => `+=${Math.round(window.innerHeight * segmentVh * stateCount)}`,
          pinSpacing: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            goTo(syncIndex(self.progress))
          },
          onRefresh: (self) => {
            goTo(syncIndex(self.progress))
          },
        })

        if (stepOnScroll) {
          let stepping = false
          let unlock = 0

          const stepTo = (next: number) => {
            const clamped = Math.max(0, Math.min(stateCount - 1, next))
            if (clamped === indexRef.current && stepping) return
            stepping = true
            window.clearTimeout(unlock)
            const progress = progressForState(clamped, stateCount)
            const top = trigger.start + (trigger.end - trigger.start) * progress
            scrollTo(top, { duration: 0.62 })
            goTo(clamped)
            unlock = window.setTimeout(() => {
              stepping = false
            }, 680)
          }

          const onWheel = (event: WheelEvent) => {
            if (!trigger.isActive) return
            const down = event.deltaY > 0
            const index = indexRef.current
            if (index === 0 && !down) return
            if (index === stateCount - 1 && down) return
            event.preventDefault()
            if (stepping || Math.abs(event.deltaY) < 4) return
            stepTo(down ? index + 1 : index - 1)
          }

          const onKey = (event: KeyboardEvent) => {
            if (!trigger.isActive) return
            const target = event.target
            if (target instanceof HTMLElement) {
              const tag = target.tagName
              if (tag === 'INPUT' || tag === 'TEXTAREA' || target.isContentEditable) return
            }
            const down = event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' '
            const up = event.key === 'ArrowUp' || event.key === 'PageUp'
            if (!down && !up) return
            const index = indexRef.current
            if (index === 0 && up) return
            if (index === stateCount - 1 && down) return
            event.preventDefault()
            if (stepping) return
            stepTo(down ? index + 1 : index - 1)
          }

          window.addEventListener('wheel', onWheel, { passive: false, capture: true })
          window.addEventListener('keydown', onKey)
          disposeStep = () => {
            window.removeEventListener('wheel', onWheel, { capture: true } as AddEventListenerOptions)
            window.removeEventListener('keydown', onKey)
            window.clearTimeout(unlock)
          }
        }
      }, root)

      const cancelRefresh = refreshWhenReady(root)

      return () => {
        disposeStep?.()
        cancelRefresh?.()
        ctx.revert()
      }
    })

    return () => {
      media.revert()
      indexRef.current = 0
    }
  }, [isPinned, pinRef, rootRef, scrollTo, segmentVh, stateCount, stepOnScroll, thresholdKey])

  return { activeIndex, isPinned }
}
