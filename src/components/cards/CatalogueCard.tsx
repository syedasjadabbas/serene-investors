import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { formatPropertyMeta, formatSampleYield, formatStatus } from '@/lib/format'

type Props = {
  property: Property
}

export function CatalogueCard({ property }: Props) {
  const location = formatPropertyMeta(property.neighborhood, property.city)
  const status = formatStatus(property.status)

  return (
    <article data-reveal-item>
      <Link
        to={`/properties/${property.id}`}
        aria-label={`${property.name}, ${location}, ${property.type}, ${status}, sample listing. View property.`}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-[var(--radius-md)]">
          <img
            src={property.image}
            alt={property.imageAlt}
            width={1400}
            height={1750}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-[50%_30%] transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <p className="absolute left-3 top-3 rounded-pill bg-surface px-2.5 py-1 text-[11px] font-medium text-ink">
            {status}
          </p>
        </div>

        <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted">{property.type}</p>
        <h3 className="mt-1 text-xl font-medium tracking-tight">{property.name}</h3>
        <p className="mt-1 text-sm text-muted">{location}</p>
        <p className="mt-3 text-sm text-ink">
          {formatSampleYield(property.sampleYieldPct)}
          <span className="text-muted"> · {property.samplePriceLabel}</span>
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-[var(--duration-fast)] group-hover:text-primary">
          View property
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </p>
      </Link>
    </article>
  )
}
