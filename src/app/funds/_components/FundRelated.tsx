'use client'

import { useRef } from 'react'
import Link from 'next/link'
import type { Fund } from '@/global/types/fund'
import { funds, sampleFundMinimum } from '@/global/data/funds'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'
import { useRelatedFunds } from '../_hooks/useRelatedFunds'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'

type Props = {
  fund: Fund
}

export function FundRelated({ fund }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const related = useRelatedFunds(fund, funds)
  useSectionReveal(rootRef)

  if (related.length === 0) return null

  return (
    <section ref={rootRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-10 border-t border-line" aria-labelledby="related-funds-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="related-funds-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-ink"
        >
          Other sample funds.
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {related.map((item) => (
            <article key={item.id} data-reveal-item>
              <Link
                href={`/funds/${item.id}`}
                className="group block rounded-2xl transition-all duration-300 hover:shadow-xl p-3 bg-surface border border-black/5"
                aria-label={`${item.name}, ${item.market}. View fund.`}
              >
                <div className="overflow-hidden rounded-xl bg-bg-warm">
                  <img
                    src={withBase(item.image)}
                    alt={item.imageAlt}
                    width={900}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="block w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{item.portfolioLabel}</p>
                <h3 className="mt-1 text-xl font-medium tracking-tight text-ink group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.market} · {item.propertyCount} sample properties
                </p>
                <p className="mt-3 text-sm text-ink">
                  Sample yield {formatPercent(item.sampleReturnPct)}
                  <span className="text-muted">
                    {' '}
                    / {formatSampleAmount(sampleFundMinimum)}
                  </span>
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

