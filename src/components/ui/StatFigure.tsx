import type { StatItem } from '@/types'

type Props = {
  stat: StatItem
  index: number
}

export function StatFigure({ stat, index }: Props) {
  return (
    <li
      data-reveal-item
      data-stat-figure
      className="border-t border-line py-7 first:border-t-0 first:pt-0"
    >
      <p
        data-count={stat.id}
        className="text-[length:var(--type-figure)] font-semibold leading-none tracking-[-0.04em] tabular-nums"
      >
        {stat.value}
      </p>
      <p className="mt-3 max-w-[20ch] text-[0.9375rem] leading-snug text-muted">{stat.label}</p>
      <span className="sr-only">Sample figure {index + 1}</span>
    </li>
  )
}
