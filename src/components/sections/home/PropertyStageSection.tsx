import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { OfferingSplit } from '@/types'
import { properties, propertyStageIntro } from '@/data'
import { formatPercent, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useFloatingMotion } from '@/hooks/useFloatingMotion'
import { useOfferingsReveal } from '@/hooks/useOfferingsReveal'
import { usePointerTilt } from '@/hooks/usePointerTilt'

type Props = {
  offering: OfferingSplit
}

export function PropertyStageSection({ offering }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useOfferingsReveal(rootRef)
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-offering-media] img', x: 12, y: 8, rotateX: 2, rotateY: 2.6, z: -32, invert: true },
      { selector: '[data-offering-card]', x: 14, y: 0, rotateX: 2.4, rotateY: 3.2, z: 36 },
    ],
  })
  useFloatingMotion(rootRef, [{ selector: '[data-offering-card]', y: 7, rotate: 0.45, duration: 6.4 }])
  useDepthParallax(rootRef, [
    { selector: '[data-offering-media] img', yPercent: 7 },
    { selector: '[data-offering-card]', yPercent: -5 },
  ])
  const cedar = properties.find((item) => item.id === 'cedar-court')

  return (
    <section
      ref={rootRef}
      id="direct-property"
      className="home-band home-band--stage overflow-x-clip bg-soft"
      aria-labelledby="property-stage-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="max-w-xl">
          <p data-reveal-heading className="home-kicker text-muted">
            {propertyStageIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="property-stage-heading"
            className="home-heading mt-3 max-w-[12ch]"
          >
            {propertyStageIntro.heading}
          </h2>
          <p data-reveal-heading className="home-lede max-w-[40ch]">
            {propertyStageIntro.body}
          </p>
        </div>

        <div data-reveal-item data-depth-stage className="property-stage mt-12 pb-8 lg:mt-16 lg:pb-10">
          <figure data-offering-media data-depth="back" className="property-stage__media m-0">
            <img
              src={offering.image}
              alt={offering.imageAlt}
              width={2000}
              height={1400}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <article data-offering-card data-depth="front" className="property-stage__card stage-card p-6">
            <p className="home-kicker text-muted">{offering.label}</p>
            <h3 className="mt-3 text-[length:var(--type-panel)] font-semibold tracking-tight">
              {cedar?.name ?? offering.example.name}
            </h3>
            <p className="mt-1 text-sm text-muted">{cedar?.neighborhood ?? offering.example.meta}</p>
            <dl className="mt-5 space-y-3 border-t border-line pt-4 text-sm">
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-muted">Sample yield</dt>
                <dd className="font-semibold tabular-nums">
                  {cedar ? formatPercent(cedar.sampleYieldPct) : offering.example.detail}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-muted">From</dt>
                <dd className="font-semibold tabular-nums">
                  {cedar ? formatSampleAmount(cedar.sampleMinInvestment) : '$5,000'}
                </dd>
              </div>
            </dl>
            <Link
              to={cedar ? `/properties/${cedar.id}` : offering.href}
              className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
            >
              View property
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
