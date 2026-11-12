'use client'

import { useRef } from 'react'
import { fundsHowIntro, fundsHowSteps } from '@/global/data/funds'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function HowFundsWork() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-reveal-item]', depth: true })

  return (
    <section ref={rootRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-10 bg-accent text-accent-ink" aria-labelledby="funds-how-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="funds-how-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-accent-ink"
        >
          {fundsHowIntro.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-[#f7f5ef]/75 text-pretty"
        >
          {fundsHowIntro.body}
        </p>

        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-7 mt-11 list-none p-0">
          {fundsHowSteps.map((step, index) => (
            <li key={step.id} data-reveal-item>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f7f5ef]/60">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-accent-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f7f5ef]/75 max-w-[32ch]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

