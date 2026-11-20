'use client'

import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion } from '@/global/components/page/FaqAccordion'
import { FeatureCarousel } from '@/global/components/page/FeatureCarousel'
import { Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { StickySteps } from '@/global/components/page/StickySteps'
import { company, smartUnit } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { programmeList, spuFaq, spuStats, spuSteps, spuWhySlides, statsCaption } from '../_lib/programmes'
import { ProgrammeCard } from './ProgrammeCard'
import { ProjectionTable } from './ProjectionTable'
import { SpuHeroVisual } from './SpuHeroVisual'

// Product page (tint), Pattern A in docs/INNER-PAGE-PATTERNS.md: pinned hero → SPU figures → what it is →
// five steps → the two programmes → why → projection → calculator/contact band → FAQ.

export function SmartPropertyPage() {
  usePageMeta(
    'Serene Investors | Smart Property',
    'Smart Property Units of 50 sq ft at Serene Heights Nathia Gali, and smart property from PKR 2 million at Serene Heights Lahore.',
  )

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow="Smart Property"
        title="Own part of Serene Heights from PKR 2 million."
        highlight="from PKR 2 million"
        body="Co-own premium Serene Heights property without buying all of it: standard 50 sq ft units in Nathia Gali, and smart property from PKR 2 million in Lahore."
        actions={[
          { label: 'See the programmes', href: '#programmes' },
          { label: 'Try the calculator', href: '/calculator' },
        ]}
        visual={<SpuHeroVisual />}
      />

      <HeroCover>
        <PageSection label="The Smart Property Unit at a glance" pad="top">
          <StatCards items={spuStats} caption={statsCaption} />
        </PageSection>

        <PageSection labelledBy="spu-what-heading">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="flex flex-col gap-5 rounded-[30px] bg-white p-6 sm:p-10">
              <Eyebrow tone="sand">What it is</Eyebrow>
              <h2 id="spu-what-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]">
                A share of a managed hotel, not just a building.
              </h2>
              <p className="text-base leading-relaxed text-sx-ink/65 sm:text-lg">{smartUnit.what}</p>
              <p className="text-base leading-relaxed text-sx-ink/65">{company.management}</p>
            </article>
            <div className="relative min-h-[300px] overflow-hidden rounded-[30px] bg-sx-sand">
              <img
                src={withBase('/images/serene/nathiagali/terraces.webp')}
                alt="Apartment balconies on the Serene Heights Nathia Gali tower"
                width={1400}
                height={1050}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </PageSection>

        <PageSection labelledBy="spu-steps-heading" pad="bottom">
          <SectionHeading id="spu-steps-heading" eyebrow="How it works" title="Five steps to your unit." highlight="your unit" />
          <div className="mt-6">
            <StickySteps steps={spuSteps} />
          </div>
        </PageSection>

        <PageSection id="programmes" labelledBy="programmes-heading" className="scroll-mt-20" pad="bottom">
          <SectionHeading
            id="programmes-heading"
            eyebrow="The programmes"
            title="Nathia Gali or Lahore."
            highlight="Lahore"
            body="Smart property is offered in both Serene Heights projects: the resort in the Galiyat and the tower on Gulberg Main Boulevard."
          />
          <ul className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
            {programmeList.map((programme) => (
              <li key={programme.id}>
                <ProgrammeCard programme={programme} />
              </li>
            ))}
          </ul>
        </PageSection>

        <section aria-labelledby="spu-why-heading" className="pb-16 sm:pb-24">
          <FeatureCarousel heading="Why a Smart Property Unit" headingId="spu-why-heading" slides={spuWhySlides} />
        </section>

        <ProjectionTable />

        <CtaBand
          tone="brand"
          title="Work out your plan."
          highlight="your plan"
          body="Try the numbers in the calculator, or talk to the Serene Heights team about booking a unit."
          actions={[
            { label: 'Open the calculator', href: '/calculator' },
            { label: 'Contact the team', href: '/contact' },
          ]}
        />

        <PageSection labelledBy="spu-faq-heading">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
            <SectionHeading
              id="spu-faq-heading"
              title="Smart Property FAQs"
              highlight="FAQs"
              body="What people ask before they book a unit."
              className="md:sticky md:top-28"
            />
            <FaqAccordion items={spuFaq} />
          </div>
        </PageSection>
      </HeroCover>
    </>
  )
}
