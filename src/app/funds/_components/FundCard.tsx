'use client'

import { useRef } from 'react'
import { Link } from '@/global/components/ui/Link'
import { ArrowRight, MapPin } from 'lucide-react'
import type { Fund } from '@/global/types/fund'
import { formatFundType } from '@/global/lib/format'
import { useCardPointerTilt } from '@/global/hooks/useCardPointerTilt'
import { withBase } from '@/global/lib/asset'

type Props = {
  fund: Fund
}

function getFundMetrics(fund: Fund) {
  // Location / Market
  const location = fund.market || 'Selected Portfolios'

  // Col 1: Net Yield
  const netYield = fund.sampleReturnPct ? `${fund.sampleReturnPct.toFixed(1)}%` : '5.8%'

  // Col 2: 3Y Target Return
  const targetReturn = `${((fund.sampleReturnPct || 5.8) * 3.6).toFixed(1)}%`

  // Col 3: Occupancy
  const occupancy = '99%'

  // Funding statistics
  const targetFundingMap: Record<string, number> = {
    'urban-living-fund': 5000000,
    'olive-court-fund': 3500000,
    'quay-mixed-fund': 4200000,
  }

  const targetFunding = targetFundingMap[fund.id] || 4500000
  let fundedPct = 88

  if (fund.id === 'urban-living-fund') {
    fundedPct = 88
  } else if (fund.id === 'olive-court-fund') {
    fundedPct = 94
  } else if (fund.id === 'quay-mixed-fund') {
    fundedPct = 76
  }

  const fundedAmount = Math.round((targetFunding * fundedPct) / 100)
  const fundingFormatted = `£${fundedAmount.toLocaleString('en-GB')} / £${targetFunding.toLocaleString('en-GB')} allocated (${fundedPct}%)`
  const statusPillText = `${fundedPct}% Allocated`
  const minTicket = 'From £500 min ticket'

  return {
    location,
    netYield,
    targetReturn,
    occupancy,
    fundedPct,
    fundingFormatted,
    statusPillText,
    minTicket,
  }
}

export function FundCard({ fund }: Props) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)
  const metrics = getFundMetrics(fund)

  return (
    <article
      ref={cardRef}
      id={fund.id}
      data-fund-id={fund.id}
      data-fund-card
      className="group relative flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-surface/90 p-3 shadow-xs scroll-mt-[calc(var(--header-h)+var(--promo-h)+1.5rem)] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl"
    >
      <Link
        href={`/funds/${fund.id}`}
        aria-label={`${fund.name}, ${metrics.location}, ${fund.propertyCount} sample properties, ${metrics.statusPillText}. View fund.`}
        className="flex flex-col h-full rounded-xl text-inherit no-underline focus-visible:outline-2 focus-visible:outline-primary"
      >
        {/* High-resolution 16:10 aspect ratio image container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-bg-warm">
          <img
            data-fund-card-image
            src={withBase(fund.image)}
            alt={fund.imageAlt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gentle bottom vignette gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />

          {/* Top-Left Badge: Frosted location/market pill */}
          <div className="absolute left-2.5 top-2.5 pointer-events-none z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/[0.08] bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-ink shadow-xs backdrop-blur-md">
              <MapPin size={11} className="text-primary shrink-0" strokeWidth={2.5} />
              <span className="truncate max-w-[130px]">{metrics.location}</span>
            </span>
          </div>

          {/* Top-Right Badge: Live funding status pill with glowing green pulse dot */}
          <div className="absolute right-2.5 top-2.5 pointer-events-none z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-800/15 bg-surface/90 px-2.5 py-1 text-[11px] font-semibold text-emerald-900 shadow-xs backdrop-blur-md font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>{metrics.statusPillText}</span>
            </span>
          </div>
        </div>

        {/* Sleek 4px Funding Progress Bar */}
        <div className="mt-3 space-y-1.5 px-0.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] font-medium text-ink/75">
              {metrics.fundingFormatted}
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-ink/[0.08]">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
              style={{ width: `${Math.min(metrics.fundedPct, 100)}%` }}
            />
          </div>
        </div>

        {/* Card Header & Information */}
        <div className="mt-3 px-0.5">
          <h3 className="text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-primary">
            {fund.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">
            {formatFundType(fund.type)} · {fund.propertyCount} Assets · {fund.portfolioLabel}
          </p>
        </div>

        {/* Institutional 3-Column Split KPI Grid */}
        <div className="my-3 grid grid-cols-3 divide-x divide-ink/[0.08] rounded-xl border border-ink/[0.08] bg-bg-warm/40 py-2.5 text-center">
          <div className="px-1 flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">Net Yield</span>
            <span className="mt-0.5 font-mono text-sm font-bold tabular-nums text-ink">{metrics.netYield}</span>
          </div>
          <div className="px-1 flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">3Y Target Return</span>
            <span className="mt-0.5 font-mono text-sm font-bold tabular-nums text-ink">{metrics.targetReturn}</span>
          </div>
          <div className="px-1 flex flex-col items-center justify-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-ink/50">Occupancy</span>
            <span className="mt-0.5 font-mono text-sm font-bold tabular-nums text-ink">{metrics.occupancy}</span>
          </div>
        </div>

        {/* Card Footer & Micro-Interactions */}
        <div className="mt-auto flex items-center justify-between border-t border-ink/[0.06] pt-2.5 px-0.5">
          <span className="inline-flex items-center rounded-md bg-bg-warm px-2 py-0.5 text-[11px] font-medium text-muted">
            {metrics.minTicket}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink transition-colors duration-300 group-hover:text-primary">
            <span>View fund</span>
            <ArrowRight
              size={14}
              strokeWidth={2}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </span>
        </div>
      </Link>
    </article>
  )
}
