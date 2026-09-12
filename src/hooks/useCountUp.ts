import { useLayoutEffect, type RefObject } from 'react'
import type { StatItem } from '@/types'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { formatStatValue } from '@/lib/format'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

function formatZero(stat: StatItem) {
  return `${stat.prefix ?? ''}0`
}

function formatLive(stat: StatItem, amount: number) {
  if (amount <= 0) return formatZero(stat)

  return formatStatValue({
    amount,
    prefix: stat.prefix,
    suffix: stat.suffix,
    decimals: stat.decimals,
    grouping: stat.grouping,
  })
}

export function useCountUp(rootRef: RefObject<HTMLElement | null>, stats: StatItem[]) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const ctx = gsap.context(() => {
      const items = stats.flatMap((stat) => {
        if (stat.amount === undefined) return []
        const node = root.querySelector<HTMLElement>(`[data-count="${stat.id}"]`)
        if (!node) return []

        node.textContent = formatZero(stat)
        return [{ stat, node, proxy: { value: 0 } }]
      })

      if (items.length === 0) return

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          once: true,
        },
      })

      items.forEach((item, index) => {
        timeline.to(
          item.proxy,
          {
            value: item.stat.amount,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              item.node.textContent = formatLive(item.stat, item.proxy.value)
            },
            onComplete: () => {
              item.node.textContent = item.stat.value
            },
          },
          index * 0.08,
        )
      })
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef, stats])
}
