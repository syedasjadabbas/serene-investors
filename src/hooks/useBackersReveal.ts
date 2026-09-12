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
    const media = root.querySelector('[data-community-media] img')
    const marks = root.querySelectorAll('[data-backer-mark]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 16 })
      if (media) gsap.set(media, { opacity: 0, scale: 1.06 })
      gsap.set(marks, { opacity: 0, y: 14 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 76%',
          once: true,
        },
      })

      timeline
        .to(headings, {
          opacity: 1,
          y: 0,
          duration: 0.52,
          stagger: 0.07,
          ease: 'power3.out',
        })
        .to(
          media,
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
          },
          '-=0.2',
        )
        .to(
          marks,
          {
            opacity: 1,
            y: 0,
            duration: 0.42,
            stagger: 0.06,
            ease: 'power3.out',
          },
          '-=0.45',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
