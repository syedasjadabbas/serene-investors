import { useRef } from 'react'
import type { Property } from '@/types'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyInvestment({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)
  const example = property.investmentExample
  const componentTotal = example.rental.amount + example.valueChange.amount
  const parts = [example.rental, example.valueChange]

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip bg-bg-warm px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="investment-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)] lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p data-reveal-heading className="brand-label text-muted">
            Sample investment
          </p>
          <h2
            data-reveal-heading
            id="investment-heading"
            className="mt-3 max-w-[14ch] text-[clamp(1.85rem,3vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
          >
            See how the numbers are structured.
          </h2>
        </div>

        <div className="mt-10 lg:mt-1">
          <p data-reveal-item className="text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.03em] tabular-nums">
            {example.amountLabel}
          </p>
          <p data-reveal-item className="mt-2 text-sm text-muted">
            {example.amountNote}
          </p>

          <div data-reveal-item className="mt-8 border-t border-line pt-8">
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.12em] text-subtle">
              Investment
            </p>
            <div className="return-flow__rule" aria-hidden="true" />
            <div className="flex items-end gap-2">
              {parts.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0"
                  style={{ flexGrow: Math.max((item.amount / componentTotal) * 100, 18), flexBasis: 0 }}
                >
                  <div
                    className={
                      item.label.includes('rental')
                        ? 'return-flow__bar return-flow__bar--rent'
                        : 'return-flow__bar return-flow__bar--value'
                    }
                  />
                  <p className="mt-3 text-sm text-muted">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold tabular-nums tracking-tight text-primary">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="return-flow__rule" aria-hidden="true" />
            <p className="text-center text-[11px] font-medium uppercase tracking-[0.12em] text-subtle">
              Illustrative outcome
            </p>
          </div>

          <ul className="mt-8 border-t border-line">
            {parts.map((item) => (
              <li
                key={`${item.label}-row`}
                data-reveal-item
                className="flex items-baseline justify-between gap-6 border-b border-line py-4"
              >
                <span className="text-[0.95rem] text-muted">{item.label}</span>
                <span className="text-lg font-semibold tabular-nums tracking-tight text-primary">
                  {item.value}
                </span>
              </li>
            ))}
          </ul>

          <div data-reveal-item className="border-b border-line py-5">
            <div className="flex items-baseline justify-between gap-6">
              <span className="text-[0.95rem] font-medium">{example.total.label}</span>
              <span className="text-xl font-semibold tabular-nums tracking-tight text-accent">
                {example.total.value}
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-6">
              <span className="text-[0.95rem] font-medium">{example.rate.label}</span>
              <span className="text-xl font-semibold tabular-nums tracking-tight text-accent">
                {example.rate.value}
              </span>
            </div>
          </div>

          <p data-reveal-item className="mt-6 max-w-[46ch] text-sm leading-relaxed text-muted">
            {example.disclaimer}
          </p>
        </div>
      </div>
    </section>
  )
}
