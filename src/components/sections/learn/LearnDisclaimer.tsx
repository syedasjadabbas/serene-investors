import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { howPageFaq, learnDisclaimer } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function LearnDisclaimer() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="learn-disclaimer" aria-labelledby="learn-disclaimer-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          Illustrative sample
        </p>
        <h2
          data-reveal-heading
          id="learn-disclaimer-heading"
          className="mt-5 max-w-[16ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {learnDisclaimer.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-pretty"
        >
          {learnDisclaimer.body}
        </p>

        <div id="faq" className="learn-faq">
          <h3 data-reveal-heading className="learn-faq__heading">
            Questions, in brief.
          </h3>
          <div className="learn-faq__list">
            {howPageFaq.map((item) => (
              <details key={item.id} data-reveal-item className="learn-faq__item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <p data-reveal-item className="learn-faq__more">
            The same answers also sit on{' '}
            <Link to="/how-it-works">How it works</Link>
            {' '}and in the{' '}
            <Link to="/legal/risks">sample key risks</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
