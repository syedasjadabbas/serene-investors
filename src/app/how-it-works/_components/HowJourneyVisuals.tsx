import Link from 'next/link'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { catalogueFeaturedFund, sampleFundMinimum } from '@/global/data/funds'
import { properties } from '@/global/data/properties'
import { storyAssets, storyHoldingThumb } from '@/global/data/story-assets'
import { withBase } from '@/global/lib/asset'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'
import { appDownload } from '../_lib/app'
import { heroVisual } from '../_lib/hero'

// Visuals for the four "Step 0x" rows. Each fills StepRow's rounded visual slot and grows with its content.

function requireCedar() {
  const cedar = properties.find((item) => item.id === 'cedar-court')
  if (!cedar) {
    throw new Error('Missing sample record: cedar-court')
  }
  return cedar
}

const KICKER = 'text-xs font-semibold uppercase tracking-[0.12em]'

export function HowPageVisual({ id }: { id: string }) {
  switch (id) {
    case 'choose':
      return <ChooseVisual />
    case 'invest':
      return <InvestVisual />
    case 'track':
      return <TrackVisual />
    case 'receive':
      return <ReceiveVisual />
    default:
      return null
  }
}

function ChooseVisual() {
  const cedar = requireCedar()
  const fund = catalogueFeaturedFund

  return (
    <div className="relative flex h-full min-h-[340px] flex-col justify-end gap-2 p-3 sm:min-h-[420px] sm:p-4">
      <img
        src={withBase(storyAssets.choose.src)}
        alt={storyAssets.choose.alt}
        width={1400}
        height={1867}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
      />

      <Link
        href={`/funds/${fund.id}`}
        aria-label={`View sample fund ${fund.name}`}
        className="group relative flex items-center gap-3 rounded-[16px] bg-white p-2.5 pr-3 text-sx-ink sm:absolute sm:right-4 sm:top-4 sm:w-[280px]"
      >
        <img src={withBase(fund.image)} alt="" width={160} height={160} loading="lazy" className="size-14 shrink-0 rounded-[10px] object-cover" />
        <span className="min-w-0 flex-1">
          <span className={`${KICKER} block text-sx-brand`}>Sample fund</span>
          <span className="block truncate font-heading font-bold">{fund.name}</span>
          <span className="block truncate text-xs text-sx-ink/60">
            {fund.market} · {fund.propertyCount} sample properties
          </span>
        </span>
        <ArrowCircle tone="dark" size="sm" />
      </Link>

      <Link
        href={`/properties/${cedar.id}`}
        aria-label={`View sample listing for ${cedar.name}`}
        className="group relative flex items-center justify-between gap-3 rounded-[16px] bg-white p-4 text-sx-ink sm:w-[300px]"
      >
        <span className="min-w-0">
          <span className={`${KICKER} block text-sx-brand`}>Sample property</span>
          <span className="mt-1 block font-heading text-lg font-bold">{cedar.name}</span>
          <span className="block text-sm text-sx-ink/60">
            {cedar.neighborhood} · Sample yield {formatPercent(cedar.sampleYieldPct)}
          </span>
        </span>
        <ArrowCircle tone="brand" />
      </Link>
    </div>
  )
}

function InvestVisual() {
  const cedar = requireCedar()
  const fund = catalogueFeaturedFund

  return (
    <div className="flex h-full min-h-[340px] items-center justify-center bg-sx-forest p-4 sm:p-8">
      <div className="w-full max-w-[380px] rounded-[20px] bg-white p-5 text-sx-ink sm:p-6">
        <p className={`${KICKER} text-sx-ink/50`}>Sample allocation</p>
        <p className="mt-2 font-heading text-5xl font-bold tabular-nums tracking-[-0.035em]">
          {formatSampleAmount(cedar.sampleMinInvestment)}
        </p>
        <p className="mt-1 text-sm text-sx-ink/55">Investment amount</p>
        <div className="mt-5 h-2 rounded-full bg-sx-paper" aria-hidden="true">
          <div className="h-2 w-full rounded-full bg-sx-brand" />
        </div>

        <div className="mt-5 flex items-center gap-3 rounded-[14px] bg-sx-paper p-2.5">
          <img src={withBase(storyAssets.choose.src)} alt="" width={160} height={120} loading="lazy" className="h-14 w-16 shrink-0 rounded-[10px] object-cover" />
          <div className="min-w-0">
            <p className="text-xs text-sx-ink/50">Selected sample</p>
            <Link href={`/properties/${cedar.id}`} className="font-heading font-bold hover:text-sx-brand">
              {cedar.name}
            </Link>
          </div>
        </div>

        <p className="mt-4 text-sm text-sx-ink/60">
          Or allocate to a fund:{' '}
          <Link href={`/funds/${fund.id}`} className="font-semibold text-sx-ink underline-offset-4 hover:underline">
            {fund.name}, from {formatSampleAmount(sampleFundMinimum)}
          </Link>
        </p>

        <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-sx-ink/10 pt-4">
          <div>
            <dt className="text-xs text-sx-ink/55">Sample yield</dt>
            <dd className="mt-1 font-heading text-xl font-bold">{formatPercent(cedar.sampleYieldPct)}</dd>
          </div>
          <div>
            <dt className="text-xs text-sx-ink/55">Investment amount</dt>
            <dd className="mt-1 font-heading text-xl font-bold">{formatSampleAmount(cedar.sampleMinInvestment)}</dd>
          </div>
        </dl>
        <p className="mt-3 text-xs text-sx-ink/45">Illustrative sample only</p>
      </div>
    </div>
  )
}

function TrackVisual() {
  const { brand, holdings } = appDownload

  return (
    <div className="relative flex h-full min-h-[340px] items-center justify-center bg-sx-sand p-4 sm:p-8">
      <div className="w-full max-w-[290px] rounded-[2.25rem] bg-sx-ink p-2.5">
        <div className="rounded-[1.75rem] bg-white p-4 text-sx-ink">
          <div className="mx-auto h-1.5 w-16 rounded-full bg-sx-ink/80" aria-hidden="true" />
          <p className={`${KICKER} mt-4 text-sx-ink/45`}>{brand}</p>
          <p className="mt-1 font-heading text-xl font-bold">{holdings.title}</p>
          <p className="text-sm text-sx-ink/55">{holdings.countLabel}</p>
          <div className="mt-3 rounded-[14px] bg-sx-forest p-3 text-white">
            <p className="text-xs text-white/60">{holdings.valueLabel}</p>
            <p className="font-heading text-2xl font-bold tabular-nums">{holdings.value}</p>
          </div>
          <ul className="mt-2">
            {holdings.holdings.map((holding) => {
              const thumb = storyHoldingThumb(holding.id)
              return (
                <li key={holding.id} className="border-b border-sx-ink/10 last:border-b-0">
                  <Link href={`/properties/${holding.id}`} className="group flex items-center gap-3 py-2.5">
                    <img src={withBase(thumb.src)} alt="" width={72} height={54} loading="lazy" className="h-10 w-12 shrink-0 rounded-[8px] object-cover" />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold group-hover:text-sx-brand">{holding.name}</span>
                      <span className="block truncate text-xs text-sx-ink/55">{holding.meta}</span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

function ReceiveVisual() {
  const cedar = requireCedar()
  const receipt = heroVisual.receipt

  return (
    <div className="relative flex h-full min-h-[340px] flex-col items-end justify-end p-3 sm:min-h-[420px] sm:p-4">
      <img
        src={withBase(storyAssets.receive.src)}
        alt={storyAssets.receive.alt}
        width={1400}
        height={1867}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Link
        href={`/properties/${cedar.id}`}
        aria-label={`Sample distribution for ${cedar.name}. View property.`}
        className="group relative flex w-full flex-col gap-1 rounded-[16px] bg-white p-5 text-sx-ink sm:w-[300px]"
      >
        <span className="flex items-center justify-between gap-3">
          <span className={`${KICKER} text-sx-brand`}>{receipt.title}</span>
          <ArrowCircle tone="dark" size="sm" />
        </span>
        <span className="font-semibold">{receipt.detail}</span>
        <span className="mt-2 font-heading text-3xl font-bold tabular-nums tracking-[-0.03em]">{receipt.amount}</span>
        <span className="text-sm text-sx-ink/55">Sample distribution · {receipt.sampleLabel}</span>
      </Link>
    </div>
  )
}
