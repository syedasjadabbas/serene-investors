import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import {
  catalogueFeaturedFund,
  fundSampleStatus,
  funds,
  fundsFeaturedBand,
  sampleFundMinimum,
} from '@/data'
import { formatFundType, formatPercent, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useFundFocus } from '@/hooks/useFundFocus'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

export function FeaturedFundBand() {
  const rootRef = useRef<HTMLElement>(null)
  const layers = funds.filter((item) => item.id !== catalogueFeaturedFund.id)
  useSectionReveal(rootRef, { media: '[data-featured-fund-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-featured-fund-image]', x: 8, y: 6, rotateX: 1.4, rotateY: 1.8 }],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-featured-fund-image]', yPercent: 7 },
    { selector: '[data-funds-layer="0"]', yPercent: -4 },
    { selector: '[data-funds-layer="1"]', yPercent: -7 },
  ])
  useFundFocus(rootRef, '[data-funds-layer]')

  return (
    <section ref={rootRef} className="funds-featured" aria-labelledby="featured-fund-heading">
      <div className="funds-featured__layout mx-auto max-w-[var(--container-wide)]">
        <div data-depth-stage className="funds-featured__stage">
          <figure className="funds-featured__media m-0">
            <Link
              to={`/funds/${catalogueFeaturedFund.id}`}
              aria-label={`View sample fund ${catalogueFeaturedFund.name}`}
            >
              <img
                data-featured-fund-image
                src={catalogueFeaturedFund.image}
                alt={catalogueFeaturedFund.imageAlt}
                width={1400}
                height={1750}
                loading="lazy"
                decoding="async"
              />
            </Link>
          </figure>

          {layers.map((fund, index) => (
            <aside
              key={fund.id}
              data-funds-layer={index}
              className={`funds-layer funds-layer--${index === 0 ? 'one' : 'two'}`}
            >
              <img src={fund.image} alt={fund.imageAlt} width={720} height={540} loading="lazy" />
              <div className="funds-layer__body">
                <p className="text-sm text-muted">Sample fund</p>
                <p className="mt-2 text-lg font-medium tracking-tight">{fund.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {fund.market} · {fund.propertyCount} sample properties
                </p>
                <Link
                  to={`/funds/${fund.id}`}
                  className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
                >
                  View fund
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </div>
            </aside>
          ))}
        </div>

        <div className="funds-featured__copy">
          <p data-reveal-heading className="property-hero__mark">
            {fundsFeaturedBand.eyebrow}
          </p>
          <p data-reveal-heading className="mt-5 text-sm text-muted">
            {formatFundType(catalogueFeaturedFund.type)}
            <span className="text-subtle"> / {fundSampleStatus}</span>
          </p>
          <h2
            data-reveal-heading
            id="featured-fund-heading"
            className="mt-3 max-w-[10ch] text-[clamp(2.3rem,4.4vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance"
          >
            {catalogueFeaturedFund.name}
          </h2>
          <p data-reveal-item className="mt-4 text-[1.05rem] text-muted">
            {catalogueFeaturedFund.market}
            <span> · {catalogueFeaturedFund.portfolioLabel}</span>
          </p>
          <p data-reveal-item className="mt-6 max-w-[36ch] leading-relaxed text-pretty">
            {catalogueFeaturedFund.propertyCount} sample properties under one allocation, shown with
            the existing sample yield and sample minimum for this demonstration.
          </p>

          <dl data-reveal-item className="funds-featured__figures">
            <div>
              <dt>Sample yield</dt>
              <dd className="tabular-nums">{formatPercent(catalogueFeaturedFund.sampleReturnPct)}</dd>
            </div>
            <div>
              <dt>Sample minimum</dt>
              <dd className="tabular-nums">{formatSampleAmount(sampleFundMinimum)}</dd>
            </div>
          </dl>

          <div data-reveal-item className="mt-8">
            <ButtonLink to={`/funds/${catalogueFeaturedFund.id}`} className="min-h-11 gap-1.5">
              {fundsFeaturedBand.cta}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
