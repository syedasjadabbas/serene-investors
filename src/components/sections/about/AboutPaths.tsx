import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { aboutPaths, sampleFundMinimum } from '@/data'
import { formatPercent, formatSampleAmount, formatSampleYield } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

function DirectPath() {
  const rootRef = useRef<HTMLElement>(null)
  const { direct } = aboutPaths
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-about-direct-image]', x: 8, y: 5, rotateX: 1.3, rotateY: 1.6, invert: true },
      { selector: '[data-about-direct-card]', x: 10, y: 0, rotateX: 1.8, rotateY: 2.2, z: 22 },
    ],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-about-direct-image]', yPercent: 5 },
    { selector: '[data-about-direct-card]', yPercent: -4 },
  ])

  return (
    <article ref={rootRef} data-about-path className="about-path">
      <div data-depth-stage className="about-path__scene about-path__scene--direct">
        <figure className="about-path__media m-0">
          <img
            data-about-path-image
            data-about-direct-image
            src={direct.image.src}
            alt={direct.image.alt}
            width={1400}
            height={1750}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <Link
          to={`/properties/${direct.listing.id}`}
          data-about-direct-card
          className="about-path__card"
          aria-label={`View sample listing for ${direct.listing.name}`}
        >
          <p className="about-kicker">Sample listing</p>
          <p className="mt-2 text-lg font-medium tracking-tight">{direct.listing.name}</p>
          <p className="mt-1 text-sm text-muted">
            {formatSampleYield(direct.listing.sampleYieldPct)} · From{' '}
            {formatSampleAmount(direct.listing.sampleMinInvestment)}
          </p>
          <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium">
            View property
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
        </Link>
      </div>

      <div className="about-path__copy">
        <p className="about-kicker">{direct.label}</p>
        <h3 className="mt-3 max-w-[12ch] text-[clamp(1.7rem,2.6vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-balance">
          {direct.title}
        </h3>
        <p className="mt-4 max-w-[36ch] leading-relaxed text-muted text-pretty">{direct.body}</p>
        <ul className="about-path__points">
          {direct.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="mt-7">
          <ButtonLink to={direct.href} className="min-h-11 gap-1.5">
            {direct.cta}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}

function FundsPath() {
  const rootRef = useRef<HTMLElement>(null)
  const { funds } = aboutPaths
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-about-fund-image]', x: 8, y: 5, rotateX: 1.3, rotateY: 1.6, invert: true },
      { selector: '[data-about-fund-card]', x: 11, y: 0, rotateX: 1.8, rotateY: 2.2, z: 24 },
    ],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-about-fund-image]', yPercent: 5 },
    { selector: '[data-about-fund-card]', yPercent: -4 },
  ])

  return (
    <article ref={rootRef} data-about-path className="about-path about-path--funds">
      <div data-depth-stage className="about-path__scene about-path__scene--funds">
        <figure className="about-path__media m-0">
          <img
            data-about-path-image
            data-about-fund-image
            src={funds.image.src}
            alt={funds.image.alt}
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <Link
          to={`/funds/${funds.listing.id}`}
          data-about-fund-card
          className="about-path__card"
          aria-label={`View sample fund ${funds.listing.name}`}
        >
          <img
            src={funds.listing.image}
            alt={funds.listing.imageAlt}
            width={720}
            height={480}
            loading="lazy"
            decoding="async"
          />
          <div className="about-path__card-body">
            <p className="about-kicker">Sample fund</p>
            <p className="mt-2 text-lg font-medium tracking-tight">{funds.listing.name}</p>
            <p className="mt-1 text-sm text-muted">
              {funds.listing.market} · {funds.listing.propertyCount} sample properties
            </p>
            <p className="mt-3 flex items-baseline justify-between gap-4 text-sm">
              <span className="text-muted">Sample yield</span>
              <span className="font-semibold tabular-nums">
                {formatPercent(funds.listing.sampleReturnPct)}
              </span>
            </p>
            <p className="mt-1 flex items-baseline justify-between gap-4 text-sm">
              <span className="text-muted">Sample minimum</span>
              <span className="font-semibold tabular-nums">{formatSampleAmount(sampleFundMinimum)}</span>
            </p>
            <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium">
              View fund
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </span>
          </div>
        </Link>
      </div>

      <div className="about-path__copy">
        <p className="about-kicker">{funds.label}</p>
        <h3 className="mt-3 max-w-[14ch] text-[clamp(1.7rem,2.6vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-balance">
          {funds.title}
        </h3>
        <p className="mt-4 max-w-[36ch] leading-relaxed text-muted text-pretty">{funds.body}</p>
        <ul className="about-path__points">
          {funds.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="mt-7">
          <ButtonLink to={funds.href} className="min-h-11 gap-1.5">
            {funds.cta}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  )
}

export function AboutPaths() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { items: '[data-about-path]', media: '[data-about-path-image]', depth: true })

  return (
    <section ref={rootRef} className="about-paths" aria-labelledby="about-paths-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="about-paths-heading"
          className="max-w-[14ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          {aboutPaths.heading}
        </h2>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {aboutPaths.body}
        </p>

        <div className="about-paths__grid">
          <DirectPath />
          <FundsPath />
        </div>
      </div>
    </section>
  )
}
