'use client'

import { useRef } from 'react'
import { Link } from '@/global/components/ui/Link'
import { howPageFaq } from '@/global/data/how-it-works'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function HowFaq() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="py-16 md:py-24 px-5 md:px-8 lg:px-10" aria-labelledby="how-faq-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="how-faq-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-ink"
        >
          Questions, answered plainly.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          These answers stay inside what the demonstration already shows. Nothing here is financial
          advice or an invitation to invest.
        </p>

        <div className="mt-11 max-w-[46rem]">
          {howPageFaq.map((item) => (
            <details key={item.id} data-reveal-item className="group border-t border-line">
              <summary className="cursor-pointer list-none py-5 pr-7 text-lg font-semibold tracking-tight text-ink flex items-center justify-between transition-colors hover:text-primary">
                <span>{item.question}</span>
                <span className="ml-4 text-xs transition-transform duration-200 group-open:rotate-180" aria-hidden="true">
                  ▼
                </span>
              </summary>
              <div className="pb-6 text-base leading-relaxed text-muted max-w-[46ch] space-y-3">
                <p>{item.answer}</p>
                {item.id === 'property' ? (
                  <p>
                    <Link href="/properties" className="font-medium text-ink hover:underline underline-offset-4">Explore sample properties</Link>
                  </p>
                ) : null}
                {item.id === 'funds' ? (
                  <p>
                    <Link href="/funds" className="font-medium text-ink hover:underline underline-offset-4">Explore sample funds</Link>
                  </p>
                ) : null}
              </div>
            </details>
          ))}
        </div>

        <p data-reveal-item className="mt-8 max-w-[46ch] text-sm leading-relaxed text-muted">
          For the longer caution, read the{' '}
          <Link href="/legal/risks" className="font-medium text-ink hover:underline underline-offset-4">sample key risks</Link>
          {' '}or the{' '}
          <Link href="/learn" className="font-medium text-ink hover:underline underline-offset-4">learn notes</Link>.
        </p>
      </div>
    </section>
  )
}

