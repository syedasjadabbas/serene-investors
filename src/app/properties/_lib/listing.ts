import type { Property } from '@/global/types/property'

/** Share of the sample raise already taken; funded and exited listings count as full. */
export function fundedShare(property: Property) {
  if (property.status === 'funded' || property.status === 'exited') return 100
  return property.fundedPct ?? 0
}
