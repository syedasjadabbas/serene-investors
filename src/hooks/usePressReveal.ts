import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function usePressReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const marks = root.querySelectorAll('[data-press-mark]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 12 })
      gsap.set(marks, { opacity: 0, x: -18, clipPath: 'inset(0 100% 0 0)' })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          once: true,
        },
      })

      timeline
        .to(headings, {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power4.out',
        })
        .to(
          marks,
          {
            opacity: 1,
            x: 0,
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.55,
            stagger: 0.09,
            ease: 'power3.out',
          },
          '-=0.1',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
