import { useRef } from 'react'
import type { Property } from '@/types'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  property: Property
}

export function PropertyGallery({ property }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-gallery-image]' })
  const [primary, ...rest] = property.gallery

  if (!primary) return null

  return (
    <section
      ref={rootRef}
      className="overflow-x-clip px-5 py-16 md:px-8 lg:px-10 lg:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2
          data-reveal-heading
          id="gallery-heading"
          className="text-[clamp(1.85rem,3vw,2.75rem)] font-semibold tracking-[-0.03em]"
        >
          The building
        </h2>

        <div className="property-gallery mt-10">
          <figure className="property-gallery__main m-0">
            <img
              data-gallery-image
              src={primary.src}
              alt={primary.alt}
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </figure>
          {rest.slice(0, 4).map((image) => (
            <figure key={image.src} className="property-gallery__item m-0">
              <img
                data-gallery-image
                src={image.src}
                alt={image.alt}
                width={1400}
                height={1050}
                loading="lazy"
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
