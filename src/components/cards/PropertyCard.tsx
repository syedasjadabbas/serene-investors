import { Link } from 'react-router-dom'
import type { Property } from '@/types'
import { formatPropertyMeta, formatSampleYield, formatStatus } from '@/lib/format'
import { cn } from '@/lib/cn'

type Props = {
  property: Property
  featured?: boolean
}

export function PropertyCard({ property, featured = false }: Props) {
  const location = formatPropertyMeta(property.neighborhood, property.city)
  const status = formatStatus(property.status)

  return (
    <article data-reveal-item className="h-full">
      <Link
        to={`/properties/${property.id}`}
        aria-label={`${property.name}, ${location}, ${status}, sample listing`}
        className="group block h-full overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface transition-transform duration-[var(--duration-med)] ease-[var(--ease-out-quart)] hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <div className="overflow-hidden">
          <img
            data-holding-image
            src={property.image}
            alt={property.imageAlt}
            width={1400}
            height={1750}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover object-[50%_30%] transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>

        <div className="px-4 pt-4 pb-5">
          <p className="text-[length:var(--type-meta)] text-muted">{location}</p>
          <h3
            className={cn(
              'mt-1.5 font-medium tracking-tight',
              featured ? 'text-[1.45rem]' : 'text-[1.3rem]',
            )}
          >
            {property.name}
          </h3>
          <p className="mt-1 text-[length:var(--type-meta)] text-muted">{property.type}</p>
          <div className="mt-3.5 flex flex-wrap items-center gap-2">
            <span className="rounded-pill bg-soft px-2.5 py-1 text-sm font-medium text-soft-ink">
              {formatSampleYield(property.sampleYieldPct)}
            </span>
            <span className="rounded-pill border border-line px-2.5 py-1 text-sm text-ink">
              {status}
            </span>
          </div>
          <p className="mt-2.5 text-sm text-muted transition-colors duration-[var(--duration-fast)] group-hover:text-ink">
            {property.samplePriceLabel}
          </p>
        </div>
      </Link>
    </article>
  )
}
