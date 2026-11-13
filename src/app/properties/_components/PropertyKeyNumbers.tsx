import type { Property } from '@/global/types/property'
import { PageSection } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { formatPercent, formatSampleAmount, formatStatus } from '@/global/lib/format'

export function PropertyKeyNumbers({ property }: { property: Property }) {
  const stats = [
    { value: formatPercent(property.sampleYieldPct), label: 'Sample yield' },
    { value: formatPercent(property.sampleNetYieldPct), label: 'Sample net yield' },
    { value: formatSampleAmount(property.sampleMinInvestment), label: 'Sample minimum' },
    { value: formatStatus(property.status), label: 'Sample status' },
  ]

  return (
    <PageSection label={`${property.name} sample figures`} pad="none">
      <StatCards items={stats} caption="Illustrative sample only. Returns are not guaranteed." />
    </PageSection>
  )
}
