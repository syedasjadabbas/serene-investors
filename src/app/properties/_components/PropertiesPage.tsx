import { ArrowLeftRight, TrendingUp, Wallet } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { InvestmentYieldCalculator } from '@/global/components/sections/InvestmentYieldCalculator'
import { properties, propertiesCta } from '@/global/data/properties'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'
import { useCatalogue } from '../_hooks/useCatalogue'
import { FeaturedPropertyBand } from './FeaturedPropertyBand'
import { PropertyCatalogue } from './PropertyCatalogue'
import { PropertyFilters } from './PropertyFilters'

const cityCount = new Set(properties.map((item) => item.city)).size

// Every figure here is derived from the sample catalogue itself.
const STATS = [
  { value: String(properties.length), label: 'sample listings' },
  { value: String(cityCount), label: cityCount === 1 ? 'city in the collection' : 'cities in the collection' },
  { value: formatSampleAmount(Math.min(...properties.map((item) => item.sampleMinInvestment))), label: 'lowest sample minimum' },
  { value: formatPercent(Math.max(...properties.map((item) => item.sampleYieldPct))), label: 'highest sample yield' },
]

const EARNINGS = [
  {
    icon: Wallet,
    title: 'Rental income',
    body: 'Each building collects rent. After costs, your part of that rent is paid to your account.',
  },
  {
    icon: TrendingUp,
    title: 'Capital appreciation',
    body: 'If the building gains value, you realise that growth when you sell your shares or the building is sold.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Sell your shares',
    body: 'List your shares for other investors in the community when you want to exit. Sales depend on demand and can take time.',
  },
]

export function PropertiesPage() {
  const catalogue = useCatalogue(properties)

  usePageMeta(
    'SERENE INVESTORS | Properties',
    'Browse a fictional SERENE INVESTORS property catalogue. All listings, yields, and prices are sample data for this demonstration platform.',
  )

  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Invest in income-generating properties."
        highlight="income-generating"
        body="Browse the sample collection, filter by type, location and status, then open a listing to read its figures and property record."
        actions={[
          { label: 'Browse properties', href: '#property-collection' },
          { label: 'Try the calculator', href: '#calculator-heading' },
        ]}
      />

      <PageSection label="The collection at a glance" pad="top">
        <StatCards items={STATS} caption="Sample data for demonstration only." />
      </PageSection>

      <PageSection id="property-collection" labelledBy="collection-heading" className="scroll-mt-24">
        <SectionHeading
          id="collection-heading"
          eyebrow="The collection"
          title="Browse sample properties."
          highlight="sample properties"
          body="Filter by type, location, ticket size and status, or sort by yield and minimum investment."
        />
        <PropertyFilters
          filters={catalogue.filters}
          locations={catalogue.locations}
          resultCount={catalogue.visible.length}
          isFiltered={catalogue.isFiltered}
          onChange={catalogue.update}
          onReset={catalogue.reset}
        />
        <PropertyCatalogue properties={catalogue.visible} onReset={catalogue.reset} />
      </PageSection>

      <FeaturedPropertyBand />

      <PageSection labelledBy="earnings-heading">
        <SectionHeading
          id="earnings-heading"
          eyebrow="How a property earns"
          title="Two ways to earn, one way out."
          highlight="earn"
          body="A share in a building can pay you in two ways, and you decide when to step out."
          align="center"
        />
        <FeatureCards items={EARNINGS} className="mt-12" />
      </PageSection>

      <InvestmentYieldCalculator title="Portfolio yield projection" eyebrow="Estimate your allocation" />

      <CtaBand
        title={propertiesCta.heading}
        highlight="next property"
        body={propertiesCta.body}
        actions={[
          { label: propertiesCta.primary.label, href: propertiesCta.primary.href },
          { label: propertiesCta.secondary.label, href: propertiesCta.secondary.href },
        ]}
        image={{ src: propertiesCta.image.src, alt: propertiesCta.image.alt }}
      />
    </>
  )
}
