import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import type { RewardItem as RewardContent } from '@/types'
import { RewardItem } from '@/components/cards/RewardItem'
import { ButtonLink } from '@/components/ui/Button'
import { rewardsIntro } from '@/data'
import { useRewardsReveal } from '@/hooks/useRewardsReveal'

type Props = {
  items: RewardContent[]
}

export function RewardsSection({ items }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useRewardsReveal(rootRef)

  return (
    <section
      ref={rootRef}
      id="rewards"
      className="home-band home-band--stage overflow-x-clip bg-soft"
      aria-labelledby="rewards-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal-heading className="home-kicker text-muted">
            {rewardsIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="rewards-heading"
            className="home-heading mx-auto mt-4 max-w-[16ch] text-[clamp(2.4rem,4.6vw,4rem)]"
          >
            {rewardsIntro.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-surface px-2.5 py-1 text-xs font-medium text-soft-ink"
          >
            {rewardsIntro.sampleLabel}
          </p>
        </div>

        <div className="reward-deck mt-14 lg:mt-20" data-depth-stage>
          {items.map((item, index) => (
            <RewardItem key={item.id} item={item} index={index} />
          ))}
        </div>

        <div data-rewards-cta className="mt-14 text-center">
          <ButtonLink to={rewardsIntro.action.href} variant="ghost" className="home-cta gap-1.5 px-0">
            {rewardsIntro.action.label}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
