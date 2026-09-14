import { useRef } from 'react'
import { fundsHowIntro, fundsHowSteps } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function HowFundsWork() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-reveal-item]', depth: true })

  return (
    <section ref={rootRef} className="funds-how" aria-labelledby="funds-how-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="funds-how-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {fundsHowIntro.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {fundsHowIntro.body}
        </p>

        <ol className="funds-how__steps">
          {fundsHowSteps.map((step, index) => (
            <li key={step.id} data-reveal-item>
              <p className="funds-how__index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
