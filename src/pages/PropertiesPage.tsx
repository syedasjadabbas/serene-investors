import { FeaturedPropertyBand } from '@/components/sections/properties/FeaturedPropertyBand'
import { PropertiesCta } from '@/components/sections/properties/PropertiesCta'
import { PropertiesHero } from '@/components/sections/properties/PropertiesHero'
import { PropertyCatalogue } from '@/components/sections/properties/PropertyCatalogue'
import { PropertyFilters } from '@/components/sections/properties/PropertyFilters'
import { properties } from '@/data'
import { useCatalogue } from '@/hooks/useCatalogue'
import { usePageMeta } from '@/hooks/usePageMeta'

export function PropertiesPage() {
  const catalogue = useCatalogue(properties)

  usePageMeta(
    'SERENE INVESTORS | Properties',
    'Browse a fictional SERENE INVESTORS property catalogue. All listings, yields, and prices are sample data for this demonstration platform.',
  )

  return (
    <>
      <PropertiesHero />
      <PropertyFilters
        filters={catalogue.filters}
        locations={catalogue.locations}
        resultCount={catalogue.visible.length}
        onChange={catalogue.update}
      />
      <PropertyCatalogue properties={catalogue.visible} />
      <FeaturedPropertyBand />
      <PropertiesCta />
    </>
  )
}
