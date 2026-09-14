import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { LearnGuide } from '@/types'
import { learnGuides } from '@/data'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

function ResourceCard({ guide }: { guide: LearnGuide }) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)

  return (
    <article
      ref={cardRef}
      id={guide.anchor && guide.anchor !== 'property-guide' ? guide.anchor : undefined}
      data-learn-card
      className="learn-card"
    >
      <Link to={`/learn/${guide.slug}`} className="learn-card__link" aria-label={`${guide.title}. Read guide.`}>
        <div className="learn-card__media">
          <div className="learn-card__image">
            <img src={guide.image} alt={guide.imageAlt} width={900} height={675} loading="lazy" decoding="async" />
          </div>
        </div>
        <p className="learn-kicker">{guide.category}</p>
        <h3>{guide.title}</h3>
        <p className="learn-card__body">{guide.description}</p>
        <span className="learn-card__action">
          Read guide
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </span>
      </Link>
    </article>
  )
}

export function LearnResources() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-learn-card]', depth: true })

  return (
    <section ref={rootRef} className="learn-resources" aria-labelledby="learn-resources-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <p data-reveal-heading className="property-hero__mark">
          Illustrative sample
        </p>
        <h2
          data-reveal-heading
          id="learn-resources-heading"
          className="mt-5 max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          Guides in the collection.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          Six short notes, written from the same sample catalogues and demonstration flow already on
          the site.
        </p>

        <div className="learn-resources__grid">
          {learnGuides.map((guide) => (
            <ResourceCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  )
}
