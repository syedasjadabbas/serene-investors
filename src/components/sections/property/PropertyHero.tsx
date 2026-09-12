import { useRef } from 'react'
import type { Property } from '@/types'
import { formatPropertyMeta, formatStatus } from '@/lib/format'
import { usePropertyHeroReveal } from '@/hooks/usePropertyHeroReveal'

type Props = {
  property: Property
}

export function PropertyHero({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  usePropertyHeroReveal(rootRef)
  const location = formatPropertyMeta(property.neighborhood, property.city)

  return (
    <section
      ref={rootRef}
      id="hero"
      className="overflow-x-clip px-5 pb-12 pt-6 md:px-8 lg:px-10 lg:pb-16"
      aria-labelledby="property-name"
    >
      <div className="mx-auto grid max-w-[var(--container-wide)] items-start gap-8 md:grid-cols-[1.15fr_1fr] md:gap-8 lg:grid-cols-[1.38fr_1fr] lg:gap-14">
        <figure className="m-0 overflow-hidden rounded-[var(--radius-lg)]">
          <img
            data-property-hero-image
            src={property.image}
            alt={property.imageAlt}
            width={1600}
            height={1200}
            loading="eager"
            fetchPriority="high"
            className="aspect-[4/3] h-auto w-full object-cover object-[50%_30%]"
          />
        </figure>

        <div>
          <p
            data-property-hero-copy
            className="inline-block rounded-pill bg-soft px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-soft-ink"
          >
            {formatStatus(property.status)}
          </p>
          <p data-property-hero-copy className="brand-label mt-5 text-muted">
            Sample property
          </p>
          <h1
            data-property-hero-copy
            id="property-name"
            className="mt-3 text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
          >
            {property.name}
          </h1>
          <p data-property-hero-copy className="mt-3 text-[0.95rem] text-muted">
            {location}
          </p>
          <p data-property-hero-copy className="mt-1 text-sm text-muted">
            {property.type}
          </p>
          <p
            data-property-hero-copy
            className="mt-6 max-w-[36ch] text-[0.95rem] leading-relaxed text-ink text-pretty"
          >
            {property.description}
          </p>
        </div>
      </div>
    </section>
  )
}
