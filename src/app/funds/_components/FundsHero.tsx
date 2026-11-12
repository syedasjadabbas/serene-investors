'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { catalogueFeaturedFund, fundsIntro, sampleFundMinimum } from '@/global/data/funds'
import { fundStageAssets } from '@/global/data/fund-stage-assets'
import { formatSampleAmount } from '@/global/lib/format'
import { useDepthParallax } from '@/global/hooks/useDepthParallax'
import { usePointerTilt } from '@/global/hooks/usePointerTilt'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'

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
    <section ref={rootRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-10" aria-labelledby="funds-heading">
      <div className="mx-auto max-w-[var(--container-wide)] grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-end lg:gap-16">
        <div className="flex flex-col justify-center">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Illustrative sample
          </p>
          <h1
            data-reveal-heading
            id="funds-heading"
            className="mt-4 max-w-[12ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
          >
            {fundsIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {fundsIntro.body}
          </p>
          <div data-reveal-heading className="w-14 h-[1px] mt-9 bg-line" />
        </div>

        <div data-reveal-item data-depth-stage className="relative min-h-[22rem] lg:min-h-[34rem]">
          <figure className="m-0 overflow-hidden rounded-2xl bg-bg-warm">
            <img
              data-funds-hero-image
              data-funds-hero-field
              src={withBase(fundStageAssets.field.src)}
              alt={fundStageAssets.field.alt}
              width={1600}
              height={900}
              loading="eager"
              fetchPriority="high"
              className="block w-full min-h-[22rem] lg:min-h-[34rem] aspect-[16/10] object-cover object-[50%_40%]"
            />
          </figure>

          <aside
            data-funds-hero-card
            className="group block relative z-10 w-[min(20.5rem,100%)] -mt-16 mr-4 ml-auto md:absolute md:right-5 md:bottom-5 md:m-0 lg:right-8 lg:bottom-8 overflow-hidden rounded-2xl bg-surface shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300 border border-black/5"
          >
            <img
              data-funds-hero-image
              src={withBase(catalogueFeaturedFund.image)}
              alt={catalogueFeaturedFund.imageAlt}
              width={900}
              height={675}
              loading="eager"
              className="block w-full h-[8.5rem] object-cover object-[50%_40%]"
            />
            <div className="p-4 sm:p-5 text-ink">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample fund</p>
              <p className="mt-2 text-lg font-medium tracking-tight text-ink group-hover:text-primary transition-colors">{catalogueFeaturedFund.name}</p>
              <p className="mt-1 text-sm text-muted">
                {catalogueFeaturedFund.market} · {catalogueFeaturedFund.propertyCount} sample
                properties
              </p>
              <p className="mt-4 flex items-baseline justify-between gap-4 text-sm">
                <span className="text-muted">Sample minimum</span>
                <span className="font-semibold tabular-nums text-ink">
                  {formatSampleAmount(sampleFundMinimum)}
                </span>
              </p>
              <Link
                href={`/funds/${catalogueFeaturedFund.id}`}
                className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary transition-colors"
              >
                View fund
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

