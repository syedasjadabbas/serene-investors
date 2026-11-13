import { useMemo, useRef } from 'react'
import type { Property } from '@/global/types/property'
import type { StatItem } from '@/global/types/content'
import { Card, Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { useCountUp } from '@/global/hooks/useCountUp'
import { cn } from '@/global/lib/cn'

function parseAmount(value: string) {
  const numeric = Number(value.replace(/[^0-9.]/g, ''))
  return Number.isFinite(numeric) ? numeric : 0
}

export function PropertyInvestment({ property }: { property: Property }) {
  const rootRef = useRef<HTMLDivElement>(null)
  const example = property.investmentExample

  const stats = useMemo<StatItem[]>(
    () => [
      {
        id: 'breakdown-amount',
        label: example.amountNote,
        value: example.amountLabel,
        amount: parseAmount(example.amountLabel),
        prefix: '$',
        grouping: true,
      },
      {
        id: 'breakdown-rent',
        label: example.rental.label,
        value: example.rental.value,
        amount: example.rental.amount,
        prefix: '+$',
        grouping: true,
      },
      {
        id: 'breakdown-value',
        label: example.valueChange.label,
        value: example.valueChange.value,
        amount: example.valueChange.amount,
        prefix: '+$',
        grouping: true,
      },
      {
        id: 'breakdown-total',
        label: example.total.label,
        value: example.total.value,
        amount: parseAmount(example.total.value),
        prefix: '+$',
        grouping: true,
      },
      {
        id: 'breakdown-rate',
        label: example.rate.label,
        value: example.rate.value,
        amount: parseAmount(example.rate.value),
        suffix: '%',
        decimals: 1,
      },
    ],
    [example],
  )

  useCountUp(rootRef, stats)

  const [principal, ...rest] = stats

  return (
    <PageSection labelledBy="investment-heading" tone="white">
      <div ref={rootRef}>
        <SectionHeading
          id="investment-heading"
          eyebrow="Sample example"
          title="How the sample is structured."
          highlight="structured"
          body="One illustrative investment, split into the rent it could earn and the change in the property's value."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-[2fr_3fr]">
          {principal && (
            <Card tone="forest" className="flex min-h-[240px] flex-col justify-between gap-10">
              <Eyebrow>{principal.label}</Eyebrow>
              <p
                data-count={principal.id}
                className="whitespace-nowrap font-heading text-5xl font-bold tabular-nums tracking-[-0.035em] sm:text-7xl"
              >
                {principal.value}
              </p>
            </Card>
          )}

          <Card tone="paper">
            <dl className="divide-y divide-sx-ink/10">
              {rest.map((stat, index) => {
                const last = index === rest.length - 1
                return (
                  <div key={stat.id} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                    <dt className="text-sm text-sx-ink/65 sm:text-base">{stat.label}</dt>
                    <dd
                      data-count={stat.id}
                      className={cn(
                        'font-heading text-2xl font-bold tabular-nums tracking-[-0.02em] sm:text-3xl',
                        last && 'text-sx-brand',
                      )}
                    >
                      {stat.value}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </Card>
        </div>

        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-sx-ink/50">{example.disclaimer}</p>
      </div>
    </PageSection>
  )
}
