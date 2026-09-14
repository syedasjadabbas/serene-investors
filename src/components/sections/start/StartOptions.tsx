import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getStartedOptions } from '@/data'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

function StartOptionCard({
  title,
  body,
  href,
  image,
  imageAlt,
}: (typeof getStartedOptions)[number]) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)

  return (
    <article ref={cardRef} data-reveal-item data-start-option className="start-option">
      <Link to={href} className="start-option__link" aria-label={`${title}. ${body}`}>
        <div className="start-option__media">
          <div className="start-option__image">
            <img src={image} alt={imageAlt} width={1400} height={1050} loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="start-option__body">
          <h3>{title}</h3>
          <p>{body}</p>
          <span className="start-option__action">
            Continue
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  )
}

export function StartOptions() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-start-option]', depth: true })

  return (
    <section ref={rootRef} className="start-options" aria-labelledby="start-options-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="start-options-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          Three ways in.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          Open a catalogue, or stay here and walk the sample allocation. Every path remains a
          demonstration.
        </p>

        <div className="start-options__grid">
          {getStartedOptions.map((option) => (
            <StartOptionCard key={option.id} {...option} />
          ))}
        </div>
      </div>
    </section>
  )
}
