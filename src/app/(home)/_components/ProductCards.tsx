'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Bell, Box, Menu as MenuIcon, TrendingUp } from 'lucide-react'
import { ArrowCircle, type ArrowTone } from '@/global/components/ui/ArrowCircle'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { cn } from '@/global/lib/cn'
import { products } from '../_lib/home'

type CardId = 'properties' | 'funds' | 'visa'

const CARD: Record<CardId, { shell: string; title: string; body: string; arrow: ArrowTone }> = {
  properties: { shell: 'bg-sx-card', title: 'text-sx-mint', body: 'text-white/80', arrow: 'mint' },
  funds: { shell: 'bg-sx-forest', title: 'text-sx-sand', body: 'text-white/85', arrow: 'dark' },
  visa: { shell: 'bg-sx-card', title: 'text-white', body: 'text-white/80', arrow: 'brand' },
}

/** Stacked investor rows, each sliding in and gently bobbing. */
function ActivityVisual() {
  return (
    <ul className="flex flex-col gap-3" aria-label="Sample investor activity">
      {products.activity.map((row, index) => (
        <li
          key={row.name}
          className="sx-float flex items-center gap-3 rounded-[16px] bg-white p-2 pr-4 text-sx-ink shadow-lg"
          style={{ animationDelay: `${index * 0.6}s` }}
        >
          <img src={row.photo} alt="" loading="lazy" className="size-14 shrink-0 rounded-[12px] object-cover sm:size-16" />
          <span className="min-w-0 flex-1 leading-snug">
            <span className="flex items-center justify-between gap-2">
              <span className="font-semibold">{row.name}</span>
              <span className="flex items-center gap-1 text-sm text-sx-ink/60">
                {row.shares}
                <Box size={15} className="text-sx-brand" aria-label="shares" />
              </span>
            </span>
            <span className="block text-[15px] leading-snug text-sx-ink/75">{row.action}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

/** Fund tiles fanned out at an angle, overlapping the card edge. */
function FundTilesVisual() {
  // Landscape cards fanned from bottom-left to top-right, like cards spread on a table.
  const tilts = [
    '-rotate-[16deg] left-[-4%] top-[46%] z-30',
    '-rotate-[6deg] left-[20%] top-[26%] z-20',
    'rotate-[6deg] left-[44%] top-[2%] z-10',
  ]
  return (
    <div className="relative h-[300px]" aria-label="Sample fund yields">
      {products.fundTiles.map((tile, index) => (
        <div
          key={tile.name}
          className={cn('sx-float-slow absolute w-[72%] max-w-[270px]', tilts[index])}
          style={{ animationDelay: `${index * 0.8}s` }}
        >
          <div
            className={cn(
              'flex aspect-[8/5] flex-col justify-between rounded-[18px] p-4 shadow-2xl',
              index === 0 ? 'bg-sx-sand text-sx-ink' : index === 1 ? 'bg-white text-sx-ink' : 'bg-sx-mint text-sx-ink',
            )}
          >
            {/* Yield on top: the lower part of each tile is covered by the one in front. */}
            <span className="flex items-start justify-between gap-2">
              <span className="font-heading text-4xl font-extrabold leading-none tracking-[-0.04em]">{tile.yield}</span>
              <span className="text-right text-xs leading-tight">
                <span className="block font-semibold">{tile.name}</span>
                <span className="text-sx-ink/60">Sample yield</span>
              </span>
            </span>
            <span className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-sx-ink/60">
              {tile.tag}
              <TrendingUp size={16} className="text-sx-forest" />
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

/** Phone showing a residency-threshold portfolio. */
function PhoneVisual() {
  const v = products.visa
  return (
    <div className="flex justify-center" aria-label="Sample Golden Visa portfolio">
      <div className="sx-float-slow w-[230px] translate-y-6 rounded-[36px] border-[3px] border-sx-brand/70 bg-sx-ink p-2 shadow-[0_0_40px_rgba(0,166,99,0.25)] sm:w-[250px]">
        <div className="rounded-[30px] bg-sx-card px-4 pb-6 pt-3 text-white">
          <div className="flex items-center justify-between text-[10px] text-white/70">
            <span>9:41</span>
            <span className="h-4 w-16 rounded-full bg-black" />
            <span>●●●</span>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-semibold">Golden Visa</span>
            <span className="flex gap-2 text-white/70">
              <Bell size={14} />
              <MenuIcon size={14} />
            </span>
          </div>
          <p className="mt-3 rounded-[10px] bg-white/5 px-3 py-2 text-base font-bold">
            {v.total}
            <span className="ml-1 text-[10px] font-semibold text-sx-mint">of {v.target}</span>
          </p>
          <div className="mt-3 rounded-[10px] bg-white/5 p-3">
            <div className="flex justify-between text-[10px] text-white/60">
              <span>Threshold progress</span>
              <span className="text-sx-mint">{v.progress}%</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10">
              <div className="sx-grow h-1.5 rounded-full bg-sx-brand" style={{ width: `${v.progress}%` }} />
            </div>
          </div>
          <ul className="mt-3 flex flex-col gap-2">
            {v.holdings.map((h) => (
              <li key={h.name} className="flex justify-between rounded-[10px] bg-white/5 px-3 py-2 text-[10px]">
                <span className="text-white/70">{h.name}</span>
                <span className="font-semibold">{h.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const VISUALS: Record<CardId, () => React.JSX.Element> = {
  properties: ActivityVisual,
  funds: FundTilesVisual,
  visa: PhoneVisual,
}

export function ProductCards() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref, { depth: true })

  return (
    <section ref={ref} aria-labelledby="products-heading" className="px-4 pb-16 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-[1240px]">
        <h2
          id="products-heading"
          data-reveal-heading
          className="max-w-4xl font-heading text-3xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-[2.75rem]"
        >
          {products.heading[0]} <span className="text-white/55">{products.heading[1]}</span>
        </h2>

        {/* Three across only from lg: at tablet width the cards were too narrow for their visuals. */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.cards.map((card) => {
            const id = card.id as CardId
            const style = CARD[id]
            const Visual = VISUALS[id]
            return (
              <Link
                key={card.id}
                href={card.href}
                data-reveal-item
                className={cn(
                  'group relative flex min-h-[620px] flex-col overflow-hidden rounded-[24px] transition-transform duration-500 hover:-translate-y-1',
                  style.shell,
                )}
              >
                <div className="p-7 sm:p-8">
                  <h3 className={cn('font-heading text-4xl font-bold tracking-[-0.03em]', style.title)}>{card.title}</h3>
                  <p className={cn('mt-4 text-xl leading-snug sm:text-[1.4rem]', style.body)}>{card.body}</p>
                </div>
                <div className={cn('mt-auto', id === 'visa' ? 'px-6' : id === 'funds' ? 'pl-6' : 'px-5 pb-5')}>
                  <Visual />
                </div>
                <ArrowCircle tone={style.arrow} className="absolute bottom-5 right-5 z-40 shadow-lg" />
              </Link>
            )
          })}
        </div>
        <p className="mt-4 text-xs text-white/60">{products.note}</p>
      </div>
    </section>
  )
}
