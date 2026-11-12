'use client'

import { useMemo, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Fund } from '@/global/types/fund'
import type { StatItem } from '@/global/types/content'
import { fundsBreakdownIntro, sampleFundMinimum } from '@/global/data/funds'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import { useCountUp } from '@/global/hooks/useCountUp'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

type Props = {
  items: Fund[]
}

export function FundBreakdown({ items }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  const stats = useMemo<StatItem[]>(() => {
    const properties = items.reduce((total, item) => total + item.propertyCount, 0)
    return [
      {
        id: 'funds-count',
        label: 'Sample funds',
        value: String(items.length),
        amount: items.length,
      },
      {
        id: 'funds-properties',
        label: 'Sample properties across the collection',
        value: String(properties),
        amount: properties,
      },
      {
        id: 'funds-minimum',
        label: 'Sample minimum',
        value: formatSampleAmount(sampleFundMinimum),
        amount: sampleFundMinimum,
        prefix: '$',
        grouping: true,
      },
    ]
  }, [items])

  useCountUp(rootRef, stats)

  return (
    <section ref={rootRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-10" aria-labelledby="funds-breakdown-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="funds-breakdown-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-ink"
        >
          {fundsBreakdownIntro.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {fundsBreakdownIntro.body}
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {stats.map((stat) => (
            <div key={stat.id} data-reveal-item>
              <p
                data-count={stat.id}
                className="text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-none tracking-[-0.035em] tabular-nums text-ink"
              >
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 mt-12">
          {items.map((fund) => (
            <article key={fund.id} data-reveal-item className="pt-6 border-t border-line lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] lg:items-end lg:gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink">{fund.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {formatFundType(fund.type)} · {fund.market} · {fund.portfolioLabel}
                </p>
              </div>
              <dl className="grid gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3 lg:mt-0">
                <div>
                  <dt className="text-xs text-muted">Sample properties</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight text-ink tabular-nums">{fund.propertyCount}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Sample yield</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight text-ink tabular-nums">{formatPercent(fund.sampleReturnPct)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Sample minimum</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight text-ink tabular-nums">{formatSampleAmount(sampleFundMinimum)}</dd>
                </div>
              </dl>
              <Link href={`/funds/${fund.id}`} className="group inline-flex items-center gap-1.5 min-h-11 mt-4 lg:mt-0 text-sm font-medium text-ink hover:text-primary transition-colors">
                View fund
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

