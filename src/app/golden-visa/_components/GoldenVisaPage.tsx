'use client'

import { Briefcase, Building2, Lightbulb, Sparkles } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { FeatureCarousel } from '@/global/components/page/FeatureCarousel'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { StickySteps } from '@/global/components/page/StickySteps'
import { ReviewStrip } from '@/global/components/sections/ReviewStrip'
import { usePageMeta } from '@/global/hooks/usePageMeta'

// Reference product page (dark theme). Structure follows the product-page pattern in
// docs/INNER-PAGE-PATTERNS.md: pinned hero → stats → benefit carousel → pinned steps →
// eligibility grid → closing panel → reviews → FAQ.

const STATS = [
  { value: '10 years', label: 'renewable UAE residency' },
  { value: 'AED 2M', label: 'qualifying property value' },
  { value: '3 steps', label: 'from portfolio to permit' },
  { value: '1 account', label: 'for holdings and documents' },
]

const BENEFITS = [
  {
    title: 'Independent residency',
    body: 'Live, work and study in the UAE without a national sponsor or employer.',
    image: { src: '/images/journey/dubai-marina.jpg', alt: 'Dubai Marina towers along the water' },
  },
  {
    title: 'Family included',
    body: 'Sponsor your spouse and children under the same residency route.',
    image: { src: '/images/journey/residential.jpg', alt: 'Low-rise family homes with planted terraces' },
  },
  {
    title: 'No minimum stay',
    body: 'Time spent outside the UAE does not cancel a Golden Visa, so you can keep living where you are.',
    image: { src: '/images/journey/burj-al-arab.jpg', alt: 'The Dubai coastline at sunset' },
  },
  {
    title: 'Assets that keep earning',
    body: 'The property that supports your residency keeps paying its share of the rent every quarter.',
    image: { src: '/images/properties/marina-tower.jpg', alt: 'A residential tower in Dubai Marina' },
  },
]

const STEPS = [
  {
    step: 'Step 01',
    title: 'Build your portfolio',
    body: 'Invest in individual properties or funds until your Dubai holdings reach AED 2,000,000. Spread it across as many buildings as you like.',
    image: { src: '/images/journey/palm-aerial.jpg', alt: 'Aerial view of the Palm Jumeirah' },
  },
  {
    step: 'Step 02',
    title: 'We prepare the documents',
    body: 'We compile your ownership statements and title records and guide your submission to the Dubai Land Department.',
    image: { src: '/images/properties/boulevard-point-hero.jpg', alt: 'A residential tower above a tree-lined boulevard' },
  },
  {
    step: 'Step 03',
    title: 'Receive your Golden Visa',
    body: 'Complete the medical check and biometrics, then receive your Emirates ID and 10-year residency permit.',
    image: { src: '/images/journey/tower-pool.jpg', alt: 'A rooftop pool beside a residential tower' },
  },
]

const ELIGIBILITY = [
  { icon: Building2, title: 'Property investors', body: 'Own one or more UAE properties worth AED 2,000,000 or more in total. Shares across several buildings count.' },
  { icon: Briefcase, title: 'Entrepreneurs', body: 'Founders of a qualifying UAE business or start-up, subject to approval by the relevant authority.' },
  { icon: Lightbulb, title: 'Specialised talent', body: 'Scientists, doctors, creatives and researchers recognised in their field.' },
  { icon: Sparkles, title: 'Outstanding students', body: 'High-achieving graduates of UAE and selected international universities.' },
]

const FAQS = [
  {
    q: 'Can I qualify with several properties?',
    a: 'Yes. The real estate route looks at the total value of your Dubai property holdings, so AED 2,000,000 can be spread across several buildings.',
  },
  {
    q: 'Do you handle the government paperwork?',
    a: 'We prepare your ownership documents and guide you through each submission to the Dubai Land Department and immigration authorities.',
  },
  {
    q: 'Do I keep earning rent while I hold the visa?',
    a: 'Yes. Your shares keep paying their part of the rent each quarter while they count towards your eligibility.',
  },
  {
    q: 'Can my family be included?',
    a: 'A Golden Visa holder can sponsor a spouse and children. Each family member completes their own medical check and biometrics.',
  },
  {
    q: 'How long does it take?',
    a: 'Once your holdings reach the threshold and your documents are submitted, government processing usually takes a few weeks.',
  },
]

export function GoldenVisaPage() {
  usePageMeta(
    'Serene Investors | UAE Golden Visa through real estate',
    'How property ownership through Serene Investors can support a 10-year UAE Golden Visa application.',
  )

  return (
    <>
      <ProductHero
        tone="dark"
        image={{ src: '/images/journey/burj-al-arab.jpg' }}
        eyebrow="UAE Golden Visa"
        title="Your path to a 10-year UAE Golden Visa."
        highlight="Golden Visa"
        body="Own AED 2,000,000 of Dubai property across vetted buildings and apply for long-term residency for you and your family."
        actions={[
          { label: 'Check eligibility', href: '#visa-eligibility' },
          { label: 'Browse properties', href: '/properties' },
        ]}
      />

      <HeroCover tone="dark">
        <PageSection tone="dark" label="Golden Visa at a glance" pad="top">
          <StatCards items={STATS} tone="dark" />
        </PageSection>

        <section aria-labelledby="visa-benefits" className="py-16 sm:py-24">
          <FeatureCarousel heading="Benefits of the UAE Golden Visa" headingId="visa-benefits" slides={BENEFITS} tone="dark" />
        </section>

        <PageSection tone="dark" labelledBy="visa-steps">
          <SectionHeading id="visa-steps" eyebrow="How it works" title="Three steps to residency." highlight="residency" tone="dark" />
          <div className="mt-6">
            <StickySteps steps={STEPS} tone="dark" />
          </div>
        </PageSection>

        <PageSection tone="dark" id="visa-eligibility" labelledBy="visa-eligibility-heading">
          <SectionHeading
            id="visa-eligibility-heading"
            title="Who can apply?"
            body="Property is one of several routes. These are the main groups the UAE recognises."
            tone="dark"
          />
          <FeatureCards items={ELIGIBILITY} tone="dark" columns={2} className="mt-10" />
        </PageSection>

        <ReviewStrip tone="dark" />

        <PageSection tone="dark" labelledBy="visa-faq">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
            <SectionHeading id="visa-faq" title="FAQs" body="What investors ask before they start." tone="dark" className="md:sticky md:top-28" />
            <FaqAccordion items={FAQS} tone="dark" />
          </div>
        </PageSection>

        <CtaBand
          title="Start building towards residency."
          highlight="residency"
          body="Browse vetted properties and funds that can count towards the AED 2,000,000 threshold."
          actions={[
            { label: 'Browse properties', href: '/properties' },
            { label: 'Explore funds', href: '/funds' },
          ]}
          image={{ src: '/images/journey/palm-aerial.jpg', alt: 'Aerial view of the Palm Jumeirah' }}
        />
      </HeroCover>
    </>
  )
}
