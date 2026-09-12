import { useRef } from 'react'
import type { Property } from '@/types'
import { CatalogueCard } from '@/components/cards/CatalogueCard'
import { propertiesNotice } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  properties: Property[]
}

export function PropertyCatalogue({ properties }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { heading: undefined, media: '[data-reveal-item] img' })

  return (
    <section
      ref={rootRef}
      id="property-collection"
      className="overflow-x-clip px-5 py-12 md:px-8 lg:px-10 lg:py-16"
      aria-labelledby="collection-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2 id="collection-heading" className="sr-only">
          Sample property collection
        </h2>

        {properties.length === 0 ? (
          <p className="max-w-[40ch] text-[0.95rem] leading-relaxed text-muted">
            No sample properties match these filters. Try another combination.
          </p>
        ) : (
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {properties.map((property) => (
              <CatalogueCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <aside className="mt-14 max-w-[52ch] border-t border-line pt-6">
          <p className="brand-label text-muted">{propertiesNotice.eyebrow}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{propertiesNotice.body}</p>
        </aside>
      </div>
    </section>
  )
}
