import { useMemo, useRef } from 'react'
import type { Fund, StatItem } from '@/types'
import { fundSampleStatus, sampleFundMinimum } from '@/data'
import { formatFundType, formatPercent, formatSampleAmount } from '@/lib/format'
import { useCountUp } from '@/hooks/useCountUp'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  fund: Fund
}

export function FundSnapshot({ fund }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  const stats = useMemo<StatItem[]>(
    () => [
      {
        id: 'fund-yield',
        label: 'Sample yield',
        value: formatPercent(fund.sampleReturnPct),
        amount: fund.sampleReturnPct,
        suffix: '%',
        decimals: 1,
      },
      {
        id: 'fund-count',
        label: 'Sample properties',
        value: String(fund.propertyCount),
        amount: fund.propertyCount,
      },
      {
        id: 'fund-minimum',
        label: 'Sample minimum',
        value: formatSampleAmount(sampleFundMinimum),
        amount: sampleFundMinimum,
        prefix: '$',
        grouping: true,
      },
    ],
    [fund.propertyCount, fund.sampleReturnPct],
  )

  useCountUp(rootRef, stats)

  const facts = [
    { label: 'Investment theme', value: fund.portfolioLabel },
    { label: 'Location', value: fund.market },
    { label: 'Fund type', value: formatFundType(fund.type) },
    { label: 'Status', value: fundSampleStatus },
  ]

  return (
    <section ref={rootRef} className="fund-snapshot" aria-labelledby="fund-snapshot-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="fund-snapshot-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          The sample figures.
        </h2>

        <div className="fund-snapshot__grid">
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

        <dl className="fund-snapshot__facts">
          {facts.map((fact) => (
            <div key={fact.label} data-reveal-item>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <p data-reveal-item className="mt-10 max-w-[46ch] text-sm leading-relaxed text-muted">
          Illustrative sample only. Returns are not guaranteed.
        </p>
      </div>
    </section>
  )
}
