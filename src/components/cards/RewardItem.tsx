import type { RewardItem as RewardContent } from '@/types'

type Props = {
  item: RewardContent
  index: number
}

const tones = ['reward-deck__card--one', 'reward-deck__card--two', 'reward-deck__card--three'] as const

export function RewardItem({ item, index }: Props) {
  const tone = tones[index] ?? tones[0]

  return (
    <article data-reward-item data-depth={index === 2 ? 'front' : index === 0 ? 'far' : 'mid'} className={`reward-deck__card ${tone} depth-lift`}>
      <p data-reward-kicker className="home-kicker">
        {item.level}
      </p>
      <h3 className="mt-5 text-[1.65rem] font-semibold tracking-tight">{item.title}</h3>
      <p className="mt-3 text-sm text-muted">Sample threshold</p>
      <p data-reward-figure className="mt-1 text-base font-medium">
        {item.threshold}
      </p>
      <p className="mt-6 text-sm text-muted">Current benefits</p>
      <ul className="mt-2 space-y-2">
        {item.benefits.map((benefit) => (
          <li key={benefit} className="text-[0.9375rem] leading-snug">
            {benefit}
          </li>
        ))}
      </ul>
    </article>
  )
}
