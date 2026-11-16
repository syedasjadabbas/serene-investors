'use client'

import Link from 'next/link'
import { PieChart, TrendingUp, Wallet } from 'lucide-react'
import type { Property, PropertyStatus } from '@/global/types/property'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { formatPercent, formatSampleAmount, formatStatus } from '@/global/lib/format'
import { fundedShare } from '../_lib/listing'

const STATUS_TEXT: Record<PropertyStatus, string> = {
  open: 'text-sx-mint',
  funding: 'text-sx-sand',
  funded: 'text-white',
  exited: 'text-sx-muted',
}

/**
 * Listing card: photo across the top, dark status pills top-right, a grey "AREA ✦ TYPE" line, the
 * name, then label/value rows. Every figure comes from the sample data.
 */
export function CatalogueCard({ property }: { property: Property }) {
  const funded = fundedShare(property)
  const rows = [
    { icon: Wallet, label: 'Sample minimum', value: formatSampleAmount(property.sampleMinInvestment) },
    { icon: TrendingUp, label: 'Sample yield', value: formatPercent(property.sampleYieldPct) },
    { icon: PieChart, label: 'Funded', value: `${funded}%` },
  ]

  return (
    <article data-catalogue-card className="group flex w-full">
      <Link
        href={`/properties/${property.id}`}
        aria-label={`${property.name}, ${property.neighborhood}, ${property.city}. ${property.type}, ${formatStatus(property.status)}. View property.`}
        className="flex w-full flex-col overflow-hidden rounded-[20px] bg-white text-sx-ink transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-sx-paper">
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
          <div className="absolute right-3 top-3 flex flex-wrap justify-end gap-1.5 sm:right-4 sm:top-4">
            <span className={cn('rounded-full bg-sx-ink/85 px-3 py-1 text-xs font-semibold backdrop-blur', STATUS_TEXT[property.status])}>
              {formatStatus(property.status)}
            </span>
            <span className="rounded-full bg-sx-ink/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">Sample</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-5 p-5 sm:p-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-sx-ink/60">
              {property.neighborhood}, {property.city} <span aria-hidden="true">✦</span> {property.type}
            </p>
            <h3 className="mt-2 font-heading text-[1.625rem] font-bold leading-tight tracking-[-0.02em]">{property.name}</h3>
          </div>

          <dl className="flex flex-col divide-y divide-sx-ink/10">
            {rows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center justify-between gap-4 py-3 first:pt-0">
                <dt className="flex items-center gap-2.5 text-sm text-sx-ink/60">
                  <Icon size={16} aria-hidden="true" className="text-sx-brand" />
                  {label}
                </dt>
                <dd className="font-heading text-base font-bold tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="h-1.5 w-full overflow-hidden rounded-full bg-sx-paper" aria-hidden="true">
            <div className="h-full rounded-full bg-sx-brand" style={{ width: `${Math.min(funded, 100)}%` }} />
          </div>

          <span className="mt-auto inline-flex items-center justify-between gap-2 text-sm font-semibold">
            View property
            <ArrowCircle tone="dark" size="sm" />
          </span>
        </div>
      </Link>
    </article>
  )
}
