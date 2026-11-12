import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LearnGuide } from '@/types'
import { learnGuides } from '@/data'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

function ResourceCard({ guide }: { guide: LearnGuide }) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)

  return (
    <article
      ref={cardRef}
      id={guide.anchor && guide.anchor !== 'property-guide' ? guide.anchor : undefined}
      data-learn-card
      className="group block p-6 rounded-2xl bg-surface border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <Link href={`/learn/${guide.slug}`} className="block text-ink" aria-label={`${guide.title}. Read guide.`}>
        <div className="m-0 overflow-hidden rounded-xl mb-5 aspect-[4/3] bg-bg-warm">
          <img src={withBase(guide.image)} alt={guide.imageAlt} width={900} height={675} loading="lazy" decoding="async" className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full inline-block mb-3">
          {guide.category}
        </span>
        <h3 className="text-xl font-semibold mb-2 text-ink group-hover:text-primary transition-colors">{guide.title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{guide.description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary transition-colors">
          Read guide
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </article>
  )
}

export function LearnResources() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-learn-card]', depth: true })

  return (
    <section ref={rootRef} className="learn-resources py-20 px-6" aria-labelledby="learn-resources-heading">
      <div className="mx-auto max-w-7xl">
        <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
          Illustrative sample
        </p>
        <h2
          data-reveal-heading
          id="learn-resources-heading"
          className="mt-4 max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-ink"
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

        <div className="learn-resources__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {learnGuides.map((guide) => (
            <ResourceCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  )
}
