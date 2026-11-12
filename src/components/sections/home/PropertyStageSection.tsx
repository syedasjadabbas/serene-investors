import { useRef } from 'react'
import { Link } from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import type { OfferingSplit } from '@/types'
import { properties, propertyStageIntro } from '@/data'
import { formatPercent, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useFloatingMotion } from '@/hooks/useFloatingMotion'
import { useOfferingsReveal } from '@/hooks/useOfferingsReveal'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { withBase } from '@/lib/asset'

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
      className="overflow-x-clip bg-soft py-16 md:py-20 lg:py-24"
      aria-labelledby="property-stage-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8 lg:px-10">
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

        <div data-reveal-item data-depth-stage className="relative mt-12 min-h-[32rem] pb-8 lg:mt-16 lg:min-h-[42rem] lg:pb-10">
          <figure data-offering-media data-depth="back" className="m-0">
            <img
              src={withBase(offering.image)}
              alt={offering.imageAlt}
              width={2000}
              height={1400}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] min-h-[22rem] w-full rounded-2xl object-cover lg:aspect-[16/9] lg:min-h-[40rem]"
            />
          </figure>

          <article
            data-offering-card
            data-depth="front"
            className="mt-5 rounded-2xl border border-ink/[0.08] bg-surface/95 p-6 text-ink shadow-[0_18px_40px_rgb(24_32_25/0.14)] backdrop-blur-md transition-all duration-500 ease-out hover:z-50 hover:-translate-y-2 hover:border-ink/20 hover:shadow-2xl lg:absolute lg:bottom-[-1.75rem] lg:left-9 lg:mt-0 lg:w-[min(23rem,calc(100%-4.5rem))] lg:z-[3]"
          >
            <Link
              href={cedar ? `/properties/${cedar.id}` : offering.href}
              className="block"
              aria-label={`View sample listing for ${cedar?.name ?? offering.example.name}`}
            >
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
              <p className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium">
                View property
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </p>
            </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
