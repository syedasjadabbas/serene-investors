import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Fund } from '@/types'
import { funds, sampleFundMinimum } from '@/data'
import { formatPercent, formatSampleAmount } from '@/lib/format'
import { useRelatedFunds } from '@/hooks/useRelatedFunds'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  fund: Fund
}

export function FundRelated({ fund }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const related = useRelatedFunds(fund, funds)
  useSectionReveal(rootRef)

  if (related.length === 0) return null

  return (
    <section ref={rootRef} className="fund-related" aria-labelledby="related-funds-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="related-funds-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          Other sample funds.
        </h2>

        <div className="fund-related__grid">
          {related.map((item) => (
            <article key={item.id} data-reveal-item>
              <Link
                to={`/funds/${item.id}`}
                className="fund-related__card"
                aria-label={`${item.name}, ${item.market}. View fund.`}
              >
                <div className="fund-related__media">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    width={900}
                    height={675}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="mt-4 text-sm text-muted">{item.portfolioLabel}</p>
                <h3 className="mt-1 text-xl font-medium tracking-tight">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">
                  {item.market} · {item.propertyCount} sample properties
                </p>
                <p className="mt-3 text-sm">
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
