import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { Fund } from '@/types'
import { ButtonLink } from '@/components/ui/Button'
import { fundSampleStatus, sampleFundMinimum } from '@/data'
import { formatFundType, formatPercent, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  fund: Fund
}

export function FundHero({ fund }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { heading: '[data-fund-hero-copy]', media: '[data-fund-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-fund-hero-image]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.6 }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-fund-hero-image]', yPercent: 6 }])

  return (
    <section ref={rootRef} id="hero" className="fund-hero" aria-labelledby="fund-name">
      <figure className="fund-hero__media m-0" data-depth-stage>
        <img
          data-fund-hero-image
          src={fund.image}
          alt={fund.imageAlt}
          width={1600}
          height={2000}
          loading="eager"
          fetchPriority="high"
        />
      </figure>

      <div className="fund-hero__copy">
        <p data-fund-hero-copy className="property-hero__mark">
          Sample fund
        </p>
        <p data-fund-hero-copy className="mt-5 text-sm text-muted">
          {formatFundType(fund.type)}
          <span className="text-subtle"> / {fundSampleStatus}</span>
        </p>
        <h1
          data-fund-hero-copy
          id="fund-name"
          className="mt-2 max-w-[12ch] text-[clamp(2.4rem,5vw,4.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance"
        >
          {fund.name}
        </h1>
        <p data-fund-hero-copy className="mt-3 text-[1.05rem] text-muted">
          {fund.market}
          <span> · {fund.portfolioLabel}</span>
        </p>

        <dl data-fund-hero-copy className="fund-hero__figures">
          <div>
            <dt>Sample yield</dt>
            <dd className="tabular-nums">{formatPercent(fund.sampleReturnPct)}</dd>
          </div>
          <div>
            <dt>Sample minimum</dt>
            <dd className="tabular-nums">{formatSampleAmount(sampleFundMinimum)}</dd>
          </div>
        </dl>

        <div data-fund-hero-copy className="fund-hero__actions">
          <ButtonLink
            to={`/get-started?intent=fund&id=${fund.id}`}
            className="min-h-11 w-full gap-1.5 sm:w-auto"
          >
            Continue with this fund
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/funds" variant="ghost" className="min-h-11 w-full sm:w-auto">
            Explore funds
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
