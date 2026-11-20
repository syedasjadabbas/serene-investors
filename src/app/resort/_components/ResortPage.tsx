'use client'

import { BedDouble, CalendarDays, Coins, Wrench, type LucideIcon } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCarousel, type FeatureSlide } from '@/global/components/page/FeatureCarousel'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { PillLink } from '@/global/components/ui/PillLink'
import { contact, nathiagali, ownerBenefits, projectById, whatsappWith } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { ResortGallery, type GalleryImage } from './ResortGallery'

// Dark product page (docs/INNER-PAGE-PATTERNS.md, pattern A) for Serene Heights Nathia Gali.
// Every fact comes from src/global/data/serene.ts.

const project = projectById('nathia-gali')!

const SEASONS = [nathiagali.seasons.winter, nathiagali.seasons.summer].map((season, index) => ({
  ...season,
  name: index === 0 ? 'Winter' : 'Summer',
}))

const AMENITY_SLIDES: FeatureSlide[] = nathiagali.amenityGroups.map((group) => ({
  title: group.name,
  image: { src: group.image, alt: `${group.name} at Serene Heights Nathia Gali` },
  body: (
    <ul className="flex flex-col gap-3">
      {group.items.map(([name, note]) => (
        <li key={name}>
          <span className="block font-semibold text-white">{name}</span>
          <span className="block text-sm">{note}</span>
        </li>
      ))}
    </ul>
  ),
}))

const GALLERY: GalleryImage[] = [
  ...nathiagali.gallery,
  ...nathiagali.resortImages.map((image) => ({ src: image.src, title: image.alt })),
]

const BENEFIT_ICONS: LucideIcon[] = [Wrench, BedDouble, Coins, CalendarDays]
const BENEFITS = ownerBenefits.map((benefit, index) => ({ ...benefit, icon: BENEFIT_ICONS[index] }))

export function ResortPage() {
  usePageMeta(
    'Serene Investors | Serene Heights Nathia Gali resort',
    "Serene Heights Nathia Gali: Pakistan's first winter resort at 7,906 ft, with 50+ amenities, two hours from Islamabad.",
  )

  return (
    <>
      <ProductHero
        tone="dark"
        image={{ src: project.image }}
        eyebrow={`${project.name} · ${project.status}`}
        title="Pakistan's first winter resort, at 7,906 ft."
        highlight="7,906 ft"
        body={project.summary}
        actions={[
          { label: 'Explore the resort', href: '#resort-amenities' },
          { label: 'Book a site visit', href: '/contact' },
        ]}
      />

      <HeroCover tone="dark">
        <PageSection tone="dark" label="Serene Heights Nathia Gali at a glance" pad="top">
          <StatCards items={nathiagali.figures} tone="dark" />
        </PageSection>

        {/* Seasons */}
        <PageSection tone="dark" labelledBy="resort-seasons">
          <SectionHeading
            id="resort-seasons"
            eyebrow="Open all year"
            title="Two seasons, one address."
            highlight="one address"
            body="Nathia Gali changes completely between winter and summer. Serene Heights is built for both."
            tone="dark"
          />
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {SEASONS.map((season) => (
              <li key={season.name} className="relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[30px] bg-sx-card sm:min-h-[560px]">
                <img
                  src={withBase(season.image)}
                  alt={`Serene Heights Nathia Gali in ${season.name.toLowerCase()}`}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-sx-ink/90 via-sx-ink/45 to-transparent" />
                <div className="flex flex-col items-start gap-3 p-6 sm:p-10">
                  <Eyebrow>
                    {season.name} · {season.months}
                  </Eyebrow>
                  <h3 className="font-heading text-3xl font-bold tracking-[-0.02em] sm:text-[2.2rem]">{season.title}</h3>
                  <p className="max-w-md text-base leading-relaxed text-white/75">{season.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </PageSection>

        {/* Amenities */}
        <section id="resort-amenities" aria-labelledby="resort-amenities-heading" className="scroll-mt-24 py-16 sm:py-24">
          <FeatureCarousel heading="50+ amenities, in five groups" headingId="resort-amenities-heading" slides={AMENITY_SLIDES} tone="dark" />
        </section>

        {/* Gallery */}
        <section aria-labelledby="resort-gallery" className="pb-16 sm:pb-24">
          <ResortGallery heading="Around the resort" headingId="resort-gallery" images={GALLERY} />
        </section>

        {/* Route */}
        <PageSection tone="dark" labelledBy="resort-route">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_1.4fr]">
            <div className="flex flex-col items-start gap-6 md:sticky md:top-28">
              <SectionHeading
                id="resort-route"
                eyebrow="Getting there"
                title="Two hours from Islamabad."
                highlight="Islamabad"
                body={contact.offices[0].address}
                tone="dark"
              />
              <a
                href={contact.nathiagaliMap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-sx-ink"
              >
                Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
            <ol className="flex flex-col gap-3">
              {nathiagali.route.map((stop, index) => (
                <li key={stop.place} className="flex items-center gap-4 rounded-[20px] bg-sx-card p-5 sm:gap-6 sm:p-6">
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sx-mint font-heading text-sm font-bold text-sx-ink"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-heading text-lg font-semibold sm:text-xl">{stop.place}</p>
                    <p className="text-sm text-white/65">{stop.time}</p>
                  </div>
                  <span className="shrink-0 font-heading text-lg font-semibold text-sx-mint sm:text-2xl">{stop.dist}</span>
                </li>
              ))}
            </ol>
          </div>
        </PageSection>

        {/* Floor plans */}
        <PageSection tone="dark" labelledBy="resort-plans">
          <SectionHeading
            id="resort-plans"
            eyebrow="Floor plans"
            title="Floor by floor."
            highlight="Floor"
            body="Select a plan to open it at full size."
            tone="dark"
          />
          <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {nathiagali.floorPlans.map((plan) => {
              const label = plan.note ? `${plan.title} · ${plan.note}` : plan.title
              return (
                <li key={plan.file}>
                  <a
                    href={withBase(plan.full)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col gap-3 rounded-[20px] bg-sx-card p-3 pb-4 text-white transition-colors hover:bg-sx-card-2"
                  >
                    <span className="block aspect-[4/3] overflow-hidden rounded-[14px] bg-white">
                      <img
                        src={withBase(plan.thumb)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </span>
                    <span className="px-2 text-sm font-semibold sm:text-base">
                      {label}
                      <span className="sr-only"> floor plan (opens full size in a new tab)</span>
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </PageSection>

        {/* Owner benefits */}
        <PageSection tone="dark" labelledBy="resort-owners">
          <SectionHeading
            id="resort-owners"
            eyebrow="For owners"
            title="Own a part of it, and stay in it."
            highlight="stay in it"
            body="Owners at Serene Heights Nathia Gali get more than a title: the hotel looks after the running costs and the stays."
            tone="dark"
            action={
              <PillLink href="/owner-benefits" variant="light">
                Owner benefits
              </PillLink>
            }
          />
          <FeatureCards items={BENEFITS} tone="dark" columns={4} className="mt-10" />
        </PageSection>

        <CtaBand
          title="Come and see Serene Heights Nathia Gali."
          highlight="Nathia Gali"
          body={`Book a site visit or ask about apartments and Smart Property Units. Call ${contact.uan} or message us on WhatsApp.`}
          actions={[
            { label: 'Book a site visit', href: '/contact' },
            { label: 'WhatsApp us', href: whatsappWith('I would like to visit Serene Heights Nathia Gali') },
          ]}
          image={{ src: nathiagali.seasons.winter.image, alt: 'Serene Heights Nathia Gali in the snow' }}
        />
      </HeroCover>
    </>
  )
}
