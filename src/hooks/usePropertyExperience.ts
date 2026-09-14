import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function usePropertyExperience(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const frame = root.querySelector('[data-experience-image]')
    const card = root.querySelector('[data-experience-card]')

    const ctx = gsap.context(() => {
      if (frame) {
        gsap.fromTo(
          frame,
          { scale: 1.06 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.7,
            },
          },
        )
      }

      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 28, z: -48 },
          {
            opacity: 1,
            y: 0,
            z: 48,
            duration: 0.85,
            ease: 'power3.out',
            force3D: true,
            scrollTrigger: {
              trigger: root,
              start: 'top 72%',
              once: true,
            },
          },
        )
      }
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
