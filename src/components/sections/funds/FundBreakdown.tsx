import { useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Fund, StatItem } from '@/types'
import { fundsBreakdownIntro, sampleFundMinimum } from '@/data'
import { formatFundType, formatPercent, formatSampleAmount } from '@/lib/format'
import { useCountUp } from '@/hooks/useCountUp'
import { useSectionReveal } from '@/hooks/useSectionReveal'

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
    <section ref={rootRef} className="funds-breakdown" aria-labelledby="funds-breakdown-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="funds-breakdown-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {fundsBreakdownIntro.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {fundsBreakdownIntro.body}
        </p>

        <div className="funds-breakdown__stats">
          {stats.map((stat) => (
            <div key={stat.id} data-reveal-item>
              <p
                data-count={stat.id}
                className="text-[clamp(3rem,6vw,5.2rem)] font-semibold leading-none tracking-[-0.035em] tabular-nums"
              >
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="funds-breakdown__rows">
          {items.map((fund) => (
            <article key={fund.id} data-reveal-item className="funds-breakdown__row">
              <div>
                <h3>{fund.name}</h3>
                <p>
                  {formatFundType(fund.type)} · {fund.market} · {fund.portfolioLabel}
                </p>
              </div>
              <dl>
                <div>
                  <dt>Sample properties</dt>
                  <dd className="tabular-nums">{fund.propertyCount}</dd>
                </div>
                <div>
                  <dt>Sample yield</dt>
                  <dd className="tabular-nums">{formatPercent(fund.sampleReturnPct)}</dd>
                </div>
                <div>
                  <dt>Sample minimum</dt>
                  <dd className="tabular-nums">{formatSampleAmount(sampleFundMinimum)}</dd>
                </div>
              </dl>
              <Link to={`/funds/${fund.id}`} className="funds-breakdown__link">
                View fund
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
