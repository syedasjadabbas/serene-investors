'use client'

import Link from 'next/link'
import { FileText, KeyRound, Lock, UserCheck } from 'lucide-react'
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

// Product page, dark tone (docs/INNER-PAGE-PATTERNS.md, pattern A), mirroring Golden Visa.
// Protections are described in general product terms. Serene Investors does not claim any
// licence, permit or regulator approval here; regulatory details will be added when published.

const STATS = [
  { value: '1:1', label: 'one holding company for each building' },
  { value: '4 checks', label: 'before a listing goes live' },
  { value: '2-step', label: 'sign-in with a one-time email code' },
  { value: 'Separate', label: 'client money, held apart from ours' },
]

const PROTECTIONS = [
  {
    title: 'Each building in its own holding company',
    body: 'Every property sits in its own holding structure. You own shares in that company, kept apart from Serene Investors’ own business.',
    image: { src: '/images/properties/boulevard-point-hero.jpg', alt: 'A residential tower above a tree-lined boulevard' },
  },
  {
    title: 'Documents for every listing',
    body: 'Each listing comes with its own documents, from ownership records to the valuation, and your holdings appear in your account.',
    image: { src: '/images/story/direct-cedar-court.png', alt: 'A low-rise residential building with its document card' },
  },
  {
    title: 'Independent valuations',
    body: 'Properties are valued by independent valuers before they are listed, so the price you see is not set by us alone.',
    image: { src: '/images/journey/dubai-marina.jpg', alt: 'Dubai Marina towers along the water' },
  },
  {
    title: 'Client money held separately',
    body: 'Uninvested cash and rental payouts are held separately from the money we use to run the company.',
    image: { src: '/images/journey/tower-pool.jpg', alt: 'A rooftop pool beside a residential tower' },
  },
]

const CHECKS = [
  {
    step: 'Step 01',
    title: 'Screen the property',
    body: 'We look at location, condition, rental demand and the numbers behind the asking price before a property goes any further.',
    image: { src: '/images/journey/palm-aerial.jpg', alt: 'Aerial view of a coastal residential district' },
  },
  {
    step: 'Step 02',
    title: 'Get an independent valuation',
    body: 'An independent valuer assesses the property, and the listing price is checked against that valuation.',
    image: { src: '/images/properties/marina-tower.jpg', alt: 'A residential tower in Dubai Marina' },
  },
  {
    step: 'Step 03',
    title: 'Review title and set up the company',
    body: 'Ownership records are reviewed and the property is placed in its own holding company before shares are offered.',
    image: { src: '/images/story/marble-house.png', alt: 'A residential building with stone facades' },
  },
  {
    step: 'Step 04',
    title: 'Publish the documents',
    body: 'The listing goes live with its documents attached, so you can read them before you invest and find them in your account afterwards.',
    image: { src: '/images/story/pines-loft.png', alt: 'A residential loft building among pine trees' },
  },
]

const ACCOUNT = [
  { icon: UserCheck, title: 'Identity checks', body: 'We verify who you are before you can invest or withdraw, which helps keep your account and your money in your hands.' },
  { icon: KeyRound, title: 'One-time sign-in codes', body: 'Signing in asks for a six-digit code sent to your email, as well as your password.' },
  { icon: Lock, title: 'Encrypted connections', body: 'Everything you send to and from Serene Investors travels over an encrypted connection.' },
  { icon: FileText, title: 'Regulation', body: 'Regulatory details will be published on this page. Until then, read the risk notice before you invest.' },
]

const FAQS = [
  {
    q: 'What do I own when I invest?',
    a: 'Shares in the holding company that owns that one building. It is kept apart from Serene Investors’ own business.',
  },
  {
    q: 'Where is my uninvested cash kept?',
    a: 'Cash waiting to be invested and rental payouts are held separately from the money we use to run the company.',
  },
  {
    q: 'How are properties valued?',
    a: 'By independent valuers before a property is listed. The valuation is part of the listing’s documents.',
  },
  {
    q: 'Is Serene Investors regulated?',
    a: (
      <>
        Regulatory details will be published on this page. Until then, please read our{' '}
        <Link href="/legal/risks" className="font-semibold underline underline-offset-4 hover:text-sx-mint">
          risk notice
        </Link>{' '}
        before investing.
      </>
    ),
  },
  {
    q: 'Can I lose money?',
    a: 'Yes. Property values and rental income can go down as well as up, and shares may take time to sell. Only invest what you can afford to leave invested.',
  },
]

/** /security (also served at /regulation and /safety). */
export function SecurityPage() {
  usePageMeta(
    'Serene Investors | Safety & security',
    'How Serene Investors keeps property shares, cash and personal data protected.',
  )

  return (
    <>
      <ProductHero
        tone="dark"
        image={{ src: '/images/journey/dubai-marina.jpg' }}
        eyebrow="Safety & security"
        title="Your investment, protected by design."
        highlight="protected"
        body="Each building sits in its own holding company, every listing comes with its documents, and your cash is held separately from ours."
        actions={[
          { label: 'How listings are checked', href: '#listing-checks' },
          { label: 'Read the risk notice', href: '/legal/risks' },
        ]}
      />

      <HeroCover tone="dark">
        <PageSection tone="dark" label="Security at a glance" pad="top">
          <StatCards items={STATS} tone="dark" caption="How the platform is designed. Illustrative summary." />
        </PageSection>

        <section aria-labelledby="security-protections" className="py-16 sm:py-24">
          <FeatureCarousel heading="How your investment is protected" headingId="security-protections" slides={PROTECTIONS} tone="dark" />
        </section>

        <PageSection tone="dark" id="listing-checks" labelledBy="security-checks">
          <SectionHeading id="security-checks" eyebrow="Before it goes live" title="How a listing is checked." highlight="checked" tone="dark" />
          <div className="mt-6">
            <StickySteps steps={CHECKS} tone="dark" />
          </div>
        </PageSection>

        <PageSection tone="dark" labelledBy="security-account">
          <SectionHeading
            id="security-account"
            title="Protecting your account."
            highlight="your account"
            body="The everyday safeguards around your sign-in and your data."
            tone="dark"
          />
          <FeatureCards items={ACCOUNT} tone="dark" columns={2} className="mt-10" />
          <p className="mt-6 text-sm text-white/60">
            Read the{' '}
            <Link href="/legal/risks" className="font-semibold text-white underline underline-offset-4 hover:text-sx-mint">
              risk notice
            </Link>{' '}
            for the risks of investing in property.
          </p>
        </PageSection>

        <ReviewStrip tone="dark" />

        <PageSection tone="dark" labelledBy="security-faq">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
            <SectionHeading id="security-faq" title="FAQs" body="What investors ask about safety." tone="dark" className="md:sticky md:top-28" />
            <FaqAccordion items={FAQS} tone="dark" />
          </div>
        </PageSection>

        <CtaBand
          title="Invest with peace of mind."
          highlight="peace of mind"
          body="Browse properties, read each listing’s documents, and start from AED 500."
          actions={[
            { label: 'Browse properties', href: '/properties' },
            { label: 'Create an account', href: '/signup' },
          ]}
          image={{ src: '/images/journey/tower-pool.jpg', alt: 'A rooftop pool beside a residential tower in the afternoon sun' }}
        />
      </HeroCover>
    </>
  )
}
