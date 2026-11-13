import { Building2, MapPin, Percent, Wallet } from 'lucide-react'
import type { Property } from '@/global/types/property'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { formatPercent, formatPropertyMeta, formatSampleAmount } from '@/global/lib/format'

export function PropertyFeatures({ property }: { property: Property }) {
  const cards = [
    { icon: Building2, title: property.type, body: property.description },
    {
      icon: MapPin,
      title: formatPropertyMeta(property.neighborhood, property.city),
      body: `Occupancy: ${property.occupancyLabel}.`,
    },
    {
      icon: Wallet,
      title: `${formatSampleAmount(property.sampleMinInvestment)} sample minimum`,
      body: `${property.samplePriceLabel} per sample investment.`,
    },
    {
      icon: Percent,
      title: `${formatPercent(property.sampleYieldPct)} sample yield`,
      body: `Sample net yield ${formatPercent(property.sampleNetYieldPct)}.`,
    },
  ]

  return (
    <PageSection labelledBy="features-heading">
      <SectionHeading id="features-heading" eyebrow="At a glance" title="Why this listing." align="center" />
      <FeatureCards items={cards} columns={4} className="mt-12" />
    </PageSection>
  )
}
