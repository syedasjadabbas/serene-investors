'use client'

import { useRef } from 'react'
import { howPageSummary } from '@/global/data/how-it-works'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function HowSummary() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-reveal-item]', depth: true })

  return (
    <section ref={rootRef} className="bg-accent text-accent-ink py-16 md:py-24 px-5 md:px-8 lg:px-10" aria-labelledby="how-summary-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="how-summary-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-accent-ink"
        >
          The short version.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-[#f7f5ef]/75 text-pretty"
        >
          Three beats, using only the demonstration flow already on this site.
        </p>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-8 mt-11 list-none p-0">
          {howPageSummary.map((step, index) => (
            <li key={step.id} data-reveal-item>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f7f5ef]/60">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-accent-ink">{step.title}</h3>
              <p className="mt-2.5 max-w-[28ch] text-sm leading-relaxed text-[#f7f5ef]/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

