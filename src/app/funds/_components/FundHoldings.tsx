import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { fundSampleStatus, sampleFundMinimum } from '@/global/data/funds'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  fund: Fund
}

export function FundHoldings({ fund }: Props) {
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
    <PageSection tone="white" labelledBy="fund-holdings-heading">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <SectionHeading
          id="fund-holdings-heading"
          eyebrow="Fund details"
          title="What this sample fund contains."
          highlight="contains"
          body="Only the published demonstration fields are listed here. Individual sample buildings are not assigned to this fund in the current catalogue."
        />
        <dl className="flex flex-col gap-2">
          {rows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-6 rounded-[16px] bg-sx-paper px-5 py-4">
              <dt className="text-sm text-sx-ink/60">{row.label}</dt>
              <dd className="text-right font-semibold tabular-nums text-sx-ink">{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </PageSection>
  )
}
