'use client'

import { CalendarCheck, ShieldCheck } from 'lucide-react'
import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { contact, lahore, progressUpdates, projectById, whatsappWith } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { ProgressVideo } from './ProgressVideo'

// List page (docs/INNER-PAGE-PATTERNS.md, pattern B): dated site-visit videos, newest first.

const lahoreProject = projectById('lahore')!
const deliveryReason = lahore.reasons.find((reason) => reason.title === 'Assured delivery timeline')

export function ProgressPage() {
  usePageMeta(
    'Serene Investors | Construction progress',
    'Dated site-visit videos from Serene Heights, newest first, and the delivery status of Serene Heights Lahore.',
  )

  const [latest, ...earlier] = progressUpdates
  const first = progressUpdates[progressUpdates.length - 1]

  return (
    <>
      <PageHeader
        eyebrow="Construction progress"
        title="Watch Serene Heights rise."
        highlight="rise"
        body="Every site visit we have filmed, newest first. Press play on any update, or open it on YouTube."
        aside={
          <p className="text-sm font-medium text-sx-ink/60">
            {progressUpdates.length} updates · {first.date} to {latest.date}
          </p>
        }
      />

      <PageSection label="Latest update" pad="none">
        <ProgressVideo update={latest} featured />
      </PageSection>

      <PageSection labelledBy="earlier-updates" pad="top">
        <SectionHeading id="earlier-updates" title="Earlier updates" body="Each visit shows the site as it stood on that date." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {earlier.map((update) => (
            <li key={update.id}>
              <ProgressVideo update={update} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-sx-ink/60">
          More videos on the{' '}
          <a
            href={contact.social.find((s) => s.label === 'YouTube')?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sx-brand underline underline-offset-4 hover:text-sx-forest"
          >
            Serene Heights YouTube channel<span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </PageSection>

      {/* Lahore delivery status */}
      <PageSection labelledBy="lahore-status" pad="top">
        <div className="grid items-center gap-6 rounded-[30px] bg-white p-6 text-sx-ink sm:p-10 md:grid-cols-[auto_1fr]">
          <img
            src={withBase(lahore.ldaBadge)}
            alt="LDA approved badge for Serene Heights Lahore"
            width={160}
            height={160}
            loading="lazy"
            className="h-28 w-auto object-contain sm:h-36"
          />
          <div className="flex flex-col items-start gap-4">
            <h2 id="lahore-status" className="font-heading text-2xl font-bold tracking-[-0.02em] sm:text-[2rem]">
              {lahoreProject.name}
            </h2>
            <ul className="flex flex-wrap gap-2 text-xs font-semibold">
              <li className="inline-flex items-center gap-1.5 rounded-full bg-sx-mint px-3 py-1 text-sx-ink">
                <ShieldCheck size={13} aria-hidden="true" />
                {lahoreProject.since}
              </li>
              <li className="inline-flex items-center gap-1.5 rounded-full bg-sx-sand px-3 py-1 text-sx-ink">
                <CalendarCheck size={13} aria-hidden="true" />
                {lahoreProject.status}
              </li>
            </ul>
            {deliveryReason && <p className="max-w-2xl text-base leading-relaxed text-sx-ink/65">{deliveryReason.body}</p>}
            <PillLink href="/properties" variant="dark">
              See the projects
            </PillLink>
          </div>
        </div>
      </PageSection>

      <CtaBand
        tone="brand"
        title="See the site for yourself."
        highlight="for yourself"
        body={`Book a site visit with our team, or call ${contact.uan}.`}
        actions={[
          { label: 'Book a site visit', href: '/contact' },
          { label: 'WhatsApp us', href: whatsappWith('I would like to book a site visit') },
        ]}
      />
    </>
  )
}
