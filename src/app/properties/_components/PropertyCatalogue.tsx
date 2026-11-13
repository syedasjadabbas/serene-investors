import { useRef } from 'react'
import type { Property } from '@/global/types/property'
import { Eyebrow } from '@/global/components/page/PageSection'
import { propertiesNotice } from '@/global/data/properties'
import { useCatalogueTransition } from '../_hooks/useCatalogueTransition'
import { CatalogueCard } from './CatalogueCard'

type Props = {
  properties: Property[]
  onReset: () => void
}

export function PropertyCatalogue({ properties, onReset }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const rendered = useCatalogueTransition(rootRef, properties)

  return (
    <div ref={rootRef} className="mt-6">
      {rendered.length === 0 ? (
        <div className="flex flex-col items-start gap-4 rounded-[20px] bg-white p-6 sm:p-10">
          <Eyebrow tone="sand">No matches</Eyebrow>
          <h3 className="font-heading text-2xl font-bold tracking-[-0.02em] text-sx-ink sm:text-3xl">No sample properties match.</h3>
          <p className="max-w-md text-base leading-relaxed text-sx-ink/65">
            Nothing in the current collection fits these filters. Reset to see every sample listing again.
          </p>
          <button
            type="button"
            onClick={onReset}
            className="min-h-11 rounded-full bg-sx-ink px-6 text-sm font-semibold text-white transition-colors hover:bg-sx-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rendered.map((property) => (
            <li key={property.id} className="flex">
              <CatalogueCard property={property} />
            </li>
          ))}
        </ul>
      )}

      <p className="mt-8 max-w-3xl text-xs leading-relaxed text-sx-ink/50">{propertiesNotice.body}</p>
    </div>
  )
}
