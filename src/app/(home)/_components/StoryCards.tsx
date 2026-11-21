'use client'

import { useLayoutEffect, useRef } from 'react'
import { BadgeCheck, CalendarCheck } from 'lucide-react'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { gsap, registerGsapPlugins } from '@/global/lib/gsap'
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

function WordmarkPanel({ card }: { card: Card }) {
  const tiles = ('tiles' in card && card.tiles) || []
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
            <CalendarCheck size={18} aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold">{card.badge}</span>
        </div>
      ) : (
        <div className="absolute right-4 top-4 flex items-center gap-3 rounded-[14px] bg-sx-ink/85 p-3 text-white shadow-lg backdrop-blur">
          <BadgeCheck size={18} className="text-sx-mint" aria-hidden="true" />
          <span className="text-sm font-semibold">{card.badge}</span>
        </div>
      )}
    </div>
  )
}

export function StoryCards() {
  const ref = useRef<HTMLElement>(null)
  const reduced = usePrefersReducedMotion()

  // Stacked cards: each card sticks below the navbar and the next one slides over it, while the
  // card underneath shrinks and dims slightly, like a deck being dealt.
  useLayoutEffect(() => {
    const root = ref.current
    if (!root || reduced) return
    registerGsapPlugins()
    // Phones: cards scroll normally; from md (768px) upward, cards scale to fit the viewport and stack like a deck.
    const mm = gsap.matchMedia(root)
    mm.add('(min-width: 768px)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-stack-card]', root)
      cards.forEach((card, index) => {
        const next = cards[index + 1]
        if (!next) return
        gsap.to(card, {
          scale: 0.94,
          filter: 'brightness(0.88)',
          ease: 'none',
          // scrub 2.5: the motion trails the scroll by a couple of seconds, so it feels slow and smooth.
          scrollTrigger: { trigger: next, start: 'top bottom', end: 'top 120px', scrub: 2.5 },
        })
      })
    })
    return () => mm.revert()
  }, [reduced])

  return (
    <section ref={ref} aria-label="About Serene Heights" className="px-4 sm:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-10 md:gap-[clamp(320px,65vh,620px)]">
        {story.map((card, index) => (
          <article
            key={card.id}
            data-stack-card
            aria-labelledby={`story-${card.id}`}
            // Each later card sticks a little lower so the edge of the one beneath stays visible.
            style={reduced ? undefined : { top: `${96 + index * 14}px` }}
            className={cn(
              'grid origin-top gap-6 rounded-[24px] p-4 shadow-[0_-20px_50px_rgba(0,0,0,0.12)] sm:p-5 md:min-h-[clamp(360px,calc(100vh-9.5rem),540px)] md:grid-cols-2',
              !reduced && 'md:sticky',
              CARD_TONE[card.tone],
            )}
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
            {card.tone === 'forest' ? <WordmarkPanel card={card} /> : <PhotoPanel card={card} />}
          </article>
        ))}
      </div>
    </section>
  )
}
