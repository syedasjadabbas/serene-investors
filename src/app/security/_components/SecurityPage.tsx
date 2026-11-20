'use client'

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCarousel, type FeatureSlide } from '@/global/components/page/FeatureCarousel'
import { Eyebrow, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { PillLink } from '@/global/components/ui/PillLink'
import { company, contact, lahore, progressUpdates, projectById, smartUnit, tel, whatsappWith } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'

// Dark product page (docs/INNER-PAGE-PATTERNS.md, pattern A). Only protections that Serene Heights
// itself publishes (src/global/data/serene.ts); no other regulator or licence is claimed.

const lahoreProject = projectById('lahore')!
const nathiagaliProject = projectById('nathia-gali')!
const transparent = company.philosophy.find((p) => p.title === 'Transparent ownership')!
const why = (title: string) => smartUnit.why.find((w) => w.title === title)!.body
const transferable = smartUnit.steps.find((s) => s.title === 'Transferable units')!.body
const latestUpdate = progressUpdates[0]

const STATS = [
  { value: '0', label: 'maintenance charges or hidden costs' },
  { value: '2 years', label: 'delivery commitment for Serene Heights Lahore' },
  { value: '50 sq ft', label: 'standard Smart Property Unit' },
  { value: '2017', label: `${company.name} founded` },
]

const PROTECTIONS: FeatureSlide[] = [
  {
    title: 'Shariah-compliant transactions',
    body: why('Legal compliance'),
    image: { src: nathiagaliProject.gallery[0], alt: 'Serene Heights Nathia Gali tower in the snow' },
  },
  {
    title: 'Every unit under a legal agreement',
    body: why('Secure contracts'),
    image: { src: lahoreProject.gallery[2], alt: 'The facade of the Serene Heights Lahore tower' },
  },
  {
    title: 'In-house management',
    body: company.management,
    image: { src: nathiagaliProject.gallery[1], alt: 'Aerial view of the Serene Heights Nathia Gali pool' },
  },
  {
    title: 'Transferable units',
    body: `${transferable} Units are standardised at ${smartUnit.sqft} sq ft, so what you own is clear and fair.`,
    image: { src: nathiagaliProject.gallery[3], alt: 'Balconies on the Serene Heights Nathia Gali tower' },
  },
]

/** /security (also served at /regulation and /safety). */
export function SecurityPage() {
  usePageMeta(
    'Serene Investors | Trust & compliance',
    'Shariah-compliant transactions, legal agreements for every unit, LDA approval for Serene Heights Lahore and in-house management by DM Consortium.',
  )

  return (
    <>
      <ProductHero
        tone="dark"
        image={{ src: lahoreProject.image }}
        eyebrow="Trust & compliance"
        title="What you own is what you own."
        highlight="what you own"
        body="Shariah-compliant transactions, a legal agreement behind every unit, and one in-house team running the property, with zero hidden costs."
        actions={[
          { label: 'How you are protected', href: '#trust-protections' },
          { label: 'See construction progress', href: '/progress' },
        ]}
      />

      <HeroCover tone="dark">
        <PageSection tone="dark" label="Trust at a glance" pad="top">
          <StatCards items={STATS} tone="dark" />
        </PageSection>

        <section id="trust-protections" aria-labelledby="trust-protections-heading" className="scroll-mt-24 py-16 sm:py-24">
          <FeatureCarousel heading="How your ownership is protected" headingId="trust-protections-heading" slides={PROTECTIONS} tone="dark" />
        </section>

        {/* LDA approval */}
        <PageSection tone="dark" labelledBy="trust-lda">
          <div className="grid items-center gap-8 rounded-[30px] bg-sx-card p-6 sm:p-10 md:grid-cols-[auto_1fr] md:gap-12">
            <div className="flex justify-center rounded-[20px] bg-white p-6">
              <img
                src={withBase(lahore.ldaBadge)}
                alt="LDA approved badge for Serene Heights Lahore"
                width={200}
                height={200}
                loading="lazy"
                className="h-32 w-auto object-contain sm:h-44"
              />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Eyebrow>{lahoreProject.since}</Eyebrow>
              <h2 id="trust-lda" className="font-heading text-3xl font-bold tracking-[-0.025em] sm:text-[2.75rem]">
                {lahoreProject.name} is LDA approved.
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{lahore.tagline}</p>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
                It carries a 2-year delivery commitment. Current status: <strong className="font-semibold text-white">{lahoreProject.status}</strong>.
              </p>
            </div>
          </div>
        </PageSection>

        {/* Transparent ownership + progress */}
        <PageSection tone="dark" labelledBy="trust-transparency">
          <SectionHeading
            id="trust-transparency"
            eyebrow="Transparency"
            title="Nothing more to pay later."
            highlight="Nothing more"
            tone="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="flex flex-col gap-4 rounded-[20px] bg-sx-card p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold tracking-[-0.02em]">{transparent.title}</h3>
              <p className="text-base leading-relaxed text-white/70">{transparent.body}</p>
            </article>
            <article className="flex flex-col items-start gap-4 rounded-[20px] bg-sx-card p-6 sm:p-8">
              <h3 className="font-heading text-2xl font-bold tracking-[-0.02em]">Progress you can watch</h3>
              <p className="text-base leading-relaxed text-white/70">
                Dated site-visit videos are published on the Serene Heights YouTube channel and collected here, newest first. The latest
                update is from {latestUpdate.date}.
              </p>
              <PillLink href="/progress" variant="light" className="mt-auto">
                Construction progress
              </PillLink>
            </article>
          </div>
        </PageSection>

        {/* Contacts */}
        <PageSection tone="dark" labelledBy="trust-contacts">
          <SectionHeading
            id="trust-contacts"
            eyebrow="Talk to us"
            title="Real offices, real people."
            highlight="real people"
            body={`${company.name} is developed by ${company.developer}. Reach the team directly.`}
            tone="dark"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1.3fr]">
            <ul className="flex flex-col gap-3 rounded-[20px] bg-sx-card p-6 sm:p-8">
              <ContactRow icon={Phone} label="UAN" value={contact.uan} href={contact.uanHref} />
              <ContactRow icon={MessageCircle} label="WhatsApp" value={contact.whatsapp} href={contact.whatsappHref} external />
              <ContactRow icon={Mail} label="Nathia Gali" value={contact.emails.nathiagali} href={`mailto:${contact.emails.nathiagali}`} />
              <ContactRow icon={Mail} label="Lahore" value={contact.emails.lahore} href={`mailto:${contact.emails.lahore}`} />
              {contact.lahorePhones.map((group) =>
                group.numbers.map((n) => <ContactRow key={n} icon={Phone} label={`Lahore · ${group.label}`} value={n} href={tel(n)} />),
              )}
            </ul>
            <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contact.offices.map((office) => (
                <li key={office.name} className="flex gap-4 rounded-[20px] bg-sx-card p-6">
                  <MapPin size={20} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-mint" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white/60">{office.label}</p>
                    <p className="font-heading text-lg font-semibold">{office.name}</p>
                    <p className="text-sm text-white/70">{office.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </PageSection>

        <CtaBand
          title="Ask us anything before you invest."
          highlight="anything"
          body="Our team will walk you through the agreements, the payment plan and the site."
          actions={[
            { label: 'Contact us', href: '/contact' },
            { label: 'WhatsApp us', href: whatsappWith('I have a question about investing in Serene Heights') },
          ]}
          image={{ src: lahoreProject.gallery[1], alt: 'Serene Heights Lahore at dusk' }}
        />
      </HeroCover>
    </>
  )
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Phone
  label: string
  value: string
  href: string
  external?: boolean
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sx-mint">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-white/60">{label}</p>
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="break-all font-semibold text-white underline-offset-4 hover:text-sx-mint hover:underline"
        >
          {value}
          {external && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      </div>
    </li>
  )
}
