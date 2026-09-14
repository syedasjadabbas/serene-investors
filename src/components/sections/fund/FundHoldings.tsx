import { useRef } from 'react'
import type { Fund } from '@/types'
import { fundSampleStatus, sampleFundMinimum } from '@/data'
import { formatFundType, formatPercent, formatSampleAmount } from '@/lib/format'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  fund: Fund
}

export function FundHoldings({ fund }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)

  const rows = [
    { label: 'Sample properties', value: String(fund.propertyCount) },
    { label: 'Investment theme', value: fund.portfolioLabel },
    { label: 'Location', value: fund.market },
    { label: 'Fund type', value: formatFundType(fund.type) },
    { label: 'Sample yield', value: formatPercent(fund.sampleReturnPct) },
    { label: 'Sample minimum', value: formatSampleAmount(sampleFundMinimum) },
    { label: 'Status', value: fundSampleStatus },
  ]

  return (
    <section ref={rootRef} className="fund-holdings" aria-labelledby="fund-holdings-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="fund-holdings-heading"
          className="max-w-[14ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          What this sample fund contains.
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          Only the published demonstration fields are listed here. Individual sample buildings are
          not assigned to this fund in the current catalogue.
        </p>

        <dl className="fund-holdings__rows">
          {rows.map((row) => (
            <div key={row.label} data-reveal-item>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
