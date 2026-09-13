import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { featuredHoldingsIntro } from '@/data'
import { formatPropertyMeta, formatSampleAmount, formatPercent, formatStatus } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  properties: Property[]
}

export function FeaturedHoldingsSection({ properties }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-holding-image]', depth: true })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-holding-image="featured"]', x: 14, y: 10, rotateX: 2, rotateY: 2.6, z: -36, invert: true },
      { selector: '[data-holding-panel]', x: 16, y: 11, rotateX: 2.4, rotateY: 3.2, z: 40 },
      { selector: '.holding-canvas__support--one', x: 8, y: 6, rotateX: 1.6, rotateY: 2, z: 18, rotateZ: 2.2 },
      { selector: '.holding-canvas__support--two', x: 8, y: 6, rotateX: 1.6, rotateY: 2, z: 18, rotateZ: -2.8 },
    ],
  })
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
      className="home-band home-band--stage overflow-x-clip bg-surface"
      aria-labelledby="holdings-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="max-w-2xl">
          <p data-reveal-heading className="home-kicker text-muted">
            {featuredHoldingsIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="holdings-heading"
            className="home-heading mt-3 max-w-[14ch]"
          >
            {featuredHoldingsIntro.heading}
          </h2>
        </div>

        <div className="holding-canvas mt-12 pb-10 lg:mt-16 lg:pb-16" data-depth-stage>
          <figure className="holding-canvas__main m-0">
            <img
              data-holding-image="featured"
              data-depth="back"
              src={featured.image}
              alt={featured.imageAlt}
              width={1600}
              height={2000}
              loading="lazy"
              decoding="async"
            />
            <div data-reveal-item data-holding-panel data-depth="front" className="holding-canvas__panel stage-card p-5">
              <Link
                to={`/properties/${featured.id}`}
                className="block"
                aria-label={`View sample listing for ${featured.name}`}
              >
                <p className="home-kicker text-muted">{featured.type}</p>
                <p className="mt-2 text-[1.5rem] font-medium tracking-tight">{featured.name}</p>
                <p className="mt-1 text-sm text-muted">{location}</p>
                <dl className="mt-5 space-y-3 border-t border-line pt-4 text-sm">
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-muted">Sample yield</dt>
                    <dd className="font-semibold tabular-nums">{formatPercent(featured.sampleYieldPct)}</dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-muted">Sample minimum</dt>
                    <dd className="font-semibold tabular-nums">
                      {formatSampleAmount(featured.sampleMinInvestment)}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <dt className="text-muted">Status</dt>
                    <dd className="font-semibold">{formatStatus(featured.status)}</dd>
                  </div>
                </dl>
                <p className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium">
                  View property
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </p>
              </Link>
            </div>
          </figure>

          {supporting.map((property, index) => (
            <article
              key={property.id}
              data-reveal-item
              data-holding-support
              data-depth="mid"
              className={
                index === 0
                  ? 'holding-canvas__support holding-canvas__support--one'
                  : 'holding-canvas__support holding-canvas__support--two'
              }
            >
              <Link
                to={`/properties/${property.id}`}
                className="block"
                aria-label={`View sample listing for ${property.name}`}
              >
                <img
                  data-holding-image
                  src={property.image}
                  alt={property.imageAlt}
                  width={900}
                  height={1120}
                  loading="lazy"
                  decoding="async"
                />
                <div className="px-4 py-3">
                  <p className="text-base font-medium tracking-tight">{property.name}</p>
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
