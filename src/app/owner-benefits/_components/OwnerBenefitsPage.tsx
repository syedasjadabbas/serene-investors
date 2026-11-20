'use client'

import { BedDouble } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FaqAccordion, type FaqItem } from '@/global/components/page/FaqAccordion'
import { FeatureCarousel, type FeatureSlide } from '@/global/components/page/FeatureCarousel'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { VideoExplainer } from '@/global/components/page/VideoExplainer'
import { company, lahore, nathiagali, ownerBenefits, smartUnit } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'

// Product page, tint tone (docs/INNER-PAGE-PATTERNS.md, pattern A): hero → figures → the four
// benefits → how profit share works → the resort → band → FAQ. Facts come from serene.ts only.

const benefit = (title: string) => ownerBenefits.find((b) => b.title === title)!
const freeNights = benefit('28 free nights a year')
const profitShare = benefit('Quarterly profit share')
const zeroFees = benefit('Zero maintenance fees')
const extendedStay = benefit('Extended-stay discount')
const transparent = company.philosophy.find((p) => p.title === 'Transparent ownership')!
const inHouse = lahore.reasons.find((r) => r.title === 'Professional in-house management')!

const img = (alt: string) => nathiagali.resortImages.find((i) => i.alt === alt)!

const STATS = [
  { value: '28', label: 'Free nights a year for Nathia Gali owners' },
  { value: '4×', label: 'Profit share a year, paid quarterly' },
  { value: 'PKR 0', label: 'Maintenance fees' },
]

const SLIDES: FeatureSlide[] = [
  { title: freeNights.title, body: freeNights.body, image: img('Tower in the snow at night') },
  { title: profitShare.title, body: profitShare.body, image: img('Sky lounge') },
  { title: zeroFees.title, body: `${zeroFees.body} ${transparent.body}`, image: img('Pool under the glass roof') },
  { title: extendedStay.title, body: extendedStay.body, image: img('Rooftop restaurant') },
]

const PROFIT_ROWS = [
  { title: 'You own units', body: smartUnit.what },
  { title: 'One hotel, one operator', body: company.management },
  { title: 'Revenue shared each quarter', body: profitShare.body },
  { title: 'Nothing more to pay', body: transparent.body },
]

const FAQS: FaqItem[] = [
  { q: 'Who gets 28 free nights?', a: freeNights.body },
  { q: 'How does the quarterly profit share work?', a: `${profitShare.body} ${company.management}` },
  { q: 'Are there maintenance fees?', a: `No. ${zeroFees.body} ${transparent.body}` },
  {
    q: 'What is the extended-stay discount?',
    a: `${extendedStay.body} Ask the Serene Heights team for the current terms.`,
  },
  {
    q: 'Do these benefits apply in Lahore?',
    a: `The 28 free nights and the quarterly profit share are for Nathia Gali owners. In Serene Heights Lahore: ${inHouse.body}`,
  },
  { q: 'Are returns guaranteed?', a: `No. ${smartUnit.projectionNote}` },
]

/** Resort photo card that rises from the bottom of the hero, with the free-nights card on it. */
function HeroVisual() {
  const hero = img('Aerial view of the rooftop pool')
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white p-2.5 sm:p-3">
      <div className="relative overflow-hidden rounded-[20px] bg-sx-sand">
        <img
          src={withBase(hero.src)}
          alt={hero.alt}
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-[16px] bg-white p-3 text-left text-sx-ink sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[340px]">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-[12px] bg-sx-forest text-sx-mint">
            <BedDouble size={22} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="font-heading text-base font-bold">{freeNights.title}</p>
            <p className="text-xs leading-relaxed text-sx-ink/65">{freeNights.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function OwnerBenefitsPage() {
  usePageMeta(
    'Serene Investors | Owner benefits',
    'Owner benefits at Serene Heights Nathia Gali: 28 free nights a year, quarterly profit share, zero maintenance fees and an extended-stay discount.',
  )

  return (
    <>
      <ProductHero
        tone="tint"
        eyebrow="Owner benefits"
        title="Own it, stay in it, share in it."
        highlight="share in it"
        body="Serene Heights Nathia Gali owners stay free for 28 nights a year, pay no maintenance fees, and Smart Property owners share in hotel revenue every quarter."
        actions={[
          { label: 'See the benefits', href: '#owner-benefits' },
          { label: 'Smart Property', href: '/smart-property' },
        ]}
        visual={<HeroVisual />}
      />

      <HeroCover>
        <PageSection label="Owner benefits at a glance" pad="top">
          <StatCards items={STATS} caption="Owner benefits as published by Serene Heights for Serene Heights Nathia Gali." />
        </PageSection>

        <section id="owner-benefits" aria-labelledby="owner-benefits-heading" className="scroll-mt-20 py-16 sm:py-24">
          <FeatureCarousel heading="Four benefits of ownership" headingId="owner-benefits-heading" slides={SLIDES} />
        </section>

        <section aria-labelledby="profit-share-heading" className="px-4 pb-16 sm:px-8 sm:pb-24">
          <VideoExplainer
            heading="How profit share works"
            headingId="profit-share-heading"
            rows={PROFIT_ROWS}
            poster={img('Rooftop restaurant')}
          />
        </section>

        <PageSection labelledBy="resort-heading" pad="bottom">
          <SectionHeading
            id="resort-heading"
            eyebrow="The resort"
            title="Where your free nights are spent."
            highlight="free nights"
            body={company.intro}
          />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
            {nathiagali.resortImages.slice(0, 9).map((image) => (
              <li key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-sx-sand">
                <img src={withBase(image.src)} alt={image.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
              </li>
            ))}
          </ul>
        </PageSection>

        <CtaBand
          tone="brand"
          title="Become a Serene Heights owner."
          highlight="owner"
          body="Start with a Smart Property Unit in Nathia Gali, or talk to the team about a hotel apartment."
          actions={[
            { label: 'Nathia Gali Smart Property', href: '/smart-property/nathia-gali' },
            { label: 'Contact the team', href: '/contact' },
          ]}
        />

        <PageSection labelledBy="owner-faq-heading">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
            <SectionHeading
              id="owner-faq-heading"
              title="Owner FAQs"
              highlight="FAQs"
              body="What owners ask about stays, fees and profit share."
              className="md:sticky md:top-28"
            />
            <FaqAccordion items={FAQS} />
          </div>
        </PageSection>
      </HeroCover>
    </>
  )
}
