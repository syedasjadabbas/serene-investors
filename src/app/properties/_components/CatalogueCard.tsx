'use client'

import { useRef } from 'react'
import { Link } from '@/global/components/ui/Link'
import { ArrowRight, MapPin } from 'lucide-react'
import type { Property } from '@/global/types/property'
import { formatPropertyMeta } from '@/global/lib/format'
import { useCardPointerTilt } from '@/global/hooks/useCardPointerTilt'
import { withBase } from '@/global/lib/asset'

type Props = {
  property: Property
}

function getPropertyMetrics(property: Property) {
  // Col 1: Net Yield
  const netYield =
    property.id === 'courtyard-residences'
      ? '6.8%'
      : property.sampleNetYieldPct
        ? `${property.sampleNetYieldPct.toFixed(1)}%`
        : property.sampleYieldPct
          ? `${property.sampleYieldPct.toFixed(1)}%`
          : '6.8%'

  // Col 2: 3Y Target Return
  const targetReturn =
    property.id === 'courtyard-residences'
      ? '24.5%'
      : `${((property.sampleNetYieldPct || property.sampleYieldPct || 6.5) * 3.4).toFixed(1)}%`

  // Col 3: Occupancy
  const occupancy = property.status === 'exited' ? '100%' : '98%'

  // Funding statistics
  const targetFundingMap: Record<string, number> = {
    'courtyard-residences': 1500000,
    'cedar-court': 1200000,
    'pines-loft': 850000,
    'marble-house': 2100000,
    'linden-house': 1800000,
    'copper-yard': 1400000,
    'kiln-yard': 1100000,
    'azure-horizon-villa': 2400000,
    'the-glass-pavilion': 1950000,
  }

  const targetFunding = targetFundingMap[property.id] || 1500000
  let fundedPct = property.fundedPct ?? (property.status === 'funded' || property.status === 'exited' ? 100 : 92)
  let fundedAmount = Math.round((targetFunding * fundedPct) / 100)

  if (property.id === 'courtyard-residences') {
    fundedPct = 92
    fundedAmount = 1420000
  }

  const fundingFormatted = `£${fundedAmount.toLocaleString('en-GB')} / £${targetFunding.toLocaleString('en-GB')} funded (${fundedPct}%)`

  const statusPillText =
    fundedPct === 100
      ? 'Funded'
      : property.status === 'exited'
        ? 'Exited'
        : `${fundedPct}% Funded`

  const minTicket =
    property.id === 'courtyard-residences'
      ? 'From £500 min ticket'
      : `From £${(property.sampleMinInvestment && property.sampleMinInvestment > 500 ? Math.round(property.sampleMinInvestment / 10) : 500).toLocaleString('en-GB')} min ticket`

  return {
    netYield,
    targetReturn,
    occupancy,
    fundedPct,
    fundingFormatted,
    statusPillText,
    minTicket,
  }
}

export function CatalogueCard({ property }: Props) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)
  const location = formatPropertyMeta(property.neighborhood, property.city)
  const metrics = getPropertyMetrics(property)

  return (
    <article
      ref={cardRef}
      data-catalogue-card
      className="group relative flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-surface/90 p-3 shadow-xs transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-xl"
    >
      <Link
        href={`/properties/${property.id}`}
        aria-label={`${property.name}, ${location}, ${property.type}, ${metrics.statusPillText}. View property.`}
        className="flex flex-col h-full rounded-xl text-inherit no-underline focus-visible:outline-2 focus-visible:outline-primary"
      >
        {/* High-resolution 16:10 aspect ratio image container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-bg-warm">
          <img
            data-catalogue-image
            src={withBase(property.image)}
            alt={property.imageAlt}
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gentle bottom vignette gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />

          {/* Top-Left Badge: Frosted location pill */}
          <div className="absolute left-2.5 top-2.5 pointer-events-none z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/[0.08] bg-surface/90 px-2.5 py-1 text-[11px] font-medium text-ink shadow-xs backdrop-blur-md">
              <MapPin size={11} className="text-primary shrink-0" strokeWidth={2.5} />
              <span className="truncate max-w-[130px]">{location}</span>
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
            {property.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">
            {property.type} · {property.beds ? `${property.beds} Bed · ` : ''}{property.areaLabel}
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
            <span>View property</span>
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
