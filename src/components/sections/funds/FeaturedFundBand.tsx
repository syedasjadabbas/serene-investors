'use client'

import { useRef } from 'react'
import Link from 'next/link'
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
import { withBase } from '@/lib/asset'

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
    <section ref={rootRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-10 bg-bg-warm" aria-labelledby="featured-fund-heading">
      <div className="mx-auto max-w-[var(--container-wide)] grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center lg:gap-16">
        <div data-depth-stage className="relative">
          <figure className="relative isolate before:hidden lg:before:block lg:before:absolute lg:before:inset-[9%_-7%_-9%_8%] lg:before:z-0 lg:before:rounded-2xl lg:before:bg-surface m-0">
            <Link
              href={`/funds/${catalogueFeaturedFund.id}`}
              className="relative z-[1] block overflow-hidden rounded-2xl group"
              aria-label={`View sample fund ${catalogueFeaturedFund.name}`}
            >
              <img
                data-featured-fund-image
                src={withBase(catalogueFeaturedFund.image)}
                alt={catalogueFeaturedFund.imageAlt}
                width={1400}
                height={1750}
                loading="lazy"
                decoding="async"
                className="block w-full aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[36rem] object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </figure>

          {layers.map((fund, index) => (
            <aside
              key={fund.id}
              data-funds-layer={index}
              className={`relative z-10 w-[min(18.5rem,100%)] mt-4 lg:mt-0 lg:absolute lg:w-[17.5rem] overflow-hidden rounded-2xl bg-surface shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300 border border-black/5 ${
                index === 0 ? 'lg:left-[-1.25rem] lg:bottom-10' : 'lg:right-6 lg:top-9'
              }`}
            >
              <img src={withBase(fund.image)} alt={fund.imageAlt} width={720} height={540} loading="lazy" className="block w-full h-[7.5rem] object-cover object-[50%_40%]" />
              <div className="p-4 sm:p-5 text-ink">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample fund</p>
                <p className="mt-2 text-lg font-medium tracking-tight text-ink">{fund.name}</p>
                <p className="mt-1 text-sm text-muted">
                  {fund.market} · {fund.propertyCount} sample properties
                </p>
                <Link
                  href={`/funds/${fund.id}`}
                  className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink hover:text-primary transition-colors"
                >
                  View fund
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </aside>
          ))}
        </div>

        <div className="pt-2">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            {fundsFeaturedBand.eyebrow}
          </p>
          <p data-reveal-heading className="mt-5 text-sm text-muted">
            {formatFundType(catalogueFeaturedFund.type)}
            <span className="text-subtle"> / {fundSampleStatus}</span>
          </p>
          <h2
            data-reveal-heading
            id="featured-fund-heading"
            className="mt-3 max-w-[10ch] text-[clamp(2.3rem,4.4vw,3.8rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance text-ink"
          >
            {catalogueFeaturedFund.name}
          </h2>
          <p data-reveal-item className="mt-4 text-[1.05rem] text-muted">
            {catalogueFeaturedFund.market}
            <span> · {catalogueFeaturedFund.portfolioLabel}</span>
          </p>
          <p data-reveal-item className="mt-6 max-w-[36ch] leading-relaxed text-pretty text-muted">
            {catalogueFeaturedFund.propertyCount} sample properties under one allocation, shown with
            the existing sample yield and sample minimum for this demonstration.
          </p>

          <dl data-reveal-item className="grid grid-cols-2 gap-5 mt-7 pt-6 border-t border-line">
            <div>
              <dt className="text-xs text-muted">Sample yield</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink tabular-nums">{formatPercent(catalogueFeaturedFund.sampleReturnPct)}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Sample minimum</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight text-ink tabular-nums">{formatSampleAmount(sampleFundMinimum)}</dd>
            </div>
          </dl>

          <div data-reveal-item className="mt-8">
            <ButtonLink href={`/funds/${catalogueFeaturedFund.id}`} className="min-h-11 gap-1.5">
              {fundsFeaturedBand.cta}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

