import type { ReactNode } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { StepRow } from '@/global/components/page/StepRow'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { PillLink } from '@/global/components/ui/PillLink'
import { sampleFundMinimum } from '@/global/data/funds'
import { withBase } from '@/global/lib/asset'
import { formatPercent, formatSampleAmount, formatSampleYield } from '@/global/lib/format'
import { aboutPaths } from '../_lib/about'

function Points({ body, points }: { body: string; points: readonly string[] }) {
  return (
    <>
      <p>{body}</p>
      <ul className="mt-5 flex flex-col gap-2.5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sx-ink/80">
            <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
            {point}
          </li>
        ))}
      </ul>
    </>
  )
}

/** Photo filling the StepRow frame with a small sample listing card pinned to its bottom edge. */
function ListingVisual({ image, children }: { image: { src: string; alt: string }; children: ReactNode }) {
  return (
    <>
      <img
        src={withBase(image.src)}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-3 bottom-3 sm:inset-x-auto sm:left-4 sm:bottom-4 sm:w-[300px]">{children}</div>
    </>
  )
}

function ListingCard({ href, label, kicker, name, lines }: { href: string; label: string; kicker: string; name: string; lines: ReactNode }) {
  return (
    <Link href={href} aria-label={label} className="group flex items-center justify-between gap-4 rounded-[16px] bg-white p-4 text-sx-ink">
      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-xs font-semibold text-sx-brand">{kicker}</span>
        <span className="font-heading text-lg font-semibold leading-snug tracking-[-0.01em]">{name}</span>
        <span className="text-sm text-sx-ink/60">{lines}</span>
      </span>
      <ArrowCircle tone="dark" size="sm" />
    </Link>
  )
}

export function AboutPaths() {
  const { direct, funds } = aboutPaths

  return (
    <PageSection labelledBy="about-paths-heading">
      <SectionHeading id="about-paths-heading" eyebrow="Two ways in" title={aboutPaths.heading} highlight="browse" body={aboutPaths.body} align="center" />
      <div className="mt-12 flex flex-col gap-6">
        <StepRow
          id="about-path-direct"
          step={direct.label}
          title={direct.title}
          body={<Points body={direct.body} points={direct.points} />}
          action={
            <div className="mt-2">
              <PillLink href={direct.href}>{direct.cta}</PillLink>
            </div>
          }
          visual={
            <ListingVisual image={direct.image}>
              <ListingCard
                href={`/properties/${direct.listing.id}`}
                label={`View sample listing for ${direct.listing.name}`}
                kicker="Sample listing"
                name={direct.listing.name}
                lines={
                  <>
                    {formatSampleYield(direct.listing.sampleYieldPct)} · From {formatSampleAmount(direct.listing.sampleMinInvestment)}
                  </>
                }
              />
            </ListingVisual>
          }
        />
        <StepRow
          id="about-path-funds"
          step={funds.label}
          title={funds.title}
          body={<Points body={funds.body} points={funds.points} />}
          reverse
          action={
            <div className="mt-2">
              <PillLink href={funds.href}>{funds.cta}</PillLink>
            </div>
          }
          visual={
            <ListingVisual image={funds.image}>
              <ListingCard
                href={`/funds/${funds.listing.id}`}
                label={`View sample fund ${funds.listing.name}`}
                kicker="Sample fund"
                name={funds.listing.name}
                lines={
                  <>
                    {funds.listing.market} · {funds.listing.propertyCount} sample properties
                    <br />
                    Sample yield {formatPercent(funds.listing.sampleReturnPct)} · Sample minimum {formatSampleAmount(sampleFundMinimum)}
                  </>
                }
              />
            </ListingVisual>
          }
        />
      </div>
    </PageSection>
  )
}
