import { useRef } from 'react'
import type { Property } from '@/types'
import { CatalogueCard } from '@/components/cards/CatalogueCard'
import { Button } from '@/components/ui/Button'
import { propertiesNotice } from '@/data'
import { useCatalogueTransition } from '@/hooks/useCatalogueTransition'
import { useDepthParallax } from '@/hooks/useDepthParallax'

type Props = {
  properties: Property[]
  onReset: () => void
}

export function PropertyCatalogue({ properties, onReset }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const rendered = useCatalogueTransition(rootRef, properties)
  useDepthParallax(
    rootRef,
    [{ selector: '[data-catalogue-image]', yPercent: 4 }],
    rendered.map((item) => item.id).join('|'),
  )

  return (
    <section
      ref={rootRef}
      id="property-collection"
      className="property-catalogue"
      aria-labelledby="collection-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <h2 id="collection-heading" className="sr-only">
          Sample property collection
        </h2>

        {rendered.length === 0 ? (
          <div className="property-catalogue__empty">
            <p className="property-hero__mark">No matches</p>
            <h3>No sample properties match.</h3>
            <p>
              Nothing in the current collection fits these filters. Reset to see every sample listing
              again.
            </p>
            <Button type="button" onClick={onReset} className="min-h-11">
              Reset filters
            </Button>
          </div>
        ) : (
          <div className="property-catalogue__grid">
            {rendered.map((property) => (
              <CatalogueCard key={property.id} property={property} />
            ))}
          </div>
        )}

        <aside className="property-catalogue__notice">
          <p>{propertiesNotice.body}</p>
        </aside>
      </div>
    </section>
  )
}
