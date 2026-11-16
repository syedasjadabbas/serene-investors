'use client'

import { Calculator } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { FeatureCarousel } from '@/global/components/page/FeatureCarousel'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { StickySteps } from '@/global/components/page/StickySteps'
import { ReviewStrip } from '@/global/components/sections/ReviewStrip'
import { PillLink } from '@/global/components/ui/PillLink'
import { catalogueFeaturedFund, funds } from '@/global/data/funds'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { fundsFaq, fundsSlides, fundsStats, fundsStatsCaption, fundsSteps } from '../_lib/funds-page'
import { FundCollection } from './FundCollection'
import { FundsHeroVisual } from './FundsHeroVisual'

// Product page (tint), Pattern A in docs/INNER-PAGE-PATTERNS.md: pinned hero → stats → steps →
// fund collection → benefit carousel → calculator link → sign-up band → reviews → FAQ → guide card.

export function FundsPage() {
  usePageMeta(
    'Serene Investors | Funds',
    'Browse a fictional Serene Investors fund collection. All yields, minima, and property counts are sample data for this demonstration platform.',
  )

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow="Sample funds"
        title="Many buildings in one fund."
        highlight="one fund"
        body="Choose a fund built around one theme and one market, and spread a single allocation across all of its properties."
        actions={[
          { label: 'Browse funds', href: '#fund-collection' },
          { label: 'Try the calculator', href: '/calculator' },
        ]}
        visual={<FundsHeroVisual />}
      />

      <HeroCover>
        <PageSection label="The fund collection at a glance" pad="top">
          <StatCards items={fundsStats} caption={fundsStatsCaption} />
        </PageSection>

        <PageSection labelledBy="funds-steps-heading">
          <SectionHeading id="funds-steps-heading" eyebrow="How a fund works" title="Four steps, many buildings." highlight="many buildings" />
          <div className="mt-6">
            <StickySteps steps={fundsSteps} />
          </div>
        </PageSection>

        <FundCollection items={funds} />

        <section aria-labelledby="funds-why-heading" className="py-16 sm:py-24">
          <FeatureCarousel heading="Why choose a fund" headingId="funds-why-heading" slides={fundsSlides} />
        </section>

        <PageSection labelledBy="funds-calculator-heading" pad="bottom">
          <div className="flex flex-col gap-6 rounded-[30px] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-sx-forest text-sx-mint">
                <Calculator size={24} aria-hidden="true" />
              </span>
              <div>
                <h2 id="funds-calculator-heading" className="font-heading text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                  Model a sample allocation
                </h2>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-sx-ink/65">
                  Enter an amount and a holding period to see sample rent and value figures. Projections are illustrative only.
                </p>
              </div>
            </div>
            <PillLink href="/calculator" className="shrink-0 self-start sm:self-center">
              Open the calculator
            </PillLink>
          </div>
        </PageSection>

        <CtaBand
          tone="brand"
          title="Start with a sample fund."
          highlight="sample fund"
          body="Walk the demonstration onboarding with a fund already selected. No payment is taken."
          actions={[
            { label: 'Get started', href: `/get-started?intent=fund&id=${catalogueFeaturedFund.id}` },
            { label: 'How it works', href: '/how-it-works' },
          ]}
        />

        <ReviewStrip />

        <PageSection labelledBy="funds-faq-heading">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
            <SectionHeading
              id="funds-faq-heading"
              title="Fund FAQs"
              body="What people ask before they choose a fund."
              className="md:sticky md:top-28"
            />
            <FaqAccordion items={fundsFaq} />
          </div>
        </PageSection>

        <CtaBand
          tone="white"
          title="Read the guide to funds."
          highlight="guide"
          body="Short guides on how funds, single properties and sample figures work on Serene Investors."
          actions={[
            { label: 'Read the guides', href: '/learn' },
            { label: 'Browse funds', href: '#fund-collection' },
          ]}
          image={{ src: '/images/properties/boulevard-point-hero.jpg', alt: 'A residential tower above a tree-lined boulevard' }}
        />
      </HeroCover>
    </>
  )
}
