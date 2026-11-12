import { useMemo, useState } from 'react'
import type { Property, PropertyStatus, PropertyType } from '@/global/types/property'

export type TypeFilter = 'all' | PropertyType
export type LocationFilter = 'all' | string
export type SizeFilter = 'all' | 'under-7500' | 'mid' | 'over-10000'
export type StatusFilter = 'all' | PropertyStatus
export type SortKey = 'featured' | 'yield' | 'minimum'

export type CatalogueFilters = {
  type: TypeFilter
  location: LocationFilter
  size: SizeFilter
  status: StatusFilter
  sort: SortKey
}

export const DEFAULT_CATALOGUE_FILTERS: CatalogueFilters = {
  type: 'all',
  location: 'all',
  size: 'all',
  status: 'all',
  sort: 'featured',
}

const featuredOrder = [
  'courtyard-residences',
  'cedar-court',
  'pines-loft',
  'marble-house',
  'linden-house',
  'copper-yard',
  'kiln-yard',
  'azure-horizon-villa',
  'the-glass-pavilion',
]

function matchesSize(amount: number, size: SizeFilter | string | undefined | null) {
  if (!size || size === 'all' || size === 'Any size' || size === '') return true
  if (size === 'under-7500') return amount < 7500
  if (size === 'mid') return amount >= 7500 && amount <= 10000
  if (size === 'over-10000') return amount > 10000
  return true
}

function matchesLocation(
  property: Property,
  selectedLocation: LocationFilter | string | undefined | null,
): boolean {
  if (
    !selectedLocation ||
    selectedLocation === 'all' ||
    selectedLocation === 'All locations' ||
    selectedLocation === ''
  ) {
    return true
  }

  const target = selectedLocation.trim().toLowerCase()
  const loc = property.location?.toLowerCase()
  const reg = property.region?.toLowerCase()
  const neighborhood = property.neighborhood?.toLowerCase()
  const city = property.city?.toLowerCase()
  const combined = `${property.neighborhood || ''}, ${property.city || ''}`.toLowerCase()

  return (
    loc === target ||
    reg === target ||
    neighborhood === target ||
    city === target ||
    combined === target
  )
}

function matchesType(type: PropertyType, filter: TypeFilter | string | undefined | null): boolean {
  if (!filter || filter === 'all' || filter === 'All properties' || filter === '') return true
  return type.toLowerCase() === filter.toLowerCase()
}

function matchesStatus(
  status: PropertyStatus,
  filter: StatusFilter | string | undefined | null,
): boolean {
  if (!filter || filter === 'all' || filter === 'Any status' || filter === '') return true
  return status.toLowerCase() === filter.toLowerCase()
}

export function useCatalogue(items: Property[]) {
  const [filters, setFilters] = useState<CatalogueFilters>(DEFAULT_CATALOGUE_FILTERS)

  const locations = useMemo(() => {
    const set = new Set<string>()
    items.forEach((item) => {
      if (item.city) set.add(item.city)
      if (item.neighborhood) set.add(item.neighborhood)
    })
    return [...set].filter(Boolean).sort()
  }, [items])

  const visible = useMemo(() => {
    const next = items.filter((item) => {
      if (!matchesType(item.type, filters.type)) return false
      if (!matchesLocation(item, filters.location)) return false
      if (!matchesStatus(item.status, filters.status)) return false
      if (!matchesSize(item.sampleMinInvestment, filters.size)) return false
      return true
    })

    next.sort((a, b) => {
      if (filters.sort === 'yield') return b.sampleYieldPct - a.sampleYieldPct
      if (filters.sort === 'minimum') return a.sampleMinInvestment - b.sampleMinInvestment
      const indexA = featuredOrder.indexOf(a.id)
      const indexB = featuredOrder.indexOf(b.id)
      return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB)
    })

    return next
  }, [filters, items])

  function update<K extends keyof CatalogueFilters>(key: K, value: CatalogueFilters[K]) {
    let normalized = value
    if (key === 'location' && (value === 'All locations' || value === '')) {
      normalized = 'all' as CatalogueFilters[K]
    } else if (key === 'size' && (value === ('Any size' as any) || value === '')) {
      normalized = 'all' as CatalogueFilters[K]
    } else if (key === 'type' && (value === ('All properties' as any) || value === '')) {
      normalized = 'all' as CatalogueFilters[K]
    } else if (key === 'status' && (value === ('Any status' as any) || value === '')) {
      normalized = 'all' as CatalogueFilters[K]
    }
    setFilters((current) => ({ ...current, [key]: normalized }))
  }

  function reset() {
    setFilters(DEFAULT_CATALOGUE_FILTERS)
  }

  const isFiltered =
    Boolean(filters.type && filters.type !== 'all' && filters.type !== ('All properties' as any)) ||
    Boolean(filters.location && filters.location !== 'all' && filters.location !== 'All locations') ||
    Boolean(filters.size && filters.size !== 'all' && filters.size !== ('Any size' as any)) ||
    Boolean(filters.status && filters.status !== 'all' && filters.status !== ('Any status' as any)) ||
    Boolean(filters.sort && filters.sort !== 'featured')

  return { filters, isFiltered, locations, reset, update, visible }
}
