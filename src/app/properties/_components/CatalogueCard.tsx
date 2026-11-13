'use client'

import Link from 'next/link'
import { MapPin } from 'lucide-react'
import type { Property } from '@/global/types/property'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { formatPropertyMeta } from '@/global/lib/format'
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
  const location = formatPropertyMeta(property.neighborhood, property.city)
  const metrics = getPropertyMetrics(property)
  const kpis = [
    { label: 'Net yield', value: metrics.netYield },
    { label: '3Y target', value: metrics.targetReturn },
    { label: 'Occupancy', value: metrics.occupancy },
  ]

  return (
    <article data-catalogue-card className="group flex w-full">
      <Link
        href={`/properties/${property.id}`}
        aria-label={`${property.name}, ${location}, ${property.type}, ${metrics.statusPillText}. View property.`}
        className="flex w-full flex-col rounded-[20px] bg-white p-3 text-sx-ink transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
      >
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[14px] bg-sx-paper">
          <img
            data-catalogue-image
            src={withBase(property.image)}
            alt={property.imageAlt}
            width={1600}
            height={1100}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 inline-flex max-w-[58%] items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sx-ink">
            <MapPin size={12} strokeWidth={2.5} aria-hidden="true" className="shrink-0 text-sx-brand" />
            <span className="truncate">{location}</span>
          </span>
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-sx-ink px-3 py-1 text-xs font-semibold text-white">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-sx-mint" />
            {metrics.statusPillText}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 px-2 pb-2 pt-4">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-[-0.02em]">{property.name}</h3>
            <p className="mt-1 text-sm text-sx-ink/60">
              {property.type} · {property.beds ? `${property.beds} bed · ` : ''}
              {property.areaLabel}
            </p>
          </div>

          <div>
            <p className="text-xs tabular-nums text-sx-ink/60">{metrics.fundingFormatted}</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sx-paper">
              <div
                className="h-full rounded-full bg-sx-brand transition-[width] duration-700 ease-out"
                style={{ width: `${Math.min(metrics.fundedPct, 100)}%` }}
              />
            </div>
          </div>

          <dl className="grid grid-cols-3 rounded-[14px] bg-sx-paper py-3 text-center">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="flex flex-col-reverse gap-0.5 px-1">
                <dt className="text-[11px] font-medium text-sx-ink/55">{kpi.label}</dt>
                <dd className="font-heading text-base font-bold tabular-nums tracking-[-0.01em]">{kpi.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-auto flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-sx-ink/60">{metrics.minTicket}</span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold">
              View property
              <ArrowCircle tone="dark" size="sm" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
