import { useRef } from 'react'
import { aboutClarity } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function AboutClarity() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-about-clarity-item]', depth: true })

  return (
    <section ref={rootRef} className="about-clarity" aria-labelledby="about-clarity-heading">
      <div className="about-clarity__layout mx-auto max-w-[var(--container-wide)]">
        <div>
          <h2
            data-reveal-heading
            id="about-clarity-heading"
            className="max-w-[14ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
          >
            {aboutClarity.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-pretty"
          >
            {aboutClarity.body}
          </p>
        </div>

        <ul className="about-clarity__list">
          {aboutClarity.points.map((point) => (
            <li key={point.id} data-about-clarity-item className="about-clarity__item">
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
