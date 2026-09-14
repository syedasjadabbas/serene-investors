import { useRef } from 'react'
import type { Property } from '@/types'
import { formatPropertyMeta } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyOverview({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-story-image]' })
  useDepthParallax(rootRef, [
    { selector: '[data-story-image="0"]', yPercent: -5 },
    { selector: '[data-story-image="1"]', yPercent: 4 },
  ])

  const location = formatPropertyMeta(property.neighborhood, property.city)
  const firstImage = property.gallery[1] ?? property.gallery[0] ?? { src: property.image, alt: property.imageAlt }
  const secondImage = property.gallery[2] ?? firstImage
  const lead = property.overview[0] ?? property.description
  const follow = property.overview[1] ?? property.overview[0] ?? property.description

  return (
    <section
      ref={rootRef}
      id="property-overview"
      className="property-story"
      aria-labelledby="overview-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="property-story__row">
          <figure className="property-story__media m-0">
            <img
              data-story-image="0"
              src={firstImage.src}
              alt={firstImage.alt}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="property-story__copy">
            <h2
              data-reveal-heading
              id="overview-heading"
              className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
            >
              {property.name}
            </h2>
            <p data-reveal-item className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-pretty">
              {lead}
            </p>
            <p data-reveal-item className="mt-6 text-sm text-muted">
              {property.type}
              <span className="text-subtle"> / </span>
              {location}
            </p>
            <p data-reveal-item className="mt-2 text-sm text-muted">
              {property.areaLabel}
              {property.beds > 0 ? ` / ${property.beds} bed sample plan` : null}
            </p>
          </div>
        </div>

        <div className="property-story__row property-story__row--flip">
          <div className="property-story__copy">
            <p data-reveal-item className="max-w-[42ch] text-[1.05rem] leading-relaxed text-pretty">
              {follow}
            </p>
            <p data-reveal-item className="mt-6 text-sm text-muted">
              {property.unitsLabel}
            </p>
            <p data-reveal-item className="mt-2 text-sm text-muted">
              {property.management}
            </p>
          </div>
          <figure className="property-story__media m-0">
            <img
              data-story-image="1"
              src={secondImage.src}
              alt={secondImage.alt}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
