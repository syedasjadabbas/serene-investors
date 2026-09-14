import { useRef } from 'react'
import { getStartedTrust } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function StartTrust() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-reveal-item]', depth: true })

  return (
    <section ref={rootRef} className="start-trust" aria-labelledby="start-trust-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="start-trust-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {getStartedTrust.heading}
        </h2>
        <ol className="start-trust__list">
          {getStartedTrust.items.map((item, index) => (
            <li key={item.id} data-reveal-item>
              <p className="start-trust__index">{String(index + 1).padStart(2, '0')}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
