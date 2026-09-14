import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { catalogueFeaturedFund, fundsIntro, sampleFundMinimum } from '@/data'
import { fundStageAssets } from '@/data/fund-stage-assets'
import { formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function FundsHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-funds-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-funds-hero-field]', x: 10, y: 7, rotateX: 1.4, rotateY: 1.8, z: -36, invert: true },
      { selector: '[data-funds-hero-card]', x: 12, y: 0, rotateX: 2, rotateY: 2.4, z: 20 },
    ],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-funds-hero-field]', yPercent: 6 },
    { selector: '[data-funds-hero-card]', yPercent: -5 },
  ])

  return (
    <section ref={rootRef} className="funds-hero" aria-labelledby="funds-heading">
      <div className="funds-hero__layout mx-auto max-w-[var(--container-wide)]">
        <div className="funds-hero__copy">
          <p data-reveal-heading className="property-hero__mark">
            Illustrative sample
          </p>
          <h1
            data-reveal-heading
            id="funds-heading"
            className="mt-6 max-w-[12ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {fundsIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {fundsIntro.body}
          </p>
          <div data-reveal-heading className="funds-hero__rule" />
        </div>

        <div data-reveal-item data-depth-stage className="funds-hero__scene">
          <figure className="funds-hero__field m-0">
            <img
              data-funds-hero-image
              data-funds-hero-field
              src={fundStageAssets.field.src}
              alt={fundStageAssets.field.alt}
              width={1600}
              height={900}
              loading="eager"
              fetchPriority="high"
            />
          </figure>

          <aside data-funds-hero-card className="funds-hero__card">
            <img
              data-funds-hero-image
              src={catalogueFeaturedFund.image}
              alt={catalogueFeaturedFund.imageAlt}
              width={900}
              height={675}
              loading="eager"
            />
            <div className="funds-hero__card-body">
              <p className="text-sm text-muted">Sample fund</p>
              <p className="mt-2 text-lg font-medium tracking-tight">{catalogueFeaturedFund.name}</p>
              <p className="mt-1 text-sm text-muted">
                {catalogueFeaturedFund.market} · {catalogueFeaturedFund.propertyCount} sample
                properties
              </p>
              <p className="mt-4 flex items-baseline justify-between gap-4 text-sm">
                <span className="text-muted">Sample minimum</span>
                <span className="font-semibold tabular-nums">
                  {formatSampleAmount(sampleFundMinimum)}
                </span>
              </p>
              <Link
                to={`/funds/${catalogueFeaturedFund.id}`}
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
              >
                View fund
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
