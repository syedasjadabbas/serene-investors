import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { howItWorksIntro, properties } from '@/data'
import { storyAssets } from '@/data/story-assets'
import { formatPercent, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function HowHero() {
  const rootRef = useRef<HTMLElement>(null)
  const cedar = properties.find((item) => item.id === 'cedar-court')
  useSectionReveal(rootRef, { media: '[data-how-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-how-hero-image]', x: 10, y: 6, rotateX: 1.4, rotateY: 1.8, invert: true },
      { selector: '[data-how-hero-card]', x: 12, y: 0, rotateX: 2, rotateY: 2.4, z: 22 },
    ],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-how-hero-image]', yPercent: 6 },
    { selector: '[data-how-hero-card]', yPercent: -5 },
  ])

  return (
    <section ref={rootRef} className="how-hero" aria-labelledby="how-page-heading">
      <div className="how-hero__layout mx-auto max-w-[var(--container-wide)]">
        <div className="how-hero__copy">
          <p data-reveal-heading className="property-hero__mark">
            Illustrative sample
          </p>
          <p data-reveal-heading className="mt-5 text-sm text-muted">
            {howItWorksIntro.eyebrow}
          </p>
          <h1
            data-reveal-heading
            id="how-page-heading"
            className="mt-2 max-w-[10ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            How it works
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {howItWorksIntro.body}
          </p>
          <div data-reveal-heading className="how-hero__rule" />
        </div>

        <div data-reveal-item data-depth-stage className="how-hero__scene">
          <figure className="how-hero__media m-0">
            <img
              data-how-hero-image
              src={howItWorksIntro.image.src}
              alt={howItWorksIntro.image.alt}
              width={2000}
              height={1200}
              loading="eager"
              fetchPriority="high"
            />
          </figure>

          {cedar ? (
            <Link
              to={`/properties/${cedar.id}`}
              data-how-hero-card
              className="how-hero__card"
              aria-label={`View sample listing for ${cedar.name}`}
            >
              <img src={storyAssets.choose.src} alt="" width={720} height={480} />
              <div>
                <p className="how-kicker">Sample property</p>
                <p className="mt-2 text-lg font-medium tracking-tight">{cedar.name}</p>
                <p className="mt-1 text-sm text-muted">
                  Sample yield {formatPercent(cedar.sampleYieldPct)} · From{' '}
                  {formatSampleAmount(cedar.sampleMinInvestment)}
                </p>
                <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium">
                  View property
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}
