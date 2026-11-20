'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { ecosystem, heroBar } from '../_lib/home'

type Card = (typeof ecosystem.cards)[number]

/* ---- Moving media, one per card type ---------------------------------- */

function VideoMedia({ card, still }: { card: Card; still: boolean }) {
  if (still) return <PhotoMedia card={card} still />
  return (
    <video
      className="h-full w-full object-cover"
      src={withBase(heroBar.video)}
      poster={withBase(card.image)}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  )
}

function PhotoMedia({ card, still }: { card: Card; still: boolean }) {
  return (
    <img
      src={withBase(card.image)}
      alt=""
      loading="lazy"
      className={cn('h-full w-full object-cover', !still && 'sx-pan')}
    />
  )
}

/** The four published payment plans gliding past as mini cards. */
function PlansMedia() {
  return (
    <div className="flex h-full w-full items-center overflow-hidden bg-sx-paper">
      <ul className="sx-slide flex gap-3 px-4">
        {[...ecosystem.plans, ...ecosystem.plans].map((item, index) => (
          <li key={`${item.id}-${index}`} className="w-[130px] shrink-0 rounded-[12px] bg-white p-2 shadow-md" aria-hidden={index >= ecosystem.plans.length}>
            <img src={withBase(item.image)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-[8px] object-cover" />
            <p className="mt-2 line-clamp-2 text-[11px] font-semibold leading-tight text-sx-ink">{item.name}</p>
            <p className="text-[10px] tabular-nums text-sx-ink/65">{item.price}</p>
            <p className="mt-1.5 w-fit rounded-full bg-sx-brand px-2 py-0.5 text-[10px] font-semibold text-white">{item.down}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** A block of 50 sq ft units lighting up one by one, like an apartment filling with co-owners. */
function UnitsMedia() {
  const cols = 12
  const rows = 8
  return (
    <div className="flex h-full w-full items-center justify-center bg-sx-ink p-6">
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {Array.from({ length: cols * rows }, (_, i) => {
          const tone = i % 11 === 0 ? 'bg-sx-sand' : i % 5 === 0 ? 'bg-sx-mint' : 'bg-sx-brand'
          return (
            <span
              key={i}
              className={cn('sx-tile size-3 rounded-[2px] sm:size-3.5', tone)}
              style={{ animationDelay: `${((i * 37) % (cols * rows)) * 0.05}s` }}
            />
          )
        })}
      </div>
    </div>
  )
}

function Media({ card, still }: { card: Card; still: boolean }) {
  switch (card.media) {
    case 'video':
      return <VideoMedia card={card} still={still} />
    case 'plans':
      return <PlansMedia />
    case 'units':
      return <UnitsMedia />
    default:
      return <PhotoMedia card={card} still={still} />
  }
}

function EcoCard({ card, still, hidden }: { card: Card; still: boolean; hidden?: boolean }) {
  return (
    <li className="mr-4 w-[72vw] shrink-0 sm:w-[300px]" aria-hidden={hidden || undefined}>
      <Link
        href={card.href}
        tabIndex={hidden ? -1 : undefined}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-sx-card transition-colors hover:bg-sx-card-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Media card={card} still={still} />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-5">
          <h3 className="font-heading text-[1.35rem] font-bold leading-[1.2] tracking-[-0.02em] text-white sm:text-2xl">{card.title}</h3>
          <p className="mt-auto flex items-center justify-between text-sm text-white/70">
            {card.meta}
            <ArrowRight size={20} className="text-white transition-transform duration-300 group-hover:translate-x-1.5" />
          </p>
        </div>
      </Link>
    </li>
  )
}

export function EcosystemCarousel() {
  const still = usePrefersReducedMotion()

  return (
    <section aria-labelledby="ecosystem-heading" className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8">
        <h2 id="ecosystem-heading" className="font-heading text-4xl font-bold tracking-[-0.02em] text-white sm:text-5xl">
          {ecosystem.heading}
        </h2>
        <p className="mt-3 text-lg text-white/65">{ecosystem.body}</p>
      </div>

      {still ? (
        // Reduced motion: a plain scrollable row.
        <ul className="sx-rail mt-10 scroll-px-4 px-4 sm:scroll-px-8 sm:px-8" aria-label="Serene Heights at a glance">
          {ecosystem.cards.map((card) => (
            <EcoCard key={card.title} card={card} still />
          ))}
        </ul>
      ) : (
        // Film-strip: the row glides continuously and pauses on hover or keyboard focus.
        <div className="sx-strip mt-10 overflow-hidden">
          <ul className="sx-strip-track flex w-max" aria-label="Serene Heights at a glance">
            {ecosystem.cards.map((card) => (
              <EcoCard key={card.title} card={card} still={false} />
            ))}
            {ecosystem.cards.map((card) => (
              <EcoCard key={`${card.title}-copy`} card={card} still={false} hidden />
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
