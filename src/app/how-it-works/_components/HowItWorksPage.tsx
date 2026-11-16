'use client'

import { Banknote, KeyRound, Search } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StickySteps } from '@/global/components/page/StickySteps'
import { VideoExplainer } from '@/global/components/page/VideoExplainer'
import { howItWorksIntro, howPageCta, howPageSummary } from '@/global/data/how-it-works'
import { storyAssets } from '@/global/data/story-assets'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { earnRows, howSteps } from '../_lib/how-page'
import { HowFaq } from './HowFaq'
import { HowHeroVisual } from './HowHeroVisual'

// Product page (tint), Pattern A in docs/INNER-PAGE-PATTERNS.md, built around the pinned steps:
// hero → steps → how you earn → the short version → FAQ → closing band.

const SUMMARY_ICONS = [Search, KeyRound, Banknote]

export function HowItWorksPage() {
  usePageMeta(
    'Serene Investors | How it works',
    `${howItWorksIntro.body} All steps are part of a fictional demonstration.`,
  )

  const summary = howPageSummary.map((item, index) => ({ title: item.title, body: item.body, icon: SUMMARY_ICONS[index] }))

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow={howItWorksIntro.eyebrow}
        title={howItWorksIntro.heading}
        highlight="four steps"
        body={howItWorksIntro.body}
        actions={[
          { label: 'See the steps', href: '#how-steps' },
          { label: 'Get started', href: '/get-started' },
        ]}
        visual={<HowHeroVisual />}
      />

      <HeroCover>
        <PageSection id="how-steps" labelledBy="how-steps-heading" className="scroll-mt-20" pad="top">
          <SectionHeading
            id="how-steps-heading"
            eyebrow="The journey"
            title="From choosing to receiving."
            highlight="receiving"
            body="The same four steps apply to a single property or a fund. Every figure along the way is a sample."
          />
          <div className="mt-6">
            <StickySteps steps={howSteps} />
          </div>
        </PageSection>

        <section aria-labelledby="how-earn-heading" className="px-4 py-16 sm:px-8 sm:py-24">
          <VideoExplainer
            heading="How you earn"
            headingId="how-earn-heading"
            rows={earnRows}
            video="/videos/hero.mp4"
            poster={{ src: '/videos/hero-poster.jpg', alt: 'A stone apartment building with arched windows among snow-dusted pine trees' }}
          />
        </section>

        <PageSection labelledBy="how-summary-heading" pad="bottom">
          <SectionHeading
            id="how-summary-heading"
            eyebrow="In short"
            title="The short version."
            highlight="short version"
            body="Three things to remember about owning a share of a building."
          />
          <FeatureCards items={summary} className="mt-10 sm:mt-12" />
        </PageSection>

        <HowFaq />

        <CtaBand
          title={howPageCta.heading}
          highlight="collection"
          body={howPageCta.body}
          actions={[
            { label: 'Explore properties', href: '/properties' },
            { label: 'Explore funds', href: '/funds' },
          ]}
          image={storyAssets.valueWalk}
        />
      </HeroCover>
    </>
  )
}
