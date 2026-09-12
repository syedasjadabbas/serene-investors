import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

type Options = {
  skipVisual?: boolean
}

export function useTestimonialsReveal(
  rootRef: RefObject<HTMLElement | null>,
  { skipVisual = false }: Options = {},
) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const portrait = skipVisual ? [] : root.querySelectorAll('[data-story-portrait]')
    const quote = skipVisual ? [] : root.querySelectorAll('[data-story-quote]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      if (portrait.length) gsap.set(portrait, { opacity: 0, scale: 1.06, z: -24 })
      if (quote.length) gsap.set(quote, { opacity: 0, y: 22, z: 20 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 76%',
          once: true,
        },
      })

      timeline.to(headings, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power4.out',
      })

      if (portrait.length) {
        timeline.to(
          portrait,
          {
            opacity: 1,
            scale: 1,
            z: 0,
            duration: 0.75,
            ease: 'power3.out',
          },
          '-=0.12',
        )
      }

      if (quote.length) {
        timeline.to(
          quote,
          {
            opacity: 1,
            y: 0,
            z: 16,
            duration: 0.55,
            ease: 'power4.out',
          },
          '-=0.28',
        )
      }
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef, skipVisual])
}
