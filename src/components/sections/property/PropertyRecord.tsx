import { useRef } from 'react'
import type { Property } from '@/types'
import { formatPropertyMeta } from '@/lib/format'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyRecord({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef)
  const location = formatPropertyMeta(property.neighborhood, property.city)
  const record = property.documentation

  return (
    <section ref={rootRef} className="property-place" aria-labelledby="place-heading">
      <div className="property-place__panel mx-auto max-w-[var(--container-wide)]">
        <div>
          <h2
            data-reveal-heading
            id="place-heading"
            className="text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {property.city}
          </h2>
          <p data-reveal-item className="mt-4 text-xl font-medium tracking-tight">
            {property.neighborhood}
          </p>
          <p data-reveal-item className="mt-6 max-w-[36ch] text-[1.05rem] leading-relaxed text-pretty">
            {property.description}
          </p>
        </div>

        <dl className="property-place__facts">
          <div data-reveal-item>
            <dt>Location</dt>
            <dd>{location}</dd>
          </div>
          <div data-reveal-item>
            <dt>Property type</dt>
            <dd>{property.type}</dd>
          </div>
          <div data-reveal-item>
            <dt>Units</dt>
            <dd>{property.unitsLabel}</dd>
          </div>
          <div data-reveal-item>
            <dt>{record.recordLabel}</dt>
            <dd>{record.recordValue}</dd>
          </div>
        </dl>

        <p data-reveal-item className="property-place__note">
          {record.note}
        </p>
      </div>
    </section>
  )
}
