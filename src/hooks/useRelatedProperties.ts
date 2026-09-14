import { useMemo } from 'react'
import type { Property } from '@/types'

export function useRelatedProperties(current: Property, catalogue: Property[], count = 3) {
  return useMemo(() => {
    return catalogue
      .filter((item) => item.id !== current.id)
      .map((item) => {
        let score = 0
        if (item.type === current.type) score += 3
        if (item.city === current.city) score += 2
        if (item.neighborhood === current.neighborhood) score += 1
        return { item, score }
      })
      .sort((left, right) => right.score - left.score)
      .slice(0, count)
      .map((entry) => entry.item)
  }, [catalogue, count, current.city, current.id, current.neighborhood, current.type])
}
