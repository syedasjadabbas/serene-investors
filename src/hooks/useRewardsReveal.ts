import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { REWARD_RESTS } from '@/lib/rewards-motion'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useRewardsReveal(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const headings = root.querySelectorAll('[data-reveal-heading]')
    const cards = Array.from(root.querySelectorAll<HTMLElement>('[data-reward-item]'))
    const action = root.querySelectorAll('[data-rewards-cta]')
    const kickers = root.querySelectorAll('[data-reward-kicker]')
    const figures = root.querySelectorAll('[data-reward-figure]')
    const mark = root.querySelector('[data-reward-mark]')
    const desktop = window.matchMedia('(min-width: 1024px)').matches

    const ctx = gsap.context(() => {
      gsap.set(headings, { opacity: 0, y: 14 })
      gsap.set(action, { opacity: 0, y: 8 })
      gsap.set([kickers, figures], { opacity: 0, y: 8 })
      if (mark) gsap.set(mark, { opacity: 0, scale: 0.96 })

      cards.forEach((card, index) => {
        const rest = REWARD_RESTS[index] ?? REWARD_RESTS[0]
        gsap.set(card, {
          opacity: 0,
          y: desktop ? rest.y + 36 : 28,
          z: desktop ? rest.z - 50 : 0,
          scale: 0.92,
          rotateX: desktop ? 3 : 0,
          rotateY: desktop ? rest.rotateY + (index === 2 ? -3 : 3) : 0,
          rotateZ: desktop ? rest.rotateZ : 0,
          force3D: true,
        })
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 76%',
          once: true,
        },
      })

      timeline.to(headings, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power4.out',
      })

      if (mark) {
        timeline.to(
          mark,
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.2',
        )
      }

      cards.forEach((card, index) => {
        const rest = REWARD_RESTS[index] ?? REWARD_RESTS[0]
        timeline.to(
          card,
          {
            opacity: 1,
            y: desktop ? rest.y : 0,
            z: desktop ? rest.z : 0,
            scale: 1.03,
            rotateX: desktop ? rest.rotateX : 0,
            rotateY: desktop ? rest.rotateY : 0,
            rotateZ: desktop ? rest.rotateZ : 0,
            duration: 0.78,
            ease: 'power4.out',
            force3D: true,
          },
          0.38 + index * 0.14,
        )
      })

      timeline
        .to(cards, { scale: 1, duration: 0.42, ease: 'power2.out' }, '-=0.12')
        .to(
          kickers,
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.1, ease: 'power3.out' },
          '-=0.4',
        )
        .fromTo(
          figures,
          { opacity: 0, y: 8, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: 'power3.out' },
          '-=0.28',
        )
        .to(action, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.08')
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef])
}
