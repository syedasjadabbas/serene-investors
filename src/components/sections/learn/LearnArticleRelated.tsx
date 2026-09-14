import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { LearnGuide } from '@/types'
import { useRelatedGuides } from '@/hooks/useRelatedGuides'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  guide: LearnGuide
}

export function LearnArticleRelated({ guide }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const related = useRelatedGuides(guide)
  useSectionReveal(rootRef, { items: '[data-reveal-item]', depth: true })

  if (related.length === 0) return null

  return (
    <section ref={rootRef} className="learn-related" aria-labelledby="learn-related-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="learn-related-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          Related guides.
        </h2>
        <div className="learn-related__grid">
          {related.map((item) => (
            <article key={item.id} data-reveal-item>
              <Link
                to={`/learn/${item.slug}`}
                className="learn-related__card"
                aria-label={`${item.title}. Read guide.`}
              >
                <div className="learn-related__media">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={900}
                    height={675}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="learn-kicker mt-4">{item.category}</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                <span className="learn-card__action">
                  Read guide
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
