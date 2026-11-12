'use client'

import { useRef } from 'react'
import { Link } from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { featuredHoldingsIntro } from '@/data'
import { formatPropertyMeta, formatSampleAmount, formatPercent, formatStatus } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useHoldingsDepth } from '@/hooks/useHoldingsDepth'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

type Props = {
  properties: Property[]
}

export function FeaturedHoldingsSection({ properties }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-holding-image]', depth: true })
  useHoldingsDepth(rootRef)
  useDepthParallax(rootRef, [
    { selector: '[data-holding-image="featured"]', yPercent: 8 },
    { selector: '[data-holding-panel]', yPercent: -6 },
  ])
  const [featured, first, second] = properties

  if (!featured) return null

  const location = formatPropertyMeta(featured.neighborhood, featured.city)
  const supporting = [first, second].filter(Boolean) as Property[]

  return (
    <section
      ref={rootRef}
      id="holdings"
      className="py-16 md:py-24 px-5 md:px-8 overflow-x-clip bg-surface"
      aria-labelledby="holdings-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="max-w-2xl">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {featuredHoldingsIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="holdings-heading"
            className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight mt-3 max-w-[14ch] text-ink"
          >
            {featuredHoldingsIntro.heading}
          </h2>
        </div>

        <div className="relative mt-12 pb-10 lg:mt-16 lg:pb-16 lg:min-h-[44rem] overflow-visible" data-depth-stage>
          <figure className="m-0 relative overflow-hidden rounded-2xl lg:w-[78%]">
            <img
              data-holding-image="featured"
              data-depth="back"
              src={withBase(featured.image)}
              alt={featured.imageAlt}
              width={1600}
              height={2000}
              loading="lazy"
              decoding="async"
              className="block w-full aspect-[4/5] lg:aspect-auto lg:h-[44rem] lg:min-h-[44rem] object-cover rounded-2xl"
            />
            <div
              data-reveal-item
              data-holding-panel
              data-depth="front"
              className="mt-4 lg:mt-0 lg:absolute lg:left-7 lg:-bottom-7 z-10 lg:w-[min(22.5rem,calc(100%-3.5rem))] p-6 bg-surface/95 backdrop-blur-md border border-ink/[0.08] rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:border-ink/15 hover:z-50 transition-all duration-500 ease-out"
            >
              <Link
                href={`/properties/${featured.id}`}
                className="block group"
                aria-label={`View sample listing for ${featured.name}`}
              >
                <p className="text-muted text-xs font-semibold uppercase tracking-[0.14em]">{featured.type}</p>
                <p className="mt-2 text-[1.55rem] font-semibold tracking-tight text-ink group-hover:text-primary transition-colors duration-300">{featured.name}</p>
                <p className="mt-1 text-sm text-muted">{location}</p>
                <dl className="mt-5 space-y-3.5 border-t border-ink/[0.08] pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-muted">Sample yield</dt>
                    <dd className="font-semibold tabular-nums text-ink">{formatPercent(featured.sampleYieldPct)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-muted">Sample minimum</dt>
                    <dd className="font-semibold tabular-nums text-ink">
                      {formatSampleAmount(featured.sampleMinInvestment)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-muted">Status</dt>
                    <dd className="font-semibold text-ink">{formatStatus(featured.status)}</dd>
                  </div>
                </dl>
                <p className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary transition-colors duration-300">
                  View property
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </p>
              </Link>
            </div>
          </figure>

          {supporting.map((property, index) => (
            <article
              key={property.id}
              data-reveal-item
              data-holding-support={index === 0 ? 'one' : 'two'}
              data-depth="mid"
              className={`mt-4 lg:mt-0 lg:absolute lg:w-[27%] z-10 shadow-xl rounded-2xl overflow-hidden bg-surface border border-ink/[0.08] hover:shadow-2xl hover:-translate-y-2 hover:border-ink/15 hover:z-50 transition-all duration-500 ease-out ${
                index === 0
                  ? 'lg:top-[7%] lg:-right-5 lg:rotate-[2.2deg]'
                  : 'lg:right-[6%] lg:-bottom-9 lg:-rotate-[2.8deg]'
              }`}
            >
              <Link
                href={`/properties/${property.id}`}
                className="block group"
                aria-label={`View sample listing for ${property.name}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    data-holding-image
                    src={withBase(property.image)}
                    alt={property.imageAlt}
                    width={900}
                    height={1120}
                    loading="lazy"
                    decoding="async"
                    className="block w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="px-4 py-3">
                  <p className="text-base font-medium tracking-tight text-ink group-hover:text-primary transition-colors duration-300">{property.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{property.neighborhood}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

