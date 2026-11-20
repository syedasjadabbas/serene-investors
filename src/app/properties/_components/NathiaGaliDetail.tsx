import { CalendarCheck, Gift, Percent, Wrench } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { FeatureCards } from '@/global/components/page/FeatureCards'
import { Card, PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StatCards } from '@/global/components/page/StatCards'
import { PillLink } from '@/global/components/ui/PillLink'
import { company, contact, nathiagali, ownerBenefits } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'
import { nathiaGaliProject as project, plans } from '../_lib/projects'
import { PlanGrid } from './PlanCard'
import { ProjectHeader } from './ProjectHeader'

const figure = (label: string) => nathiagali.figures.find((item) => item.label === label)

const STATS = ['Kanals of land', 'Towers', 'Apartments', 'Amenities'].flatMap((label) => {
  const item = figure(label)
  return item ? [{ value: item.value, label: item.label.toLowerCase() }] : []
})

const BENEFIT_ICONS = [Wrench, CalendarCheck, Percent, Gift]

const LINK =
  'font-semibold text-sx-brand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand'

/** /properties/nathia-gali: the hotel & resort in the Galiyat. */
export function NathiaGaliDetail() {
  const seasons = [nathiagali.seasons.winter, nathiagali.seasons.summer]

  return (
    <>
      <ProjectHeader
        eyebrow={`${project.status} · ${project.kind}`}
        title={project.name}
        place={project.place}
        body={project.summary}
        aside={
          <PillLink href={`/get-started?intent=project&id=${project.id}`} variant="dark">
            Start with Nathia Gali
          </PillLink>
        }
        frames={nathiagali.gallery.map((item) => ({ src: item.src, alt: `${item.title} (${item.tag.toLowerCase()})` }))}
        badge={{ top: project.status, bottom: `${project.since} · ${figure('Altitude')?.value ?? ''}` }}
      />

      <PageSection label="Serene Heights Nathia Gali in numbers" pad="top">
        <StatCards items={STATS} />
      </PageSection>

      <PageSection labelledBy="ng-overview">
        <div className="grid gap-4 md:grid-cols-[3fr_2fr]">
          <Card className="flex flex-col gap-5">
            <SectionHeading id="ng-overview" eyebrow="Overview" title="A resort in the pines, at 7,906 ft." highlight="7,906 ft" />
            <p className="text-base leading-relaxed text-sx-ink/70 sm:text-lg">{company.intro}</p>
            <p className="text-base leading-relaxed text-sx-ink/70 sm:text-lg">{company.management}</p>
          </Card>
          <Card tone="forest" className="flex flex-col gap-4">
            <h3 className="font-heading text-2xl font-bold tracking-[-0.02em]">Residences</h3>
            <ul className="flex flex-col gap-2">
              {nathiagali.residences.map((item) => (
                <li key={item.name} className="rounded-[14px] bg-white/10 px-4 py-3">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/75">{item.note}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </PageSection>

      <PageSection labelledBy="ng-seasons" tone="white">
        <SectionHeading id="ng-seasons" eyebrow="Two seasons" title="Open through winter and summer." highlight="winter and summer" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {seasons.map((season) => (
            <article key={season.months} className="flex flex-col overflow-hidden rounded-[24px] bg-sx-paper p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
                <img src={withBase(season.image)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sx-ink">{season.months}</span>
              </div>
              <div className="flex flex-col gap-2 p-4 sm:p-6">
                <h3 className="font-heading text-2xl font-bold tracking-[-0.02em]">{season.title}</h3>
                <p className="text-base leading-relaxed text-sx-ink/70">{season.body}</p>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <PageSection labelledBy="ng-amenities">
        <SectionHeading
          id="ng-amenities"
          eyebrow="Amenities"
          title="Everything on site, run by the hotel."
          highlight="run by the hotel"
          body={`${figure('Amenities')?.value} amenities and ${figure('Resort activities')?.value} resort activities, grouped by where you will find them.`}
          action={
            <PillLink href="/resort" variant="dark">
              See the resort
            </PillLink>
          }
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {nathiagali.amenityGroups.map((group) => (
            <li key={group.name} className="flex flex-col overflow-hidden rounded-[24px] bg-white p-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
                <img src={withBase(group.image)} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="font-heading text-xl font-bold tracking-[-0.015em]">{group.name}</h3>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {group.items.map(([name, note]) => (
                    <li key={name} className="text-sm leading-snug">
                      <span className="font-semibold">{name}</span>
                      <span className="block text-sx-ink/65">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection labelledBy="ng-route" tone="dark">
        <div className="grid gap-10 md:grid-cols-2">
          <SectionHeading
            id="ng-route"
            tone="dark"
            eyebrow="Getting there"
            title="Two hours from Islamabad."
            highlight="Two hours"
            body={contact.offices[0].address}
            action={
              <a
                href={contact.nathiagaliMap}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-mint"
              >
                Open in Google Maps
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            }
          />
          <ol className="flex flex-col">
            {nathiagali.route.map((stop, index) => (
              <li key={stop.place} className="relative flex gap-4 pb-6 last:pb-0">
                <span className="flex flex-col items-center" aria-hidden="true">
                  <span className={index === nathiagali.route.length - 1 ? 'size-3 rounded-full bg-sx-mint' : 'size-3 rounded-full bg-white/40'} />
                  {index < nathiagali.route.length - 1 && <span className="mt-1 w-px flex-1 bg-white/20" />}
                </span>
                <div className="-mt-1.5 flex flex-1 flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-semibold text-white">{stop.place}</p>
                  <p className="text-sm tabular-nums text-white/65">
                    {stop.dist} · {stop.time}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </PageSection>

      <PageSection labelledBy="ng-plans-floor">
        <SectionHeading
          id="ng-plans-floor"
          eyebrow="Floor plans"
          title="Floor by floor."
          body="Tap a plan to open it full size."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {nathiagali.floorPlans.map((plan) => (
            <li key={plan.file}>
              <a
                href={withBase(plan.full)}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white p-2 text-sx-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-sx-paper">
                  <img
                    src={withBase(plan.thumb)}
                    alt={`${plan.title} floor plan${plan.note ? `, ${plan.note.toLowerCase()}` : ''}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="px-2 pb-1 pt-3 text-sm font-semibold">
                  {plan.title}
                  {plan.note && <span className="font-normal text-sx-ink/65"> · {plan.note}</span>}
                  <span className="sr-only"> (opens in a new tab)</span>
                </p>
              </a>
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection id="plans" labelledBy="ng-payment" className="scroll-mt-24">
        <SectionHeading
          id="ng-payment"
          eyebrow="Payment plans"
          title="30% down, then 36 monthly instalments."
          highlight="36 monthly instalments"
          body="The four plans published for Serene Heights Nathia Gali."
          action={
            <PillLink href="/calculator" variant="dark">
              Open payment plans
            </PillLink>
          }
        />
        <div className="mt-10">
          <PlanGrid plans={plans} />
        </div>
      </PageSection>

      <PageSection labelledBy="ng-owners">
        <SectionHeading
          id="ng-owners"
          eyebrow="Owner benefits"
          title="What owning here includes."
          highlight="includes"
          action={
            <PillLink href="/owner-benefits" variant="dark">
              All owner benefits
            </PillLink>
          }
        />
        <FeatureCards
          className="mt-10"
          columns={4}
          items={ownerBenefits.map((item, index) => ({ ...item, icon: BENEFIT_ICONS[index] }))}
        />
        <p className="mt-6 text-base text-sx-ink/70">
          Questions? Call{' '}
          <a href={contact.uanHref} className={LINK}>
            {contact.uan}
          </a>{' '}
          or email{' '}
          <a href={`mailto:${project.email}`} className={LINK}>
            {project.email}
          </a>
          .
        </p>
      </PageSection>

      <CtaBand
        tone="white"
        title="See more on the Serene Heights Nathia Gali site."
        highlight="Serene Heights Nathia Gali"
        body="The project's own site has the full resort, booking and contact details."
        actions={[
          { label: 'Visit the project site', href: project.site },
          { label: 'Contact us', href: '/contact' },
        ]}
        image={{ src: nathiagali.seasons.winter.image, alt: 'The Serene Heights tower beside the snow-covered pines in winter' }}
      />
    </>
  )
}
