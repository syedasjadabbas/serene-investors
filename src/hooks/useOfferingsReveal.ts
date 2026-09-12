import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useOfferingsReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const panels = root.querySelectorAll('[data-reveal-item]')
    const media = root.querySelectorAll('[data-offering-media], .offering-stack img')
    const cards = root.querySelectorAll('[data-offering-card]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      gsap.set(panels, { opacity: 1 })
      gsap.set(cards, { opacity: 0, y: 24, z: -80, rotateX: 3 })
      gsap.set(media, { opacity: 0, scale: 1.08 })

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
          duration: 0.55,
          stagger: 0.07,
          ease: 'power4.out',
        })
        .to(
          media,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.15',
        )
        .to(
          cards,
          {
            opacity: 1,
            y: 0,
            z: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.14,
            ease: 'power4.out',
            force3D: true,
            onComplete: () => {
              gsap.set(cards, { opacity: 1 })
              gsap.set(root.querySelectorAll('[data-offering-card] *'), { opacity: 1 })
            },
          },
          '-=0.35',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
