import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react'
import { useLenisControl } from '@/app/providers/LenisProvider'
import { gsap, registerGsapPlugins, ScrollTrigger } from '@/lib/gsap'

const PIN_QUERY = '(min-width: 1024px) and (prefers-reduced-motion: no-preference)'

function canUsePin() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(PIN_QUERY).matches
}

function chromeOffset() {
  const chrome = document.querySelector('.sticky.top-0')
  return chrome?.getBoundingClientRect().height ?? 68
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

type Options = {
  rootRef: RefObject<HTMLElement | null>
  pinRef: RefObject<HTMLElement | null>
  trackRef: RefObject<HTMLElement | null>
  count: number
  onIndex: (index: number) => void
}

export function useTestimonialsPin({ rootRef, pinRef, trackRef, count, onIndex }: Options) {
  const { scrollTo } = useLenisControl()
  const [pinned, setPinned] = useState(canUsePin)
  const triggerRef = useRef<ScrollTrigger | null>(null)
  const indexRef = useRef(0)
  const onIndexRef = useRef(onIndex)
  onIndexRef.current = onIndex

  useEffect(() => {
    const media = window.matchMedia(PIN_QUERY)
    const sync = () => setPinned(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useLayoutEffect(() => {
    const root = rootRef.current
    const pin = pinRef.current
    const track = trackRef.current
    if (!root || !pin || !track || !pinned || count < 2) return

    registerGsapPlugins()
    const media = gsap.matchMedia()

    media.add(PIN_QUERY, () => {
      const ctx = gsap.context(() => {
        const slides = Array.from(track.querySelectorAll<HTMLElement>('[data-stories-slide]'))
        const inners = slides.map((slide) => slide.querySelector<HTMLElement>('[data-stories-inner]'))
        const portraits = slides.map((slide) =>
          slide.querySelector<HTMLElement>('[data-stories-portrait]'),
        )
        const quotes = slides.map((slide) => slide.querySelector<HTMLElement>('[data-stories-quote]'))

        const distance = () => {
          const width = slides[0]?.offsetWidth ?? 0
          return width * Math.max(0, count - 1)
        }

        const applyDepth = (progress: number) => {
          const pos = progress * Math.max(0, count - 1)
          const nextIndex = Math.min(count - 1, Math.round(pos))
          if (nextIndex !== indexRef.current) {
            indexRef.current = nextIndex
            onIndexRef.current(nextIndex)
          }

          slides.forEach((_, index) => {
            const local = pos - index
            const abs = Math.abs(local)
            const inner = inners[index]
            const portrait = portraits[index]
            const quote = quotes[index]

            if (inner) {
              gsap.set(inner, {
                opacity: gsap.utils.clamp(0.34, 1, 1 - abs * 0.42),
                scale: gsap.utils.clamp(0.955, 1, 1 - abs * 0.035),
                force3D: true,
              })
            }
            if (portrait) {
              gsap.set(portrait, {
                x: local * -26,
                force3D: true,
              })
            }
            if (quote) {
              gsap.set(quote, {
                x: local * 18,
                force3D: true,
              })
            }
          })
        }

        gsap.set(track, { x: 0 })
        applyDepth(0)

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: pin,
            pin,
            start: () => `top top+=${chromeOffset()}`,
            end: () => `+=${Math.round(window.innerHeight * Math.max(1, count - 1) * 0.92)}`,
            scrub: 0.7,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => applyDepth(self.progress),
            onRefresh: (self) => applyDepth(self.progress),
          },
        })

        triggerRef.current = tween.scrollTrigger ?? null
        const cancelRefresh = refreshWhenReady(root)

        return () => {
          cancelRefresh()
          triggerRef.current = null
        }
      }, root)

      return () => ctx.revert()
    })

    return () => {
      media.revert()
      triggerRef.current = null
    }
  }, [count, pinRef, pinned, rootRef, trackRef])

  function goTo(index: number) {
    const trigger = triggerRef.current
    const next = ((index % count) + count) % count

    if (!pinned || !trigger || count < 2) {
      indexRef.current = next
      onIndexRef.current(next)
      return
    }

    const progress = next / (count - 1)
    const top = trigger.start + (trigger.end - trigger.start) * progress
    scrollTo(top, { duration: 0.72 })
  }

  function step(delta: number) {
    goTo(indexRef.current + delta)
  }

  return { pinned, goTo, step }
}
