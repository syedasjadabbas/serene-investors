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
      gsap.set(media, { opacity: 0, scale: 1.03 })
      gsap.set(copy, { opacity: 0, y: 14 })

      const timeline = gsap.timeline()
      timeline
        .to(media, {
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: 'power3.out',
        })
        .to(
          copy,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: 'power4.out',
          },
          '-=0.4',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
