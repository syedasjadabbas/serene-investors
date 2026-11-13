import type { Property } from '@/global/types/property'
import { CtaBand } from '@/global/components/page/CtaBand'
import { formatSampleAmount } from '@/global/lib/format'

export function PropertyClosingCta({ property }: { property: Property }) {
  return (
    <CtaBand
      title="Explore the opportunity."
      highlight="opportunity"
      body={`${property.name}. Sample minimum ${formatSampleAmount(property.sampleMinInvestment)}.`}
      actions={[
        { label: 'Invest in this property', href: `/get-started?intent=property&id=${property.id}` },
        { label: 'Back to properties', href: '/properties' },
      ]}
      image={{ src: property.image, alt: property.imageAlt }}
    />
  )
}
