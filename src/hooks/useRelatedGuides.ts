import { useMemo } from 'react'
import type { LearnGuide } from '@/types'
import { learnGuides } from '@/data'

export function useRelatedGuides(current: LearnGuide, count = 3) {
  return useMemo(() => {
    const preferred = current.related
      .map((slug) => learnGuides.find((item) => item.slug === slug))
      .filter((item): item is LearnGuide => Boolean(item))

    if (preferred.length >= count) return preferred.slice(0, count)

    const extra = learnGuides.filter(
      (item) => item.slug !== current.slug && !preferred.some((guide) => guide.slug === item.slug),
    )

    return [...preferred, ...extra].slice(0, count)
  }, [count, current])
}
