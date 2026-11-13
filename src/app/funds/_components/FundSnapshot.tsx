import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { sampleFundMinimum } from '@/global/data/funds'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import type { Fund } from '@/global/types/fund'

type Props = {
  fund: Fund
}

export function FundSnapshot({ fund }: Props) {
  const stats = [
    { value: formatPercent(fund.sampleReturnPct), label: 'Sample yield' },
    { value: String(fund.propertyCount), label: 'Sample properties' },
    { value: formatSampleAmount(sampleFundMinimum), label: 'Sample minimum' },
    { value: formatFundType(fund.type), label: 'Fund type' },
  ]

  return (
    <PageSection labelledBy="fund-snapshot-heading" pad="top">
      <SectionHeading id="fund-snapshot-heading" eyebrow="At a glance" title="The sample figures." highlight="sample figures" />
      <StatCards items={stats} caption="Illustrative sample only. Returns are not guaranteed." className="mt-10" />
    </PageSection>
  )
}
