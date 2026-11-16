'use client'

import Link from 'next/link'
import { ArrowRight, Award, Plus } from 'lucide-react'
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

function VisaMedia({ card, still }: { card: Card; still: boolean }) {
  return (
    <div className="relative h-full w-full">
      <PhotoMedia card={card} still={still} />
      <div className="absolute inset-0 bg-gradient-to-t from-sx-ink/70 to-transparent" />
      <div className="sx-float-slow absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 -rotate-12 flex-col items-center gap-1 rounded-[14px] border border-sx-sand/40 bg-sx-ink/80 px-6 py-4 backdrop-blur">
        <Award size={22} className="text-sx-sand" />
        <span className="font-heading text-sm font-extrabold uppercase leading-tight tracking-[0.06em] text-white">
          UAE Golden
          <br />
          Visa
        </span>
      </div>
    </div>
  )
}

function ListingsMedia() {
  return (
    <div className="flex h-full w-full items-center overflow-hidden bg-sx-paper">
      <ul className="sx-slide flex gap-3 px-4">
        {[...ecosystem.listings, ...ecosystem.listings].map((item, index) => (
          <li key={`${item.name}-${index}`} className="w-[120px] shrink-0 rounded-[12px] bg-white p-2 shadow-md" aria-hidden={index >= ecosystem.listings.length}>
            <img src={withBase(item.image)} alt="" loading="lazy" className="aspect-[4/3] w-full rounded-[8px] object-cover" />
            <p className="mt-2 line-clamp-2 text-[11px] font-semibold leading-tight text-sx-ink">{item.name}</p>
            <p className="text-[10px] text-sx-ink/60">{item.price}</p>
            <div className="mt-1.5 h-1 rounded-full bg-sx-paper">
              <div className="h-1 rounded-full bg-sx-brand" style={{ width: `${item.funded}%` }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px]">
              <span className="text-sx-ink/60">{item.funded}% funded</span>
              <span className="flex items-center gap-0.5 rounded-full bg-sx-brand px-2 py-0.5 font-semibold text-white">
                <Plus size={10} /> Add
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ChartMedia() {
  const bars = [28, 36, 41, 50, 58, 64, 73, 84]
  return (
    <div className="flex h-full w-full flex-col justify-end gap-3 bg-sx-forest p-6">
      <div className="flex items-baseline justify-between text-white">
        <span className="text-xs uppercase tracking-[0.14em] text-white/60">Sample value over 8 years</span>
        <span className="font-heading text-xl font-bold text-sx-mint">+84%</span>
      </div>
      <div className="flex h-[60%] items-end gap-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className="sx-bar flex-1 rounded-t-[6px] bg-sx-mint"
            style={{ height: `${h}%`, animationDelay: `${i * 0.12}s`, opacity: 0.45 + i * 0.07 }}
          />
        ))}
      </div>
    </div>
  )
}

/** A block of "shares" lighting up one by one, like a building filling with owners. */
function SharesMedia() {
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
    case 'listings':
      return <ListingsMedia />
    case 'chart':
      return <ChartMedia />
    case 'visa':
      return <VisaMedia card={card} still={still} />
    case 'shares':
      return <SharesMedia />
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
        <ul className="sx-rail mt-10 scroll-px-4 px-4 sm:scroll-px-8 sm:px-8" aria-label="Serene Investors services">
          {ecosystem.cards.map((card) => (
            <EcoCard key={card.title} card={card} still />
          ))}
        </ul>
      ) : (
        // Film-strip: the row glides continuously and pauses on hover or keyboard focus.
        <div className="sx-strip mt-10 overflow-hidden">
          <ul className="sx-strip-track flex w-max" aria-label="Serene Investors services">
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
