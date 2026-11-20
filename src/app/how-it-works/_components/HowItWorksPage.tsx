'use client'

import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StickySteps } from '@/global/components/page/StickySteps'
import { VideoExplainer } from '@/global/components/page/VideoExplainer'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { earnRows, howSteps, reasons } from '../_lib/how-page'
import { HowFaq } from './HowFaq'
import { HowHeroVisual } from './HowHeroVisual'

// Product page (tint), Pattern A in docs/INNER-PAGE-PATTERNS.md, built around the pinned steps:
// hero → five steps → how you earn → why invest → FAQ → closing band.

export function HowItWorksPage() {
  usePageMeta(
    'Serene Investors | How it works',
    'How a Serene Heights Smart Property Unit works: fill the booking form, choose a payment plan, confirm ownership, and let DM Consortium manage the rest.',
  )

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow="How it works"
        title="Own a Smart Property Unit in five steps."
        highlight="five steps"
        body="Book, pay in instalments, and own your units. DM Consortium takes care of rentals, maintenance and returns."
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
            title="From booking form to ownership."
            highlight="ownership"
            body="The same five steps Serene Heights publishes for its Smart Property Units."
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
            poster={{ src: '/videos/hero-poster.jpg', alt: 'A stone apartment building among snow-dusted pine trees' }}
          />
        </section>

        <PageSection labelledBy="how-reasons-heading" pad="bottom">
          <SectionHeading
            id="how-reasons-heading"
            eyebrow="Why Serene Heights"
            title="Why investors choose Serene Heights."
            highlight="Serene Heights"
          />
          <FeatureCards items={reasons} className="mt-10 sm:mt-12" />
        </PageSection>

        <HowFaq />

        <CtaBand
          title="Ready to own your first unit?"
          highlight="first unit"
          body="Explore the Smart Property programmes in Nathia Gali and Lahore, or start an enquiry now."
          actions={[
            { label: 'Smart Property', href: '/smart-property' },
            { label: 'Get started', href: '/get-started' },
          ]}
          image={{ src: '/images/serene/nathiagali/snow-tower-dusk.webp', alt: 'First snow on the Serene Heights tower at dusk' }}
        />
      </HeroCover>
    </>
  )
}
