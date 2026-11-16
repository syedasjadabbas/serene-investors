import Link from 'next/link'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { FeatureCarousel } from '@/global/components/page/FeatureCarousel'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { StickySteps } from '@/global/components/page/StickySteps'
import { VideoExplainer } from '@/global/components/page/VideoExplainer'
import { ReviewStrip } from '@/global/components/sections/ReviewStrip'
import { properties } from '@/global/data/properties'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'
import { useCatalogue } from '../_hooks/useCatalogue'
import { PropertiesHeroVisual } from './PropertiesHeroVisual'
import { PropertyCatalogue } from './PropertyCatalogue'
import { PropertyFilters } from './PropertyFilters'

// Product page (Pattern A, tint) in docs/INNER-PAGE-PATTERNS.md: pinned hero → stats → steps →
// how you earn → why us → listings → sign-up band → reviews → FAQ → guide card.

const cityCount = new Set(properties.map((item) => item.city)).size
const lowestMinimum = Math.min(...properties.map((item) => item.sampleMinInvestment))

// Every figure here is derived from the sample catalogue itself.
const STATS = [
  { value: String(properties.length), label: 'sample listings' },
  { value: String(cityCount), label: cityCount === 1 ? 'city in the collection' : 'cities in the collection' },
  { value: formatSampleAmount(lowestMinimum), label: 'lowest sample minimum' },
  { value: formatPercent(Math.max(...properties.map((item) => item.sampleYieldPct))), label: 'highest sample yield' },
]

const STEPS = [
  {
    step: 'Step 01',
    title: 'Browse',
    body: 'Filter the collection by type, location, ticket size and status. Each listing shows its figures, photos and property record.',
    image: { src: '/images/story/choose-cedar-court.png', alt: 'Pale residential court with planted walks and simple geometric facades' },
  },
  {
    step: 'Step 02',
    title: 'Invest',
    body: 'Choose how much to put into a listing, starting from its sample minimum, and confirm in a few steps from your account.',
    image: { src: '/images/journey/tower-pool.jpg', alt: 'A rooftop pool beside a residential tower' },
  },
  {
    step: 'Step 03',
    title: 'Earn',
    body: 'Once a building is let, your part of the rent after costs is paid to your account each quarter.',
    image: { src: '/images/story/receive-cedar-court.png', alt: 'Warm afternoon light on a pale contemporary house and planted front garden' },
  },
  {
    step: 'Step 04',
    title: 'Manage',
    body: 'Follow every holding, payout and document from one dashboard, and list your shares when you want to step out.',
    image: { src: '/images/story/grow-townhouses.png', alt: 'A row of townhouses with planted front gardens' },
  },
]

const EARNINGS = [
  {
    title: 'Rental income',
    body: 'Each building collects rent. After costs, your part of that rent is paid to your account.',
  },
  {
    title: 'Value growth',
    body: 'If the building gains value, you realise that growth when you sell your shares or the building is sold.',
  },
  {
    title: 'Selling your shares',
    body: 'List your shares for other investors in the community when you want to exit. Sales depend on demand and can take time.',
  },
]

const WHY = [
  {
    title: 'Start small',
    body: `Sample listings open from ${formatSampleAmount(lowestMinimum)}, so you can own part of a building without buying all of it.`,
    image: { src: '/images/journey/residential.jpg', alt: 'Low-rise homes with planted terraces' },
  },
  {
    title: 'Documents for every listing',
    body: 'Each listing carries its property record, ownership structure and documentation status, so you can read before you invest.',
    image: { src: '/images/properties/boulevard-point-hero.jpg', alt: 'A residential tower above a tree-lined boulevard' },
  },
  {
    title: 'Invest from anywhere',
    body: 'Browse, invest and follow your holdings online, from wherever you live.',
    image: { src: '/images/journey/dubai-marina.jpg', alt: 'Residential towers along a marina' },
  },
  {
    title: 'Rent paid quarterly',
    body: 'Your share of the rent after costs lands in your account every quarter while the building is let.',
    image: { src: '/images/story/value-cedar-walk.png', alt: 'A planted walk between two pale residential wings' },
  },
  {
    title: 'Spread across buildings',
    body: 'Hold small shares in several properties, types and cities instead of putting everything into one.',
    image: { src: '/images/properties/marina-tower.jpg', alt: 'A residential tower in a waterfront district' },
  },
]

const FAQS = [
  {
    q: 'What am I buying when I invest in a property?',
    a: 'A share in the structure that owns the building. Your share decides your part of the rent after costs and of any change in value.',
  },
  {
    q: 'What is the minimum investment?',
    a: `Each listing shows its own sample minimum. In the current sample collection the lowest is ${formatSampleAmount(lowestMinimum)}.`,
  },
  {
    q: 'How is rental income paid?',
    a: 'Once a building is let, your part of the rent after costs is paid to your account each quarter. Income can vary and is not guaranteed.',
  },
  {
    q: 'What do the listing statuses mean?',
    a: 'Open listings accept investments, Funding listings are still raising, Funded listings have reached their target, and Exited listings have been sold.',
  },
  {
    q: 'Can I sell my shares before the building is sold?',
    a: 'You can list your shares for other investors. A sale depends on demand, so it can take time and the price is not fixed.',
  },
  {
    q: 'What documents can I see before investing?',
    a: 'Every listing has a property record with its ownership structure, documentation and status, alongside its photos and figures.',
  },
  {
    q: 'Are the figures on this site real?',
    a: 'No. Every listing, yield and price here is sample data for demonstration. Returns are never guaranteed and values can fall as well as rise.',
  },
]

export function PropertiesPage() {
  const catalogue = useCatalogue(properties)

  usePageMeta(
    'Serene Investors | Properties',
    'Browse a fictional Serene Investors property catalogue. All listings, yields, and prices are sample data for this demonstration platform.',
  )

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow="Properties"
        title="Own a share of income-generating property."
        highlight="income-generating"
        body="Pick a building, invest from a small sample minimum and collect your part of the rent. Every listing comes with its figures and property record."
        actions={[
          { label: 'Browse listings', href: '#property-collection' },
          { label: 'How it works', href: '/how-it-works' },
        ]}
        visual={<PropertiesHeroVisual />}
      />

      <HeroCover>
        <PageSection label="The collection at a glance" pad="top">
          <StatCards items={STATS} caption="Sample data for demonstration only." />
          <p className="mt-6 text-base text-sx-ink/70">
            Want to see what a share could earn?{' '}
            <Link
              href="/calculator"
              className="font-semibold text-sx-brand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
            >
              Try the returns calculator
            </Link>
          </p>
        </PageSection>

        <PageSection labelledBy="invest-steps">
          <SectionHeading id="invest-steps" eyebrow="How to invest" title="Four steps from browsing to earning." highlight="earning" />
          <div className="mt-6">
            <StickySteps steps={STEPS} />
          </div>
        </PageSection>

        <section aria-labelledby="earn-heading" className="px-4 py-16 sm:px-8 sm:py-24">
          <VideoExplainer
            heading="How you earn from a property share"
            headingId="earn-heading"
            rows={EARNINGS}
            video="/videos/hero.mp4"
            poster={{ src: '/videos/hero-poster.jpg', alt: 'Residential buildings at dusk' }}
          />
        </section>

        <section aria-labelledby="why-heading" className="py-16 sm:py-24">
          <FeatureCarousel heading="Why invest with Serene Investors" headingId="why-heading" slides={WHY} />
        </section>

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

        <CtaBand
          tone="brand"
          title="Start with your first share."
          highlight="first share"
          body="Create a free account to invest, or keep browsing the sample collection."
          actions={[
            { label: 'Create an account', href: '/signup' },
            { label: 'Browse listings', href: '#property-collection' },
          ]}
        />

        <ReviewStrip />

        <PageSection labelledBy="properties-faq">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
            <SectionHeading id="properties-faq" title="FAQs" body="What investors ask before buying a property share." className="md:sticky md:top-28" />
            <FaqAccordion items={FAQS} />
          </div>
        </PageSection>

        <CtaBand
          tone="white"
          title="New to property investing? Start with the guides."
          highlight="the guides"
          body="Short reads on yields, fees, ownership structures and how to compare listings."
          actions={[
            { label: 'Read the guides', href: '/learn' },
            { label: 'Try the calculator', href: '/calculator' },
          ]}
          image={{ src: '/images/journey/palm-aerial.jpg', alt: 'Aerial view of a coastal residential district' }}
        />
      </HeroCover>
    </>
  )
}
