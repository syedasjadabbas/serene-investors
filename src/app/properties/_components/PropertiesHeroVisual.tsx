import { catalogueFeatured } from '@/global/data/properties'
import { withBase } from '@/global/lib/asset'
import { formatPercent, formatSampleAmount, formatStatus } from '@/global/lib/format'
import { fundedShare } from '../_lib/listing'

/** The photo card that rises from the bottom of the properties hero, with a mini listing summary on it. */
export function PropertiesHeroVisual() {
  const property = catalogueFeatured
  const funded = fundedShare(property)

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] bg-sx-ink sm:aspect-[16/9]">
      <img
        src={withBase(property.image)}
        alt={property.imageAlt}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute left-3 top-3 w-[min(300px,calc(100%-1.5rem))] rounded-[20px] bg-white p-4 text-left text-sx-ink sm:left-5 sm:top-5 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sx-ink/45">Sample listing</p>
          <span className="rounded-full bg-sx-ink px-2.5 py-0.5 text-[11px] font-semibold text-sx-mint">{formatStatus(property.status)}</span>
        </div>
        <p className="mt-1.5 font-heading text-lg font-bold leading-tight tracking-[-0.015em]">{property.name}</p>
        <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-[12px] bg-sx-paper px-3 py-2">
            <dt className="text-[11px] text-sx-ink/55">Sample yield</dt>
            <dd className="font-heading font-bold tabular-nums">{formatPercent(property.sampleYieldPct)}</dd>
          </div>
          <div className="rounded-[12px] bg-sx-paper px-3 py-2">
            <dt className="text-[11px] text-sx-ink/55">From</dt>
            <dd className="font-heading font-bold tabular-nums">{formatSampleAmount(property.sampleMinInvestment)}</dd>
          </div>
        </dl>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sx-paper" aria-hidden="true">
          <div className="h-full rounded-full bg-sx-brand" style={{ width: `${funded}%` }} />
        </div>
        <p className="mt-1.5 text-[11px] text-sx-ink/55">{funded}% funded</p>
      </div>
    </div>
  )
}
