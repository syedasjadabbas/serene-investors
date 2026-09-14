import { useRef } from 'react'
import { Link } from 'react-router-dom'
import type { Property } from '@/types'
import { properties } from '@/data'
import { formatPropertyMeta, formatSampleYield } from '@/lib/format'
import { useRelatedProperties } from '@/hooks/useRelatedProperties'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyRelated({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const related = useRelatedProperties(property, properties)
  useSectionReveal(rootRef)

  if (related.length === 0) return null

  return (
    <section ref={rootRef} className="property-related" aria-labelledby="related-heading">
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="related-heading"
          className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
        >
          Other sample listings.
        </h2>

        <div className="property-related__grid">
          {related.map((item) => {
            const location = formatPropertyMeta(item.neighborhood, item.city)

            return (
              <article key={item.id} data-reveal-item>
                <Link
                  to={`/properties/${item.id}`}
                  className="property-related__card"
                  aria-label={`${item.name}, ${location}. View property.`}
                >
                  <div className="property-related__media">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      width={900}
                      height={1125}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <p className="mt-4 text-sm text-muted">{item.type}</p>
                  <h3 className="mt-1 text-xl font-medium tracking-tight">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{location}</p>
                  <p className="mt-3 text-sm">
                    {formatSampleYield(item.sampleYieldPct)}
                    <span className="text-muted"> / {item.samplePriceLabel}</span>
                  </p>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
