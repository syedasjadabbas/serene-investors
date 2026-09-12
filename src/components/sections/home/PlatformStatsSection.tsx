import { useRef } from 'react'
import type { StatItem } from '@/types'
import { StatFigure } from '@/components/ui/StatFigure'
import { platformStatsIntro } from '@/data'
import { useCountUp } from '@/hooks/useCountUp'
import { useSectionReveal } from '@/hooks/useSectionReveal'

type Props = {
  stats: StatItem[]
}

export function PlatformStatsSection({ stats }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { depth: true })
  useCountUp(rootRef, stats)

  return (
    <section
      ref={rootRef}
      id="platform-stats"
      className="home-band home-band--stage overflow-x-clip bg-surface"
      aria-labelledby="platform-heading"
    >
      <div className="mx-auto grid max-w-[var(--container-wide)] items-start gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-x-24">
        <div className="max-w-xl">
          <p data-reveal-heading className="home-kicker text-muted">
            {platformStatsIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="platform-heading"
            className="home-heading mt-3 max-w-[11ch]"
          >
            {platformStatsIntro.heading}
          </h2>
          <p data-reveal-heading className="home-lede max-w-[34ch]">
            {platformStatsIntro.body}
          </p>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-soft px-2.5 py-1 text-xs font-medium text-soft-ink"
          >
            {platformStatsIntro.sampleLabel}
          </p>
        </div>

        <ol className="mt-2 list-none p-0" data-depth-stage>
          {stats.map((stat, index) => (
            <StatFigure key={stat.id} stat={stat} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}
