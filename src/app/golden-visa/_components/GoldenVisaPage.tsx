'use client'

import { Award, Building2, FileCheck, Globe2, Sparkles, Users } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageHero } from '@/global/components/page/PageHero'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { StepRow } from '@/global/components/page/StepRow'
import { usePageMeta } from '@/global/hooks/usePageMeta'

const STATS = [
  { value: '10 years', label: 'renewable UAE residency' },
  { value: 'AED 2M', label: 'qualifying property value' },
  { value: 'Family', label: 'spouse and children included' },
  { value: 'Online', label: 'documents handled digitally' },
]

const BENEFITS = [
  { icon: Award, title: '10-year renewable residency', body: 'Live, work and study in the UAE without a national sponsor or employer.' },
  { icon: Users, title: 'Family sponsorship', body: 'Sponsor your spouse and children under the same residency route.' },
  { icon: Sparkles, title: 'No personal income tax', body: 'The UAE does not levy personal income tax on rental income today.' },
  { icon: Globe2, title: 'No minimum stay', body: 'Time spent outside the UAE does not cancel a Golden Visa.' },
  { icon: Building2, title: 'Spread across buildings', body: 'Reach the threshold across several vetted properties rather than one unit.' },
  { icon: FileCheck, title: 'Guided paperwork', body: 'We prepare your ownership records and walk you through each submission.' },
]

const STEPS = [
  {
    step: 'Step 01',
    title: 'Build an AED 2M portfolio',
    body: 'Invest in individual properties or funds until your Dubai holdings reach the AED 2,000,000 threshold.',
    image: { src: '/images/journey/dubai-marina.jpg', alt: 'Dubai Marina towers along the water' },
  },
  {
    step: 'Step 02',
    title: 'We prepare your documents',
    body: 'We compile your title records and ownership statements and guide your submission to the Dubai Land Department.',
    image: { src: '/images/properties/boulevard-point-hero.jpg', alt: 'A residential tower above a tree-lined boulevard' },
  },
  {
    step: 'Step 03',
    title: 'Receive your Golden Visa',
    body: 'Complete the medical check and biometrics, then receive your Emirates ID and 10-year residency permit.',
    image: { src: '/images/journey/burj-al-arab.jpg', alt: 'The Dubai coastline at sunset' },
  },
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
      <PageHero
        tone="dark"
        image={{ src: '/images/journey/burj-al-arab.jpg' }}
        eyebrow="UAE Golden Visa"
        title="A 10-year UAE Golden Visa through real estate."
        highlight="Golden Visa"
        body="Own AED 2,000,000 of Dubai property across vetted buildings and apply for long-term residency for you and your family."
        actions={[
          { label: 'Explore qualifying properties', href: '/properties' },
          { label: 'How it works', href: '#visa-steps' },
        ]}
      />

      <PageSection label="Golden Visa at a glance" pad="top">
        <StatCards items={STATS} />
      </PageSection>

      <PageSection labelledBy="visa-benefits">
        <SectionHeading
          id="visa-benefits"
          eyebrow="Benefits"
          title="Why apply through property?"
          highlight="property"
          body="The real estate route links your residency to assets you already own, and those assets keep earning."
          align="center"
        />
        <FeatureCards items={BENEFITS} className="mt-12" />
      </PageSection>

      <PageSection id="visa-steps" labelledBy="visa-steps-heading" tone="white">
        <SectionHeading id="visa-steps-heading" eyebrow="The process" title="Three steps to residency." align="center" />
        <div className="mt-12 flex flex-col gap-6">
          {STEPS.map((step, index) => (
            <StepRow
              key={step.step}
              id={`visa-step-${index}`}
              step={step.step}
              title={step.title}
              body={step.body}
              image={step.image}
              reverse={index % 2 === 1}
              tone={index === 1 ? 'dark' : 'white'}
            />
          ))}
        </div>
      </PageSection>

      <PageSection labelledBy="visa-faq">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <SectionHeading id="visa-faq" title="Golden Visa questions" body="What investors ask before they start." />
          <FaqAccordion items={FAQS} />
        </div>
      </PageSection>

      <CtaBand
        title="Start building towards residency."
        highlight="residency"
        body="Browse vetted properties and funds that can count towards the AED 2M threshold."
        actions={[
          { label: 'Browse properties', href: '/properties' },
          { label: 'Explore funds', href: '/funds' },
        ]}
        image={{ src: '/images/journey/palm-aerial.jpg', alt: 'Aerial view of the Palm Jumeirah' }}
      />
    </>
  )
}
