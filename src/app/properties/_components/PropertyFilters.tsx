import type { ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import type { PropertyStatus } from '@/global/types/property'
import type { CatalogueFilters, SizeFilter, SortKey, StatusFilter, TypeFilter } from '../_hooks/useCatalogue'
import { cn } from '@/global/lib/cn'

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

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand'

function SelectField({ label, active, children }: { label: string; active: boolean; children: ReactNode }) {
  return (
    <label className="flex min-w-0 flex-col gap-1.5">
      <span className="px-1 text-xs font-semibold text-sx-ink/60">{label}</span>
      <span className="relative">
        {children}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={cn('pointer-events-none absolute right-4 top-1/2 -translate-y-1/2', active ? 'text-white' : 'text-sx-ink/60')}
        />
      </span>
    </label>
  )
}

function selectClass(active: boolean) {
  return cn(
    'h-12 w-full cursor-pointer appearance-none truncate rounded-full pl-4 pr-10 text-sm font-medium transition-colors',
    active ? 'bg-sx-ink text-white' : 'bg-sx-paper text-sx-ink hover:bg-sx-sand',
    focusRing,
  )
}

export function PropertyFilters({ filters, locations, resultCount, isFiltered, onChange, onReset }: Props) {
  return (
    <div className="mt-10 flex flex-col gap-5 rounded-[20px] bg-white p-4 sm:p-6">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Property type">
        {typeOptions.map((option) => {
          const selected = filters.type === option.id
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange('type', option.id)}
              className={cn(
                'min-h-11 rounded-full px-5 text-sm font-semibold transition-colors active:scale-95',
                selected ? 'bg-sx-brand text-white' : 'bg-sx-paper text-sx-ink hover:bg-sx-sand',
                focusRing,
              )}
            >
              {option.label}
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 lg:grid-cols-4">
        <SelectField label="Location" active={filters.location !== 'all'}>
          <select
            className={selectClass(filters.location !== 'all')}
            value={filters.location}
            onChange={(event) => {
              const value = event.target.value
              onChange('location', !value || value === 'all' || value === 'All locations' ? 'all' : value)
            }}
          >
            <option value="all">All locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </SelectField>

        <SelectField label="Investment" active={filters.size !== 'all'}>
          <select
            className={selectClass(filters.size !== 'all')}
            value={filters.size}
            onChange={(event) => {
              const value = event.target.value
              onChange('size', !value || value === 'all' || value === 'Any size' ? 'all' : (value as SizeFilter))
            }}
          >
            {sizeOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </SelectField>

        <SelectField label="Status" active={filters.status !== 'all'}>
          <select
            className={selectClass(filters.status !== 'all')}
            value={filters.status}
            onChange={(event) => {
              const value = event.target.value
              onChange('status', !value || value === 'all' || value === 'Any status' ? 'all' : (value as StatusFilter))
            }}
          >
            {statusOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </SelectField>

        <SelectField label="Sort" active={filters.sort !== 'featured'}>
          <select
            className={selectClass(filters.sort !== 'featured')}
            value={filters.sort}
            onChange={(event) => onChange('sort', event.target.value as SortKey)}
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </SelectField>
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-sx-ink/10 pt-4 text-sm">
        <p aria-live="polite" className="font-medium text-sx-ink/65">
          {resultCount} sample {resultCount === 1 ? 'property' : 'properties'}
        </p>
        {isFiltered ? (
          <button
            type="button"
            onClick={onReset}
            className={cn('min-h-11 rounded-full px-2 font-semibold text-sx-brand underline-offset-4 hover:underline', focusRing)}
          >
            Reset filters
          </button>
        ) : (
          <span aria-hidden="true" className="invisible inline-flex min-h-11 items-center px-2 font-semibold">
            Reset filters
          </span>
        )}
      </div>
    </div>
  )
}
