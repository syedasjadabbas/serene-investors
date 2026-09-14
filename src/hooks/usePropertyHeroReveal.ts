import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function usePropertyHeroReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const media = root.querySelectorAll('[data-property-hero-image]')
    const copy = root.querySelectorAll('[data-property-hero-copy]')

    const ctx = gsap.context(() => {
      gsap.set(media, { opacity: 0, scale: 1.05 })
      gsap.set(copy, { opacity: 0, y: 18 })

      const timeline = gsap.timeline()
      timeline
        .to(media, {
          opacity: 1,
          scale: 1,
          duration: 1.05,
          ease: 'power3.out',
        })
        .to(
          copy,
          {
            opacity: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.07,
            ease: 'power4.out',
          },
          '-=0.55',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
