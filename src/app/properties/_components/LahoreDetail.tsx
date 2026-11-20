import { BadgeCheck, Building2, CalendarClock, Car, Coins, TrendingUp, Wallet } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { Card, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { PillLink } from '@/global/components/ui/PillLink'
import { contact, lahore, tel } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'
import { lahoreProject as project } from '../_lib/projects'
import { LahoreFloors } from './LahoreFloors'
import { ProjectHeader } from './ProjectHeader'

// Every number here is in the published configuration (lahore.configuration).
const STATS = [
  { value: '21', label: 'storeys' },
  { value: '7', label: 'office floors' },
  { value: '5', label: 'parking floors' },
  { value: '2', label: 'hotel apartment floors' },
]

const REASON_ICONS = [TrendingUp, Coins, Building2, CalendarClock, Car, Wallet, BadgeCheck]

const GALLERY_ALTS = [
  'Aerial view of Serene Heights Lahore on Gulberg Main Boulevard',
  'The Serene Heights Lahore tower at dusk',
  'The Serene Heights Lahore facade',
  'Serene Heights Lahore seen from the street',
  'A render of the Serene Heights Lahore building',
]

const LINK =
  'font-semibold text-sx-brand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand'

/** /properties/lahore: the 21-storey mixed-use tower on Gulberg Main Boulevard. */
export function LahoreDetail() {
  const frames = [project.image, ...project.gallery].map((src, index) => ({
    src,
    alt: index === 0 ? 'The Serene Heights Lahore tower' : (GALLERY_ALTS[index - 1] ?? 'Serene Heights Lahore'),
  }))

  return (
    <>
      <ProjectHeader
        eyebrow={`${project.status} · ${project.kind}`}
        title={project.name}
        place={project.place}
        body={lahore.tagline}
        aside={
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <img src={withBase(lahore.ldaBadge)} alt="LDA approved" width={96} height={96} className="h-20 w-auto" />
            <PillLink href={`/get-started?intent=project&id=${project.id}`} variant="dark">
              Start with Lahore
            </PillLink>
          </div>
        }
        frames={frames}
        badge={{ top: project.since, bottom: project.status }}
      />

      <PageSection label="Serene Heights Lahore in numbers" pad="top">
        <StatCards items={STATS} />
      </PageSection>

      <PageSection labelledBy="lhr-overview">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="flex flex-col gap-5">
            <SectionHeading id="lhr-overview" eyebrow="Overview" title="A mixed-use address beside the CBD." highlight="beside the CBD" />
            <p className="text-base leading-relaxed text-sx-ink/70 sm:text-lg">{lahore.configuration}</p>
            <p className="text-base leading-relaxed text-sx-ink/70 sm:text-lg">{lahore.location}</p>
          </Card>
          <Card tone="forest" className="flex flex-col gap-5">
            <span className="flex size-11 items-center justify-center rounded-[12px] bg-sx-mint text-sx-ink">
              <Car size={22} aria-hidden="true" />
            </span>
            <h3 className="font-heading text-2xl font-bold tracking-[-0.02em]">Parking on five floors</h3>
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">{lahore.parking}</p>
            <div className="mt-auto flex items-center gap-4 rounded-[16px] bg-white p-3 text-sx-ink">
              <img src={withBase(lahore.ldaBadge)} alt="" className="h-14 w-auto" />
              <p className="text-sm font-semibold">Approved by the Lahore Development Authority, with a 2-year delivery timeline.</p>
            </div>
          </Card>
        </div>
      </PageSection>

      <PageSection labelledBy="lhr-floors">
        <SectionHeading id="lhr-floors" eyebrow="The floors" title="Commercial, offices, co-working and hotel apartments." highlight="hotel apartments" />
        <div className="mt-10">
          <LahoreFloors />
        </div>
      </PageSection>

      <PageSection labelledBy="lhr-reasons" tone="white">
        <SectionHeading
          id="lhr-reasons"
          eyebrow="Why invest"
          title="Why Serene Heights Lahore."
          highlight="Serene Heights Lahore"
          action={
            <PillLink href="/smart-property" variant="dark">
              Smart property from PKR 2 million
            </PillLink>
          }
        />
        <FeatureCards
          className="mt-10 [&>li]:bg-sx-paper"
          items={lahore.reasons.map((item, index) => ({ ...item, icon: REASON_ICONS[index] }))}
        />
      </PageSection>

      <PageSection labelledBy="lhr-amenities">
        <SectionHeading id="lhr-amenities" eyebrow="Amenities" title="Built for the people who work and stay here." highlight="work and stay here" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {lahore.amenities.map((group) => (
            <li key={group.name} className="rounded-[20px] bg-white p-6 sm:p-7">
              <h3 className="font-heading text-xl font-bold tracking-[-0.015em]">{group.name}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug text-sx-ink/75">
                    <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sx-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection labelledBy="lhr-contact">
        <SectionHeading id="lhr-contact" eyebrow="Contact" title="Talk to the Lahore team." highlight="Lahore team" />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {contact.lahorePhones.map((group) => (
            <li key={group.label} className="rounded-[20px] bg-white p-6">
              <p className="text-sm text-sx-ink/65">{group.label}</p>
              <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {group.numbers.map((number) => (
                  <a key={number} href={tel(number)} className={LINK}>
                    {number}
                  </a>
                ))}
              </p>
            </li>
          ))}
          <li className="rounded-[20px] bg-white p-6">
            <p className="text-sm text-sx-ink/65">Email</p>
            <p className="mt-2">
              <a href={`mailto:${project.email}`} className={`${LINK} break-all`}>
                {project.email}
              </a>
            </p>
          </li>
          <li className="rounded-[20px] bg-white p-6 sm:col-span-2 lg:col-span-3">
            <p className="text-sm text-sx-ink/65">Project address</p>
            <p className="mt-2 font-semibold">{contact.offices[1].address}</p>
          </li>
        </ul>
      </PageSection>

      <CtaBand
        tone="white"
        title="See more on the Serene Heights Lahore site."
        highlight="Serene Heights Lahore"
        body="The project's own site has the full floor details and enquiry forms."
        actions={[
          { label: 'Visit the project site', href: project.site },
          { label: 'Contact us', href: '/contact' },
        ]}
        image={{ src: lahore.floors[3].image, alt: 'A hotel apartment at Serene Heights Lahore' }}
      />
    </>
  )
}
