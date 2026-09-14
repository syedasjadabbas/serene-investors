import { useRef, useState } from 'react'
import type { Property } from '@/types'
import { formatPropertyMeta, formatStatus } from '@/lib/format'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { usePropertyExperience } from '@/hooks/usePropertyExperience'

type Props = {
  property: Property
}

export function PropertyExperience({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const frames = property.gallery.length > 0 ? property.gallery : [{ src: property.image, alt: property.imageAlt }]
  const [active, setActive] = useState(0)
  const current = frames[active] ?? frames[0]

  usePropertyExperience(rootRef)
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-experience-image]', x: 10, y: 7, rotateX: 1.5, rotateY: 2 },
      { selector: '[data-experience-card]', x: 8, y: 0, rotateX: 2, rotateY: 2.4 },
    ],
  })

  if (!current) return null

  return (
    <section
      ref={rootRef}
      className="property-experience"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="sr-only">
        {property.name} images
      </h2>

      <div className="property-experience__stage" data-depth-stage>
        <img
          key={current.src}
          data-experience-image
          src={current.src}
          alt={current.alt}
          width={1800}
          height={1200}
          loading="lazy"
          decoding="async"
        />

        <aside data-experience-card className="property-experience__card">
          <p className="text-sm text-muted">{formatStatus(property.status)}</p>
          <p className="mt-2 text-lg font-medium tracking-tight">{property.name}</p>
          <p className="mt-1 text-sm text-muted">{formatPropertyMeta(property.neighborhood, property.city)}</p>
          <p className="mt-4 text-sm">{property.unitsLabel}</p>
        </aside>
      </div>

      {frames.length > 1 ? (
        <div className="property-experience__thumbs" role="tablist" aria-label="Property images">
          {frames.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show image ${index + 1}: ${image.alt}`}
              className="property-experience__thumb"
              onClick={() => setActive(index)}
            >
              <img src={image.src} alt="" width={280} height={210} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      ) : null}
    </section>
  )
}
