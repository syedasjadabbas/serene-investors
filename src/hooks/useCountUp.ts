import { useLayoutEffect, type RefObject } from 'react'
import type { StatItem } from '@/types'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { formatStatValue } from '@/lib/format'
import { gsap, registerGsapPlugins } from '@/lib/gsap'

export function useCountUp(rootRef: RefObject<HTMLElement | null>, stats: StatItem[]) {
  const reduced = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || reduced) return

    registerGsapPlugins()

    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        if (stat.amount === undefined) return
        const node = root.querySelector<HTMLElement>(`[data-count="${stat.id}"]`)
        if (!node) return

        const format = (amount: number) =>
          formatStatValue({
            amount,
            prefix: stat.prefix,
            suffix: stat.suffix,
            decimals: stat.decimals,
            grouping: stat.grouping,
          })

        node.textContent = format(0)

        const proxy = { value: 0 }
        gsap.to(proxy, {
          value: stat.amount,
          duration: 1.35,
          delay: index * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 72%',
            once: true,
          },
          onUpdate: () => {
            node.textContent = format(proxy.value)
          },
          onComplete: () => {
            node.textContent = stat.value
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [reduced, rootRef, stats])
}
