import { useMemo } from 'react'
import type { Fund } from '@/types'

export function useRelatedFunds(current: Fund, catalogue: Fund[]) {
  return useMemo(() => {
    return catalogue
      .filter((item) => item.id !== current.id)
      .sort((left, right) => {
        if (left.type === current.type && right.type !== current.type) return -1
        if (right.type === current.type && left.type !== current.type) return 1
        return left.name.localeCompare(right.name)
      })
  }, [catalogue, current.id, current.type])
}
