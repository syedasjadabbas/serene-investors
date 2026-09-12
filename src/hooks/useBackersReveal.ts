import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useBackersReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const marks = root.querySelectorAll('[data-backer-mark]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      gsap.set(marks, { opacity: 0, y: 16, x: -12, scale: 0.96, z: -16 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          once: true,
        },
      })

      timeline
        .to(headings, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power4.out',
        })
        .to(
          marks,
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            z: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power4.out',
            force3D: true,
          },
          '-=0.12',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
