import { useRef } from 'react'
import type { PropertyStatus } from '@/types'
import type { CatalogueFilters, SizeFilter, SortKey, StatusFilter, TypeFilter } from '@/hooks/useCatalogue'
import { cn } from '@/lib/cn'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  filters: CatalogueFilters
  locations: string[]
  resultCount: number
  onChange: <K extends keyof CatalogueFilters>(key: K, value: CatalogueFilters[K]) => void
}

const typeOptions: { id: TypeFilter; label: string }[] = [
  { id: 'all', label: 'All properties' },
  { id: 'Residential', label: 'Residential' },
  { id: 'Hospitality', label: 'Hospitality' },
  { id: 'Commercial', label: 'Commercial' },
]

const sizeOptions: { id: SizeFilter; label: string }[] = [
  { id: 'all', label: 'Any size' },
  { id: 'under-7500', label: 'Under $7,500' },
  { id: 'mid', label: '$7,500 to $10,000' },
  { id: 'over-10000', label: 'Over $10,000' },
]

const statusOptions: { id: PropertyStatus | 'all'; label: string }[] = [
  { id: 'all', label: 'Any status' },
  { id: 'open', label: 'Open' },
  { id: 'funding', label: 'Funding' },
  { id: 'funded', label: 'Funded' },
  { id: 'exited', label: 'Exited' },
]

const sortOptions: { id: SortKey; label: string }[] = [
  { id: 'featured', label: 'Featured' },
  { id: 'yield', label: 'Yield' },
  { id: 'minimum', label: 'Minimum investment' },
]

export function PropertyFilters({ filters, locations, resultCount, onChange }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  useSectionReveal(rootRef, { items: '[data-reveal-item]' })

  return (
    <div ref={rootRef} className="overflow-x-clip px-5 md:px-8 lg:px-10">
      <div data-reveal-item className="mx-auto max-w-[var(--container-wide)] border-y border-line py-5">
        <div
          className="property-chips flex gap-2 overflow-x-auto pb-1"
          role="group"
          aria-label="Property type"
        >
          {typeOptions.map((option) => {
            const selected = filters.type === option.id
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange('type', option.id)}
                className={cn(
                  'min-h-11 shrink-0 rounded-pill px-4 text-sm transition-colors duration-[var(--duration-fast)]',
                  selected ? 'bg-accent text-accent-ink' : 'text-ink hover:bg-soft',
                )}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <label className="block">
            <span className="brand-label text-muted">Location</span>
            <select
              className="property-select mt-2 w-full"
              value={filters.location}
              onChange={(event) => onChange('location', event.target.value)}
            >
              <option value="all">All locations</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="brand-label text-muted">Investment size</span>
            <select
              className="property-select mt-2 w-full"
              value={filters.size}
              onChange={(event) => onChange('size', event.target.value as SizeFilter)}
            >
              {sizeOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="brand-label text-muted">Status</span>
            <select
              className="property-select mt-2 w-full"
              value={filters.status}
              onChange={(event) => onChange('status', event.target.value as StatusFilter)}
            >
              {statusOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="brand-label text-muted">Sort</span>
            <select
              className="property-select mt-2 w-full"
              value={filters.sort}
              onChange={(event) => onChange('sort', event.target.value as SortKey)}
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-4 text-sm text-muted" aria-live="polite">
          {resultCount} sample {resultCount === 1 ? 'property' : 'properties'}
        </p>
      </div>
    </div>
  )
}
