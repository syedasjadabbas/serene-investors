'use client'

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { StickySteps } from '@/global/components/page/StickySteps'
import { company, contact, lahore, ownerBenefits, smartUnit, tel, whatsappWith, type ProjectId } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { programmes, spuPlanRows, spuStats, spuSteps, statsCaption, type Programme } from '../_lib/programmes'
import { ProjectionTable } from './ProjectionTable'

const LINK = 'font-semibold text-sx-ink underline underline-offset-4 hover:text-sx-brand'

function Hero({ programme }: { programme: Programme }) {
  return (
    <ProductHero
      tone="tint"
      eyebrow={`${programme.project.name} · ${programme.project.status}`}
      title={programme.name}
      body={programme.summary}
      actions={[
        { label: 'Enquire on WhatsApp', href: whatsappWith(programme.enquiry) },
        { label: 'Get started', href: `/get-started?intent=project&id=${programme.id}` },
      ]}
      visual={
        <div className="overflow-hidden rounded-[28px] bg-white p-2.5 sm:p-3">
          <img
            src={withBase(programme.image.src)}
            alt={programme.image.alt}
            width={1600}
            height={900}
            loading="eager"
            fetchPriority="high"
            className="block aspect-[4/3] w-full rounded-[20px] bg-sx-sand object-cover sm:aspect-[16/8]"
          />
        </div>
      }
    />
  )
}

function Gallery({ id, images }: { id: string; images: { src: string; alt: string }[] }) {
  return (
    <PageSection labelledBy={`${id}-gallery-heading`} pad="bottom">
      <SectionHeading id={`${id}-gallery-heading`} eyebrow="Gallery" title="See the project." highlight="project" />
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {images.map((image) => (
          <li key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-sx-sand">
            <img src={withBase(image.src)} alt={image.alt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </li>
        ))}
      </ul>
    </PageSection>
  )
}

type ContactRow = { label: string; value: string; href?: string; icon: typeof Phone }

function ContactCard({ id, programme, rows }: { id: string; programme: Programme; rows: ContactRow[] }) {
  return (
    <PageSection labelledBy={`${id}-contact-heading`} pad="bottom">
      <div className="grid gap-4 rounded-[30px] bg-sx-forest p-6 text-white sm:p-10 md:grid-cols-[1fr_1.2fr] md:gap-10">
        <div className="flex min-w-0 flex-col gap-4">
          <Eyebrow>Talk to the team</Eyebrow>
          <h2 id={`${id}-contact-heading`} className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]">
            Enquire about {programme.name}.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-white/75">
            Ask about availability, the payment plan or a site visit. You can also{' '}
            <a href={whatsappWith(programme.enquiry)} className="font-semibold text-sx-mint underline underline-offset-4">
              message us on WhatsApp
            </a>{' '}
            with your question already written.
          </p>
        </div>
        <ul className="flex min-w-0 flex-col gap-2">
          {rows.map(({ label, value, href, icon: Icon }) => (
            <li key={label + value} className="flex items-start gap-4 rounded-[16px] bg-white px-5 py-4 text-sx-ink">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-sx-forest text-sx-mint">
                <Icon size={18} aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="text-sm text-sx-ink/65">{label}</span>
                {href ? (
                  <a href={href} className={`${LINK} [overflow-wrap:anywhere]`}>
                    {value}
                  </a>
                ) : (
                  <span className="font-semibold">{value}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  )
}

function NathiaGali({ programme }: { programme: Programme }) {
  const office = contact.offices[0]
  return (
    <>
      <Hero programme={programme} />
      <HeroCover>
        <PageSection label={`${programme.name} at a glance`} pad="top">
          <StatCards items={spuStats} caption={statsCaption} />
        </PageSection>

        <PageSection labelledBy="ng-about-heading">
          <div className="grid gap-4 md:grid-cols-2">
            <article aria-labelledby="ng-about-heading" className="flex flex-col gap-4 rounded-[30px] bg-white p-6 sm:p-10">
              <Eyebrow tone="sand">About the unit</Eyebrow>
              <h2 id="ng-about-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.2rem]">
                Co-own a hotel apartment in the pines.
              </h2>
              <p className="text-base leading-relaxed text-sx-ink/65">{smartUnit.what}</p>
              <p className="text-base leading-relaxed text-sx-ink/65">{programme.project.summary}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Project facts">
                {programme.project.facts.map((fact) => (
                  <li key={fact} className="rounded-full bg-sx-paper px-3 py-1.5 text-sm font-semibold">
                    {fact}
                  </li>
                ))}
              </ul>
            </article>

            <article aria-labelledby="ng-plan-heading" className="flex flex-col gap-6 rounded-[30px] bg-white p-6 sm:p-10">
              <Eyebrow tone="sand">Payment plan</Eyebrow>
              <h2 id="ng-plan-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.2rem]">
                30% down, the rest monthly.
              </h2>
              <dl className="flex flex-col gap-2">
                {spuPlanRows.map((row) => (
                  <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-[16px] bg-sx-paper px-5 py-4">
                    <dt className="text-sm text-sx-ink/65">{row.label}</dt>
                    <dd className="text-right font-semibold tabular-nums text-sx-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm leading-relaxed text-sx-ink/65">Plan as published by Serene Heights for Serene Heights Nathia Gali.</p>
            </article>
          </div>
        </PageSection>

        <PageSection labelledBy="ng-steps-heading" pad="bottom">
          <SectionHeading id="ng-steps-heading" eyebrow="How it works" title="From booking form to ownership." highlight="ownership" />
          <div className="mt-6">
            <StickySteps steps={spuSteps} />
          </div>
        </PageSection>

        <PageSection labelledBy="ng-benefits-heading" pad="bottom">
          <SectionHeading
            id="ng-benefits-heading"
            eyebrow="Owner benefits"
            title="What owners get."
            highlight="owners"
            body={company.management}
          />
          <FeatureCards items={ownerBenefits} columns={4} className="mt-10 sm:mt-12" />
        </PageSection>

        <ProjectionTable id="ng-projection" />

        <Gallery
          id="ng"
          images={programme.project.gallery.map((src, index) => ({ src, alt: `Serene Heights Nathia Gali, view ${index + 1} of ${programme.project.gallery.length}` }))}
        />

        <ContactCard
          id="ng"
          programme={programme}
          rows={[
            { label: 'UAN', value: contact.uan, href: contact.uanHref, icon: Phone },
            { label: 'WhatsApp', value: contact.whatsapp, href: whatsappWith(programme.enquiry), icon: MessageCircle },
            { label: 'Email', value: contact.emails.nathiagali, href: `mailto:${contact.emails.nathiagali}`, icon: Mail },
            { label: office.name, value: office.address, icon: MapPin },
          ]}
        />

        <CtaBand
          tone="brand"
          title="Work out your plan."
          highlight="your plan"
          body="Try the numbers in the calculator, or send the team a message."
          actions={[
            { label: 'Open the calculator', href: '/calculator' },
            { label: 'Contact the team', href: '/contact' },
          ]}
        />
      </HeroCover>
    </>
  )
}

const LAHORE_STATS = [
  { value: '21', label: 'Storeys on Gulberg Main Boulevard' },
  { value: '7', label: 'Office floors' },
  { value: '5', label: 'Above-ground parking floors' },
  { value: '2 years', label: 'Delivery timeline' },
]

function Lahore({ programme }: { programme: Programme }) {
  const office = contact.offices[1]
  return (
    <>
      <Hero programme={programme} />
      <HeroCover>
        <PageSection label={`${programme.project.name} at a glance`} pad="top">
          <StatCards items={LAHORE_STATS} caption={`${programme.project.name} · ${programme.project.since}`} />
        </PageSection>

        <PageSection labelledBy="lhr-about-heading">
          <div className="grid gap-4 md:grid-cols-2">
            <article aria-labelledby="lhr-about-heading" className="flex flex-col gap-4 rounded-[30px] bg-white p-6 sm:p-10">
              <Eyebrow tone="sand">The tower</Eyebrow>
              <h2 id="lhr-about-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.2rem]">
                Part-own a prime commercial asset.
              </h2>
              <p className="text-base leading-relaxed text-sx-ink/65">{lahore.tagline}</p>
              <p className="text-base leading-relaxed text-sx-ink/65">{lahore.configuration}</p>
              <p className="text-base leading-relaxed text-sx-ink/65">{lahore.location}</p>
              <img
                src={withBase(lahore.ldaBadge)}
                alt="LDA approved"
                width={160}
                height={160}
                loading="lazy"
                className="mt-auto h-16 w-auto self-start"
              />
            </article>
            <div className="relative min-h-[320px] overflow-hidden rounded-[30px] bg-sx-sand">
              <img
                src={withBase('/images/serene/lahore/aerial.jpg')}
                alt="Aerial view of Serene Heights Lahore on Gulberg Main Boulevard"
                width={1400}
                height={1050}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </PageSection>

        <PageSection labelledBy="lhr-reasons-heading" pad="bottom">
          <SectionHeading
            id="lhr-reasons-heading"
            eyebrow="Why Lahore"
            title="Why invest in Serene Heights Lahore."
            highlight="Serene Heights Lahore"
          />
          <FeatureCards items={lahore.reasons} className="mt-10 sm:mt-12" />
        </PageSection>

        <PageSection labelledBy="lhr-floors-heading" pad="bottom">
          <SectionHeading id="lhr-floors-heading" eyebrow="Inside the tower" title="One building, four uses." highlight="four uses" />
          <ul className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2">
            {lahore.floors.map((floor) => (
              <li key={floor.id} className="flex flex-col gap-4 rounded-[20px] bg-white p-2.5 sm:p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-sx-sand">
                  <img
                    src={withBase(floor.image)}
                    alt={`${floor.title} at Serene Heights Lahore`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 px-3 pb-3 sm:px-4 sm:pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-ink/60">{floor.tag}</p>
                  <h3 className="font-heading text-2xl font-bold tracking-[-0.02em]">{floor.title}</h3>
                  <p className="text-base leading-relaxed text-sx-ink/65">{floor.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </PageSection>

        <ContactCard
          id="lhr"
          programme={programme}
          rows={[
            ...contact.lahorePhones.flatMap((group) =>
              group.numbers.map((n) => ({ label: group.label, value: n, href: tel(n), icon: Phone })),
            ),
            { label: 'Email', value: contact.emails.lahore, href: `mailto:${contact.emails.lahore}`, icon: Mail },
            { label: office.name, value: office.address, icon: MapPin },
          ]}
        />

        <CtaBand
          tone="brand"
          title="Ask about Lahore smart property."
          highlight="Lahore smart property"
          body="Smart property in Serene Heights Lahore starts from PKR 2 million. Talk to the Lahore team about the current plans."
          actions={[
            { label: 'Contact the team', href: '/contact' },
            { label: 'All smart property', href: '/smart-property' },
          ]}
        />
      </HeroCover>
    </>
  )
}

export function ProgrammeDetailPage({ id }: { id: ProjectId }) {
  const programme = programmes[id]
  usePageMeta(`Serene Investors | ${programme.name}`, programme.summary)
  return id === 'lahore' ? <Lahore programme={programme} /> : <NathiaGali programme={programme} />
}
