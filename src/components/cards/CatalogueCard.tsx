import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Property } from '@/types'
import { formatPercent, formatPropertyMeta, formatSampleAmount, formatStatus } from '@/lib/format'
import { useCardPointerTilt } from '@/hooks/useCardPointerTilt'

type Props = {
  property: Property
}

export function CatalogueCard({ property }: Props) {
  const cardRef = useRef<HTMLElement>(null)
  useCardPointerTilt(cardRef)
  const location = formatPropertyMeta(property.neighborhood, property.city)
  const status = formatStatus(property.status)

  return (
    <article ref={cardRef} data-catalogue-card className="catalogue-card">
      <Link
        to={`/properties/${property.id}`}
        aria-label={`${property.name}, ${location}, ${property.type}, ${status}, sample listing. View property.`}
        className="catalogue-card__link"
      >
        <div className="catalogue-card__media">
          <div className="catalogue-card__image">
            <img
              data-catalogue-image
              src={property.image}
              alt={property.imageAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="catalogue-card__badge">
            {property.type}
            <span> / {status}</span>
          </p>
        </div>

        <div className="catalogue-card__body">
          <h3>{property.name}</h3>
          <p className="catalogue-card__place">{location}</p>
          <p className="catalogue-card__figures">
            <span>Sample yield {formatPercent(property.sampleYieldPct)}</span>
            <span>Sample minimum {formatSampleAmount(property.sampleMinInvestment)}</span>
          </p>
          <p className="catalogue-card__action">
            View property
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </p>
        </div>
      </Link>
    </article>
  )
}
