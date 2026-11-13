'use client'

import { useLayoutEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/global/lib/gsap'
import { mission } from '../_lib/home'

/** Large quote whose words fill in as the section scrolls through the viewport. */
export function MissionQuote() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()
  const words = mission.quote.split(' ')

  useLayoutEffect(() => {
    const root = ref.current
    if (!root || reduced) return
    registerGsapPlugins()
    const ctx = gsap.context(() => {
      gsap.fromTo(
        root.querySelectorAll('[data-word]'),
        { opacity: 0.15 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: { trigger: root, start: 'top 70%', end: 'bottom 60%', scrub: true },
        },
      )
    }, root)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={ref} aria-labelledby="mission-heading" className="px-4 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-[220px_1fr]">
        <h2 id="mission-heading" className="text-sm font-semibold uppercase tracking-[0.14em] text-sx-ink/60">
          {mission.label}
        </h2>
        <figure>
          <blockquote className="font-heading text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-sx-ink sm:text-[2.75rem]">
            <p>
              “
              {words.map((word, index) => (
                <span key={index} data-word>
                  {word}
                  {index < words.length - 1 ? ' ' : ''}
                </span>
              ))}
              ”
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-[14px] bg-sx-forest font-heading text-lg font-extrabold text-sx-mint">
              S
            </span>
            <span className="text-sm font-semibold text-sx-forest">{mission.attribution}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
