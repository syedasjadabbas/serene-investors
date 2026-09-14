import { useMemo, useRef } from 'react'
import type { Property, StatItem } from '@/types'
import { useCountUp } from '@/hooks/useCountUp'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

function parseAmount(value: string) {
  const numeric = Number(value.replace(/[^0-9.]/g, ''))
  return Number.isFinite(numeric) ? numeric : 0
}

export function PropertyInvestment({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)
  const example = property.investmentExample

  const stats = useMemo<StatItem[]>(() => {
    const rateAmount = parseAmount(example.rate.value)
    return [
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
        amount: rateAmount,
        suffix: '%',
        decimals: 1,
      },
    ]
  }, [example])

  useCountUp(rootRef, stats)

  const [principal, ...rest] = stats

  return (
    <section
      ref={rootRef}
      className="property-breakdown"
      aria-labelledby="investment-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="investment-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          How the sample is structured.
        </h2>

        {principal ? (
          <div data-reveal-item className="property-breakdown__lead">
            <p
              data-count={principal.id}
              className="text-[clamp(3.2rem,6.4vw,5.4rem)] font-semibold leading-none tracking-[-0.035em] tabular-nums"
            >
              {principal.value}
            </p>
            <p className="mt-3 text-sm text-muted">{principal.label}</p>
          </div>
        ) : null}

        <dl className="property-breakdown__rows">
          {rest.map((stat) => (
            <div key={stat.id} data-reveal-item>
              <dt>{stat.label}</dt>
              <dd data-count={stat.id} className="tabular-nums">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p data-reveal-item className="mt-10 max-w-[48ch] text-sm leading-relaxed text-muted">
          {example.disclaimer}
        </p>
      </div>
    </section>
  )
}
