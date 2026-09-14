import { useRef } from 'react'
import { howPageSummary } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function HowSummary() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-reveal-item]', depth: true })

  return (
    <section ref={rootRef} className="how-summary" aria-labelledby="how-summary-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="how-summary-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          The short version.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          Three beats, using only the demonstration flow already on this site.
        </p>

        <ol className="how-summary__list">
          {howPageSummary.map((step, index) => (
            <li key={step.id} data-reveal-item>
              <p className="how-summary__index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
