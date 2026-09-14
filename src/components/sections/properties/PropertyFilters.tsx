import { useRef } from 'react'
import type { PropertyStatus } from '@/types'
import type { CatalogueFilters, SizeFilter, SortKey, StatusFilter, TypeFilter } from '@/hooks/useCatalogue'
import { cn } from '@/lib/cn'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  filters: CatalogueFilters
  locations: string[]
  resultCount: number
  isFiltered: boolean
  onChange: <K extends keyof CatalogueFilters>(key: K, value: CatalogueFilters[K]) => void
  onReset: () => void
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

export function PropertyFilters({
  filters,
  locations,
  resultCount,
  isFiltered,
  onChange,
  onReset,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  useSectionReveal(rootRef, { items: '[data-reveal-item]' })

  return (
    <div ref={rootRef} className="property-filters">
      <div data-reveal-item className="property-filters__panel mx-auto max-w-[var(--container-wide)]">
        <div className="property-chips" role="group" aria-label="Property type">
          {typeOptions.map((option) => {
            const selected = filters.type === option.id
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onChange('type', option.id)}
                className={cn('property-chip', selected && 'property-chip--active')}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <div className="property-filters__fields">
          <label className="property-field">
            <span>Location</span>
            <select
              className={cn('property-select', filters.location !== 'all' && 'property-select--active')}
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

          <label className="property-field">
            <span>Investment</span>
            <select
              className={cn('property-select', filters.size !== 'all' && 'property-select--active')}
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

          <label className="property-field">
            <span>Status</span>
            <select
              className={cn('property-select', filters.status !== 'all' && 'property-select--active')}
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

          <label className="property-field">
            <span>Sort</span>
            <select
              className={cn('property-select', filters.sort !== 'featured' && 'property-select--active')}
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

        <div className="property-filters__meta">
          <p aria-live="polite">
            {resultCount} sample {resultCount === 1 ? 'property' : 'properties'}
          </p>
          {isFiltered ? (
            <button type="button" className="property-filters__reset" onClick={onReset}>
              Reset filters
            </button>
          ) : (
            <span className="property-filters__reset-slot" aria-hidden="true">
              Reset filters
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
