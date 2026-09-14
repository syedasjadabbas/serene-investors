import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { howPageFaq } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function HowFaq() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  return (
    <section ref={rootRef} className="how-faq" aria-labelledby="how-faq-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="how-faq-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
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

        <div className="how-faq__list">
          {howPageFaq.map((item) => (
            <details key={item.id} data-reveal-item className="how-faq__item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
              {item.id === 'property' ? (
                <p>
                  <Link to="/properties">Explore sample properties</Link>
                </p>
              ) : null}
              {item.id === 'funds' ? (
                <p>
                  <Link to="/funds">Explore sample funds</Link>
                </p>
              ) : null}
            </details>
          ))}
        </div>

        <p data-reveal-item className="how-faq__more">
          For the longer caution, read the{' '}
          <Link to="/legal/risks">sample key risks</Link>
          {' '}or the{' '}
          <Link to="/learn">learn notes</Link>.
        </p>
      </div>
    </section>
  )
}
