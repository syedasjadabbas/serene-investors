import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useReturnsReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const media = root.querySelectorAll('[data-returns-media]')
    const investment = root.querySelectorAll('[data-returns-investment]')
    const flow = root.querySelectorAll('[data-returns-flow]')
    const components = root.querySelectorAll('[data-returns-component]')
    const total = root.querySelectorAll('[data-returns-total]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      gsap.set(media, { opacity: 0, scale: 1.03 })
      gsap.set(investment, { opacity: 0, y: 12 })
      gsap.set(flow, { opacity: 0, y: 10 })
      gsap.set(components, { opacity: 0, y: 10 })
      gsap.set(total, { opacity: 0, y: 8 })

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
          duration: 0.5,
          stagger: 0.06,
          ease: 'power4.out',
        })
        .to(
          media,
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.12',
        )
        .to(
          investment,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power4.out',
          },
          '-=0.25',
        )
        .to(
          flow,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power4.out',
          },
          '-=0.12',
        )
        .to(
          components,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power4.out',
          },
          '-=0.08',
        )
        .to(
          total,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.06,
            ease: 'power3.out',
          },
          '-=0.08',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
