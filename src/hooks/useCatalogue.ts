import { useMemo, useState } from 'react'
import type { Property, PropertyStatus, PropertyType } from '@/types'

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
]

function matchesSize(amount: number, size: SizeFilter) {
  if (size === 'all') return true
  if (size === 'under-7500') return amount < 7500
  if (size === 'mid') return amount >= 7500 && amount <= 10000
  return amount > 10000
}

export function useCatalogue(items: Property[]) {
  const [filters, setFilters] = useState<CatalogueFilters>(DEFAULT_CATALOGUE_FILTERS)

  const locations = useMemo(() => {
    return [...new Set(items.map((item) => item.neighborhood))].sort()
  }, [items])

  const visible = useMemo(() => {
    const next = items.filter((item) => {
      if (filters.type !== 'all' && item.type !== filters.type) return false
      if (filters.location !== 'all' && item.neighborhood !== filters.location) return false
      if (filters.status !== 'all' && item.status !== filters.status) return false
      if (!matchesSize(item.sampleMinInvestment, filters.size)) return false
      return true
    })

    next.sort((a, b) => {
      if (filters.sort === 'yield') return b.sampleYieldPct - a.sampleYieldPct
      if (filters.sort === 'minimum') return a.sampleMinInvestment - b.sampleMinInvestment
      return featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id)
    })

    return next
  }, [filters, items])

  function update<K extends keyof CatalogueFilters>(key: K, value: CatalogueFilters[K]) {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  function reset() {
    setFilters(DEFAULT_CATALOGUE_FILTERS)
  }

  const isFiltered =
    filters.type !== DEFAULT_CATALOGUE_FILTERS.type ||
    filters.location !== DEFAULT_CATALOGUE_FILTERS.location ||
    filters.size !== DEFAULT_CATALOGUE_FILTERS.size ||
    filters.status !== DEFAULT_CATALOGUE_FILTERS.status ||
    filters.sort !== DEFAULT_CATALOGUE_FILTERS.sort

  return { filters, isFiltered, locations, reset, update, visible }
}
