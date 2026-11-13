import type { Property } from '@/global/types/property'
import { PageHero } from '@/global/components/page/PageHero'
import { formatPropertyMeta } from '@/global/lib/format'
import { PropertyGallery } from './PropertyGallery'

export function PropertyHero({ property }: { property: Property }) {
  return (
    <PageHero
      align="left"
      eyebrow={`Sample listing · ${property.type}`}
      title={property.name}
      body={
        <>
          <p className="font-semibold text-sx-ink">{formatPropertyMeta(property.neighborhood, property.city)}</p>
          <p className="mt-2">{property.description}</p>
        </>
      }
      actions={[
        { label: 'Invest in this property', href: `/get-started?intent=property&id=${property.id}` },
        { label: 'Explore properties', href: '/properties', variant: 'outline' },
      ]}
      media={<PropertyGallery property={property} />}
    />
  )
}
