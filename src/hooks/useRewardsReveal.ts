import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useRewardsReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const cards = root.querySelectorAll('[data-reward-item]')
    const action = root.querySelectorAll('[data-rewards-cta]')

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      gsap.set(cards, { opacity: 0, y: 28, scale: 0.94, rotateY: 4 })
      if (window.matchMedia('(min-width: 1024px)').matches) {
        cards.forEach((card, index) => {
          gsap.set(card, { z: index === 0 ? -48 : index === 1 ? -8 : 40, rotateZ: index === 0 ? -2 : index === 2 ? 2 : 0 })
        })
      }
      const kickers = root.querySelectorAll('[data-reward-kicker]')
      const figures = root.querySelectorAll('[data-reward-figure]')
      gsap.set(action, { opacity: 0, y: 8 })
      gsap.set([kickers, figures], { opacity: 0, y: 8 })

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
          cards,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            rotateZ: 0,
            duration: 0.7,
            stagger: 0.14,
            ease: 'power4.out',
            clearProps: 'z',
          },
          '-=0.12',
        )
        .to(
          kickers,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.35',
        )
        .fromTo(
          figures,
          { opacity: 0, y: 8, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.28',
        )
        .to(
          action,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power3.out',
          },
          '-=0.08',
        )
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
