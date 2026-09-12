import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useTrustReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const media = root.querySelectorAll('[data-trust-media]')
    const record = root.querySelectorAll('[data-trust-record]')
    const docs = root.querySelectorAll('[data-trust-doc]')
    const points = root.querySelectorAll('[data-trust-point]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      gsap.set(media, { opacity: 0, scale: 1.03 })
      gsap.set(record, { opacity: 0, y: 24, z: -48, scale: 0.97 })
      gsap.set(docs, { opacity: 0, y: 20, z: -16 })
      gsap.set(points, { opacity: 0, y: 16 })

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
          record,
          {
            opacity: 1,
            y: 0,
            z: 8,
            scale: 1,
            duration: 0.6,
            ease: 'power4.out',
            force3D: true,
          },
          '-=0.28',
        )
        .to(
          docs,
          {
            opacity: 1,
            y: 0,
            z: 36,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power4.out',
            force3D: true,
          },
          '-=0.32',
        )
        .to(
          points,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: 'power4.out',
          },
          '-=0.1',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
