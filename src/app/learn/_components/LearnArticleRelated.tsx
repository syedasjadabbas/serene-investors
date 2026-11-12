import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { LearnGuide } from '@/global/types/learn'
import { useRelatedGuides } from '../_hooks/useRelatedGuides'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'

type Props = {
  guide: LearnGuide
}

export function LearnArticleRelated({ guide }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const related = useRelatedGuides(guide)
  useSectionReveal(rootRef, { items: '[data-reveal-item]', depth: true })

  if (related.length === 0) return null

  return (
    <section ref={rootRef} className="learn-related py-20 px-6 bg-bg-warm" aria-labelledby="learn-related-heading">
      <div className="mx-auto max-w-7xl">
        <h2
          data-reveal-heading
          id="learn-related-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-ink"
        >
          Related guides.
        </h2>
        <div className="learn-related__grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {related.map((item) => (
            <article key={item.id} data-reveal-item>
              <Link
                href={`/learn/${item.slug}`}
                className="group block p-6 rounded-2xl bg-surface border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-ink"
                aria-label={`${item.title}. Read guide.`}
              >
                <div className="m-0 overflow-hidden rounded-xl mb-5 aspect-[4/3] bg-bg-warm">
                  <img
                    src={withBase(item.image)}
                    alt={item.imageAlt}
                    width={900}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full inline-block mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-ink group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary transition-colors">
                  Read guide
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
