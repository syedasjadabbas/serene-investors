import { useMemo, useRef } from 'react'
import type { Property, StatItem } from '@/types'
import { formatPercent, formatPropertyMeta, formatSampleAmount, formatStatus } from '@/lib/format'
import { useCountUp } from '@/hooks/useCountUp'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyKeyNumbers({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  const stats = useMemo<StatItem[]>(
    () => [
      {
        id: 'detail-yield',
        label: 'Sample yield',
        value: formatPercent(property.sampleYieldPct),
        amount: property.sampleYieldPct,
        suffix: '%',
        decimals: 1,
      },
      {
        id: 'detail-minimum',
        label: 'Sample minimum',
        value: formatSampleAmount(property.sampleMinInvestment),
        amount: property.sampleMinInvestment,
        prefix: '$',
        grouping: true,
      },
    ],
    [property.sampleMinInvestment, property.sampleYieldPct],
  )

  useCountUp(rootRef, stats)

  const facts = [
    { label: 'Property type', value: property.type },
    { label: 'Location', value: formatPropertyMeta(property.neighborhood, property.city) },
    { label: 'Sample status', value: formatStatus(property.status) },
    { label: 'Completion', value: property.completion },
  ]

  return (
    <section
      ref={rootRef}
      className="property-snapshot"
      aria-labelledby="snapshot-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="snapshot-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          The sample figures.
        </h2>

        <div className="property-snapshot__grid">
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

        <dl className="property-snapshot__facts">
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
