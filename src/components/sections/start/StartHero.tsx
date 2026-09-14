import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getStartedIntro, properties } from '@/data'
import { storyAssets } from '@/data/story-assets'
import { formatPercent, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function StartHero() {
  const rootRef = useRef<HTMLElement>(null)
  const cedar = properties.find((item) => item.id === 'cedar-court')
  useSectionReveal(rootRef, { media: '[data-start-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-start-hero-image]', x: 10, y: 6, rotateX: 1.4, rotateY: 1.8, invert: true },
      { selector: '[data-start-hero-card]', x: 12, y: 0, rotateX: 2, rotateY: 2.4, z: 22 },
    ],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-start-hero-image]', yPercent: 6 },
    { selector: '[data-start-hero-card]', yPercent: -5 },
  ])

  return (
    <section ref={rootRef} className="start-hero" aria-labelledby="start-heading">
      <div className="start-hero__layout mx-auto max-w-[var(--container-wide)]">
        <div className="start-hero__copy">
          <p data-reveal-heading className="property-hero__mark">
            Illustrative sample
          </p>
          <h1
            data-reveal-heading
            id="start-heading"
            className="mt-6 max-w-[10ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {getStartedIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {getStartedIntro.body}
          </p>
          <div data-reveal-heading className="start-hero__rule" />
        </div>

        <div data-reveal-item data-depth-stage className="start-hero__scene">
          <figure className="start-hero__media m-0">
            <img
              data-start-hero-image
              src={storyAssets.choose.src}
              alt={storyAssets.choose.alt}
              width={1400}
              height={1867}
              loading="eager"
              fetchPriority="high"
            />
          </figure>

          {cedar ? (
            <Link
              to={`/properties/${cedar.id}`}
              data-start-hero-card
              className="start-hero__card"
              aria-label={`View sample listing for ${cedar.name}`}
            >
              <p className="start-kicker">Sample property</p>
              <p className="mt-2 text-lg font-medium tracking-tight">{cedar.name}</p>
              <p className="mt-1 text-sm text-muted">
                Sample yield {formatPercent(cedar.sampleYieldPct)} · From{' '}
                {formatSampleAmount(cedar.sampleMinInvestment)}
              </p>
              <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium">
                View property
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
