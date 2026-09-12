import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useAppReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const main = root.querySelectorAll('[data-app-phone-main]')
    const side = root.querySelectorAll('[data-app-phone-side]')
    const cta = root.querySelectorAll('[data-app-cta]')
    const floats = root.querySelectorAll('[data-app-float]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      gsap.set(main, { opacity: 0, y: 36, z: -48, rotateX: 4 })
      gsap.set(side, { opacity: 0, y: 28, z: -72, rotateX: 3 })
      gsap.set(cta, { opacity: 0, y: 10 })
      gsap.set(floats, { opacity: 0, y: 20, z: 48 })

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
          main,
          {
            opacity: 1,
            y: 0,
            z: 16,
            rotateX: 0,
            duration: 0.8,
            ease: 'power3.out',
            force3D: true,
          },
          '-=0.1',
        )
        .to(
          side,
          {
            opacity: 1,
            y: 0,
            z: -20,
            rotateX: 0,
            duration: 0.7,
            ease: 'power3.out',
            force3D: true,
          },
          '-=0.48',
        )
        .to(
          floats,
          {
            opacity: 1,
            y: 0,
            z: 40,
            duration: 0.55,
            stagger: 0.1,
            ease: 'power4.out',
            force3D: true,
          },
          '-=0.25',
        )
        .to(
          cta,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power4.out',
          },
          '-=0.2',
        )

      if (window.matchMedia('(min-width: 1024px)').matches) {
        gsap.to(main, {
          y: '-=10',
          rotateZ: 0.7,
          duration: 5.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.6,
          force3D: true,
        })
        gsap.to(side, {
          y: '-=7',
          rotateZ: -0.55,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 2,
          force3D: true,
        })
        gsap.to(floats, {
          y: '-=8',
          duration: 6.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 2.2,
          stagger: 0.35,
          force3D: true,
        })
      }
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
