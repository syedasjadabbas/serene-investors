import { FeaturedPropertyBand } from './FeaturedPropertyBand'
import { PropertiesCta } from './PropertiesCta'
import { PropertiesHero } from './PropertiesHero'
import { PropertyCatalogue } from './PropertyCatalogue'
import { PropertyFilters } from './PropertyFilters'
import { InvestmentYieldCalculator } from '@/global/components/sections/InvestmentYieldCalculator'
import { properties } from '@/global/data/properties'
import { useCatalogue } from '../_hooks/useCatalogue'
import { usePageMeta } from '@/global/hooks/usePageMeta'

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
        isFiltered={catalogue.isFiltered}
        onChange={catalogue.update}
        onReset={catalogue.reset}
      />
      <PropertyCatalogue properties={catalogue.visible} onReset={catalogue.reset} />
      <FeaturedPropertyBand />
      <InvestmentYieldCalculator
        title="Portfolio Yield Projection"
        eyebrow="ESTIMATE YOUR ALLOCATION"
      />
      <PropertiesCta />
    </>
  )
}
