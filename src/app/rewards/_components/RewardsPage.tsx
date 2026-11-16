'use client'

import { Coins } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { FeatureCarousel } from '@/global/components/page/FeatureCarousel'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { StickySteps } from '@/global/components/page/StickySteps'
import { RewardsTiers } from '@/global/components/sections/RewardsTiers'
import { usePageMeta } from '@/global/hooks/usePageMeta'

// Product page, tint tone (docs/INNER-PAGE-PATTERNS.md, pattern A). Figures come from the
// illustrative tiers in RewardsTiers.

const STATS = [
  { value: '2%', label: 'top cashback on UAE investments' },
  { value: 'AED 450', label: 'top referral reward per friend' },
  { value: '4 tiers', label: 'Intro, Plus, Pro and Elite' },
  { value: '12 months', label: 'rolling window that sets your tier' },
]

const STEPS = [
  {
    step: 'Step 01',
    title: 'Invest',
    body: 'Start with as little as AED 500 in a property or fund. Every qualifying investment counts towards your tier.',
    image: { src: '/images/story/choose-cedar-court.png', alt: 'A low-rise residential building shown as a property card' },
  },
  {
    step: 'Step 02',
    title: 'Reach a tier',
    body: 'Your tier follows what you have invested over the last 12 months, from Intro up to Elite. Each tier keeps the benefits of the ones before it.',
    image: { src: '/images/story/grow-townhouses.png', alt: 'A row of townhouses with planted front gardens' },
  },
  {
    step: 'Step 03',
    title: 'Earn cashback',
    body: 'From the Pro tier, a share of every qualifying investment comes back to your wallet: 1% on UAE investments at Pro and 2% at Elite.',
    image: { src: '/images/story/receive-cedar-court.png', alt: 'A residential building with a payout card beside it' },
  },
  {
    step: 'Step 04',
    title: 'Refer friends',
    body: 'Invite friends and receive a referral reward when they make their first qualifying investment, from AED 150 at Intro up to AED 450 at Elite.',
    image: { src: '/images/journey/residential.jpg', alt: 'A row of modern low-rise homes with balconies and planted terraces' },
  },
]

const MORE_WAYS = [
  {
    title: 'Share and earn',
    body: 'Invite a friend and receive a referral reward when they make their first qualifying investment. The reward grows with your tier.',
    image: { src: '/images/journey/residential.jpg', alt: 'Modern low-rise homes with planted terraces' },
  },
  {
    title: 'Early access to funds',
    body: 'At Elite, invest in new KSA funds before they open to the general public.',
    image: { src: '/images/funds/fund-urban-living.png', alt: 'An urban residential fund building' },
  },
  {
    title: 'Automatic RentReinvest',
    body: 'From Plus, put your rental income back to work automatically, on autopilot.',
    image: { src: '/images/story/value-cedar-walk.png', alt: 'A tree-lined walk beside residential buildings' },
  },
  {
    title: 'No payment processing fees',
    body: 'We cover payment processing fees when you use your card to invest, from your very first investment.',
    image: { src: '/images/properties/marina-tower.jpg', alt: 'A residential tower in Dubai Marina' },
  },
]

const FAQS = [
  {
    q: 'How is my tier decided?',
    a: 'By how much you have invested in the last 12 months. Intro starts from AED 500, Plus from AED 15,000, Pro from AED 50,000 and Elite from AED 150,000 (illustrative figures).',
  },
  {
    q: 'When do I start earning cashback?',
    a: 'From the Pro tier. A share of every qualifying investment comes back to your wallet: 1% on UAE and 0.50% on KSA investments at Pro, 2% and 0.75% at Elite.',
  },
  {
    q: 'How do referral rewards work?',
    a: 'Share your invite link. When a friend makes their first qualifying investment you receive a reward, from AED 150 at Intro up to AED 450 at Elite.',
  },
  {
    q: 'Do I keep benefits from earlier tiers?',
    a: 'Yes. Each tier keeps the benefits of the ones before it, with new ones added on top.',
  },
  {
    q: 'What is RentReinvest?',
    a: 'From the Plus tier you can reinvest your rental income automatically instead of leaving it in your wallet.',
  },
  {
    q: 'Are these figures final?',
    a: 'No. The tiers and amounts shown are illustrative. Tier benefits apply once your qualifying investment total is verified.',
  },
]

/** Sample tier card that rises from the bottom of the hero. */
function TierVisual() {
  return (
    <div className="mx-auto w-full max-w-md rounded-t-[30px] bg-white p-6 pb-16 text-left text-sx-ink sm:p-8 sm:pb-20">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-sx-sand px-3 py-1 text-xs font-semibold">Sample · Tier 3</span>
        <span className="text-xs text-sx-ink/60">Invested in 12 months</span>
      </div>
      <p className="mt-5 font-heading text-4xl font-bold tracking-[-0.03em]">Pro</p>
      <p className="mt-1 font-heading text-xl font-bold text-sx-brand">AED 50,000+</p>
      <div className="mt-5 flex items-center gap-3 rounded-[20px] bg-sx-forest p-4 text-white">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sx-mint text-sx-ink">
          <Coins size={20} aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold">1% cashback in the UAE</p>
          <p className="text-xs text-white/70">Paid back to your wallet</p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between text-xs text-sx-ink/60">
          <span>Progress to Elite</span>
          <span>Illustrative</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-sx-paper">
          <div className="h-full w-2/5 rounded-full bg-sx-brand" />
        </div>
      </div>
    </div>
  )
}

export function RewardsPage() {
  usePageMeta(
    'Serene Investors | Serene Rewards',
    'Earn cashback, referral rewards and early access to funds as you grow your Serene Investors portfolio.',
  )

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow="Serene Rewards"
        title="Earn more as you grow."
        highlight="grow"
        body="Every investment moves you closer to a higher tier. Unlock cashback, bigger referral rewards and early access to new funds."
        actions={[
          { label: 'Create an account', href: '/signup' },
          { label: 'See the tiers', href: '#reward-tiers' },
        ]}
        visual={<TierVisual />}
      />

      <HeroCover>
        <PageSection label="Serene Rewards at a glance" pad="top">
          <StatCards items={STATS} caption="Illustrative figures for demonstration." />
        </PageSection>

        <PageSection labelledBy="rewards-steps">
          <SectionHeading id="rewards-steps" eyebrow="How it works" title="How rewards work." highlight="rewards" />
          <div className="mt-6">
            <StickySteps steps={STEPS} />
          </div>
        </PageSection>

        <RewardsTiers id="reward-tiers" />

        <section aria-labelledby="rewards-more" className="py-16 sm:py-24">
          <FeatureCarousel heading="More ways to earn" headingId="rewards-more" slides={MORE_WAYS} />
        </section>

        <CtaBand
          tone="brand"
          title="Share Serene Investors with friends. Earn together."
          highlight="Earn together."
          body="Create an account to get your invite link and start moving up the tiers."
          actions={[
            { label: 'Get your invite link', href: '/signup' },
            { label: 'Browse properties', href: '/properties' },
          ]}
        />

        <PageSection labelledBy="rewards-faq">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
            <SectionHeading id="rewards-faq" title="FAQs" body="What investors ask about Serene Rewards." className="md:sticky md:top-28" />
            <FaqAccordion items={FAQS} />
          </div>
        </PageSection>
      </HeroCover>
    </>
  )
}
