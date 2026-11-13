'use client'

import { useRef } from 'react'
import { Building2, TrendingUp } from 'lucide-react'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { story } from '../_lib/home'

type Card = (typeof story)[number]

const CARD_TONE = {
  forest: 'bg-sx-forest text-white',
  light: 'bg-white text-sx-ink',
  dark: 'bg-sx-card text-white',
} as const

const TAG_TONE = {
  forest: 'bg-sx-mint text-sx-ink',
  light: 'bg-sx-sand text-sx-ink',
  dark: 'bg-sx-brand text-white',
} as const

function WordmarkPanel() {
  const tiles = ['/images/journey/palm-aerial.jpg', '/images/journey/hittin.jpg', '/images/properties/marina-tower.jpg', '/images/journey/burj-al-arab.jpg']
  const spots = ['left-[8%] top-[10%] rotate-[-8deg]', 'right-[10%] top-[14%] rotate-[6deg]', 'left-[14%] bottom-[12%] rotate-[5deg]', 'right-[8%] bottom-[10%] rotate-[-6deg]']
  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-hidden rounded-[16px] bg-sx-ink">
      {tiles.map((src, index) => (
        <img
          key={src}
          src={withBase(src)}
          alt=""
          loading="lazy"
          className={cn('absolute size-16 rounded-[10px] object-cover opacity-80 shadow-xl sm:size-20', spots[index])}
        />
      ))}
      <span className="relative font-heading text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
        serene<span className="text-sx-mint">investors</span>
      </span>
    </div>
  )
}

function PhotoPanel({ card }: { card: Card }) {
  if (!('image' in card)) return null
  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-[16px]">
      <img src={withBase(card.image)} alt={card.imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      {card.id === 'why' ? (
        <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-[14px] bg-white/95 p-3 text-sx-ink shadow-lg">
          <span className="flex size-9 items-center justify-center rounded-[10px] bg-sx-brand text-white">
            <TrendingUp size={18} />
          </span>
          <span className="text-sm font-semibold">Rent paid this quarter</span>
        </div>
      ) : (
        <div className="absolute right-4 top-4 flex items-center gap-3 rounded-[14px] bg-sx-ink/85 p-3 text-white shadow-lg backdrop-blur">
          <Building2 size={18} className="text-sx-mint" />
          <span className="text-sm font-semibold">Documents ready to read</span>
        </div>
      )}
    </div>
  )
}

export function StoryCards() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref, { depth: true })

  return (
    <section ref={ref} aria-label="About Serene Investors" className="px-4 sm:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6">
        {story.map((card) => (
          <article
            key={card.id}
            data-reveal-item
            aria-labelledby={`story-${card.id}`}
            className={cn('grid gap-6 rounded-[24px] p-4 sm:p-5 md:grid-cols-2', CARD_TONE[card.tone])}
          >
            <div className="flex flex-col justify-center gap-5 p-4 sm:p-8 lg:p-12">
              <span className={cn('w-fit rounded-full px-3 py-1 text-xs font-semibold', TAG_TONE[card.tone])}>{card.tag}</span>
              <h2 id={`story-${card.id}`} className="font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                {card.heading}
              </h2>
              <p className={cn('max-w-md text-base leading-relaxed', card.tone === 'light' ? 'text-sx-ink/70' : 'text-white/75')}>
                {card.body}
              </p>
            </div>
            {card.tone === 'forest' ? <WordmarkPanel /> : <PhotoPanel card={card} />}
          </article>
        ))}
      </div>
    </section>
  )
}
