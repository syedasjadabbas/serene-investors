'use client'

import { Link } from '@/global/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { appDownload } from '../_lib/app'
import { catalogueFeaturedFund, sampleFundMinimum } from '@/global/data/funds'
import { heroVisual } from '../_lib/hero'
import { properties } from '@/global/data/properties'
import { storyAssets, storyHoldingThumb } from '@/global/data/story-assets'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'
import { withBase } from '@/global/lib/asset'

function requireCedar() {
  const cedar = properties.find((item) => item.id === 'cedar-court')
  if (!cedar) {
    throw new Error('Missing sample record: cedar-court')
  }
  return cedar
}

export function HowPageVisual({ id }: { id: string }) {
  switch (id) {
    case 'choose':
      return <HowPageChooseVisual />
    case 'invest':
      return <HowPageInvestVisual />
    case 'track':
      return <HowPageTrackVisual />
    case 'receive':
      return <HowPageReceiveVisual />
    default:
      return null
  }
}

export function HowPageChooseVisual() {
  const cedar = requireCedar()
  const fund = catalogueFeaturedFund

  return (
    <div className="relative min-h-[22rem] lg:min-h-[32rem]">
      <img
        data-how-choose-image
        data-depth="back"
        src={withBase(storyAssets.choose.src)}
        alt={storyAssets.choose.alt}
        width={1400}
        height={1867}
        className="block w-full min-h-[22rem] md:min-h-[28rem] aspect-[4/5] md:aspect-[5/4] object-cover object-[50%_28%] rounded-2xl"
      />

      <Link
        href={`/properties/${cedar.id}`}
        className="group block mt-4 lg:mt-0 lg:absolute lg:left-5 lg:bottom-5 z-10 lg:w-[min(18.5rem,calc(100%-2.5rem))] p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300 text-ink"
        data-depth="front"
        aria-label={`View sample listing for ${cedar.name}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample property</p>
        <p className="mt-1 text-lg font-semibold tracking-tight text-ink group-hover:text-primary transition-colors">{cedar.name}</p>
        <p className="mt-0.5 text-sm text-muted">{cedar.neighborhood}</p>
        <p className="mt-2 text-sm text-muted">
          Sample yield {formatPercent(cedar.sampleYieldPct)}
          <span> · From {formatSampleAmount(cedar.sampleMinInvestment)}</span>
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary transition-colors">
          View property
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
        </span>
      </Link>

      <Link
        href={`/funds/${fund.id}`}
        className="group grid grid-cols-[7.5rem_minmax(0,1fr)] items-stretch mt-4 lg:mt-0 lg:absolute lg:top-6 lg:right-5 z-10 lg:w-[min(19rem,calc(100%-3rem))] overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300 text-ink"
        data-depth="front"
        aria-label={`View sample fund ${fund.name}`}
      >
        <img src={withBase(fund.image)} alt="" width={640} height={400} className="block w-full h-full min-h-[7.5rem] object-cover" />
        <div className="p-4 text-ink">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample fund</p>
          <p className="mt-1 text-base font-semibold tracking-tight text-ink group-hover:text-primary transition-colors">{fund.name}</p>
          <p className="mt-0.5 text-xs text-muted">
            {fund.market} · {fund.propertyCount} sample properties
          </p>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-ink group-hover:text-primary transition-colors">
            View fund
            <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </div>
  )
}

export function HowPageInvestVisual() {
  const cedar = requireCedar()
  const fund = catalogueFeaturedFund

  return (
    <article className="p-6 sm:p-7 rounded-2xl bg-surface border border-black/5 shadow-xl" data-depth="mid">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample allocation</p>
      <p
        data-how-amount
        data-how-amount-target={cedar.sampleMinInvestment}
        className="mt-3 text-[clamp(2.6rem,5vw,3.8rem)] font-semibold tracking-tight leading-none text-ink tabular-nums"
      >
        {formatSampleAmount(cedar.sampleMinInvestment)}
      </p>
      <p className="mt-1.5 text-sm text-muted">Investment amount</p>

      <div className="h-1 mt-6 overflow-hidden rounded-full bg-soft" aria-hidden="true">
        <span data-how-alloc className="block h-full w-full bg-primary origin-left" />
      </div>

      <div data-how-invest-bit className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 items-center mt-6 p-3 rounded-xl bg-soft/50 border border-black/5">
        <img src={withBase(storyAssets.choose.src)} alt="" width={160} height={120} className="block w-full h-[4.25rem] object-cover rounded-lg" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Selected sample</p>
          <p className="mt-1 text-base font-semibold tracking-tight text-ink">{cedar.name}</p>
          <Link href={`/properties/${cedar.id}`} className="group inline-flex items-center gap-1.5 min-h-[2rem] mt-1 text-sm font-medium text-ink hover:text-primary transition-colors">
            View property
            <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <p data-how-invest-bit className="mt-4 text-sm leading-relaxed text-muted">
        Or allocate to a fund:{' '}
        <Link href={`/funds/${fund.id}`} className="font-medium text-ink hover:underline underline-offset-4">
          {fund.name}, from {formatSampleAmount(sampleFundMinimum)}
        </Link>
      </p>

      <dl data-how-invest-bit className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-line">
        <div>
          <dt className="text-xs text-muted">Sample yield</dt>
          <dd className="mt-1 text-xl font-semibold tracking-tight text-ink">{formatPercent(cedar.sampleYieldPct)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted">Investment amount</dt>
          <dd className="mt-1 text-xl font-semibold tracking-tight text-ink">{formatSampleAmount(cedar.sampleMinInvestment)}</dd>
        </div>
      </dl>
      <p data-how-invest-bit className="mt-4 text-xs text-muted">
        Illustrative sample only
      </p>
    </article>
  )
}

export function HowPageTrackVisual() {
  const { brand, holdings } = appDownload
  const cedar = requireCedar()

  return (
    <div className="relative grid gap-4 lg:min-h-[36rem]">
      <article className="w-[min(20.5rem,100%)] mx-auto lg:mx-0 bg-surface rounded-[2.5rem] p-3 shadow-2xl border border-black/10" data-depth="mid" data-float-layer="phone">
        <div className="rounded-[2rem] bg-surface text-ink overflow-hidden border border-black/5 p-4 sm:p-5">
          <div className="mx-auto h-4 w-24 rounded-full bg-black/80" />
          <p className="mt-4 text-[0.6875rem] uppercase tracking-[0.14em] text-muted">{brand}</p>
          <p className="mt-2 text-xl font-semibold tracking-tight text-ink">{holdings.title}</p>
          <p className="mt-1 text-sm text-muted">{holdings.countLabel}</p>
          <p className="mt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-muted">{holdings.valueLabel}</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight text-ink tabular-nums">{holdings.value}</p>
          <ul className="mt-4 border-t border-line">
            {holdings.holdings.map((holding) => {
              const thumb = storyHoldingThumb(holding.id)
              return (
                <li key={holding.id} className="border-b border-line">
                  <Link href={`/properties/${holding.id}`} className="group grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 items-center py-2.5">
                    <img src={withBase(thumb.src)} alt="" width={72} height={54} className="block w-full h-11 object-cover rounded-md" />
                    <div>
                      <p className="text-sm font-medium text-ink group-hover:text-primary transition-colors">{holding.name}</p>
                      <p className="text-xs text-muted">{holding.meta}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </article>

      <aside
        className="mt-4 lg:mt-0 lg:absolute lg:right-0 lg:top-6 z-10 w-[min(16.5rem,100%)] p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300"
        data-depth="front"
        data-float-layer="card"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample portfolio value</p>
        <p className="mt-2 text-2xl font-semibold tracking-tight text-ink tabular-nums">{holdings.value}</p>
        <p className="mt-1 text-sm text-muted">{holdings.countLabel}</p>
      </aside>

      <Link
        href={`/properties/${cedar.id}`}
        className="group mt-4 lg:mt-0 lg:absolute lg:right-4 lg:bottom-10 z-10 w-[min(16.5rem,100%)] p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300"
        data-depth="front"
        data-float-layer="card"
        aria-label={`View sample listing for ${cedar.name}`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted group-hover:text-primary transition-colors">{cedar.name}</p>
        <p className="mt-1 text-sm text-muted">
          Sample yield {formatPercent(cedar.sampleYieldPct)}
        </p>
      </Link>
    </div>
  )
}

export function HowPageReceiveVisual() {
  const cedar = requireCedar()
  const receipt = heroVisual.receipt

  return (
    <div className="relative min-h-[22rem]">
      <img
        data-depth="back"
        src={withBase(storyAssets.receive.src)}
        alt={storyAssets.receive.alt}
        width={1400}
        height={1867}
        className="block w-full min-h-[22rem] md:min-h-[28rem] aspect-[4/5] md:aspect-[5/4] object-cover rounded-2xl"
      />
      <Link
        href={`/properties/${cedar.id}`}
        className="group block w-[min(18.5rem,100%)] -mt-16 ml-auto lg:absolute lg:right-5 lg:bottom-6 lg:m-0 p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300 text-ink"
        data-how-receipt
        data-depth="front"
        aria-label={`Sample distribution for ${cedar.name}. View property.`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{receipt.title}</p>
        <p className="mt-2 text-base font-semibold tracking-tight text-ink group-hover:text-primary transition-colors">{receipt.detail}</p>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-ink tabular-nums">{receipt.amount}</p>
        <p className="mt-1 text-sm text-muted">Sample distribution</p>
        <p className="mt-2 text-xs text-muted">{receipt.sampleLabel} monthly figure</p>
      </Link>
    </div>
  )
}

