'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { BadgeCheck, CalendarDays, Ruler, Wallet } from 'lucide-react'
import { ArrowCircle, type ArrowTone } from '@/global/components/ui/ArrowCircle'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { products, type ProductCardId } from '../_lib/home'

const CARD: Record<ProductCardId, { shell: string; title: string; body: string; arrow: ArrowTone }> = {
  smart: { shell: 'bg-sx-card', title: 'text-sx-mint', body: 'text-white/80', arrow: 'mint' },
  apartment: { shell: 'bg-sx-forest', title: 'text-sx-sand', body: 'text-white/85', arrow: 'dark' },
  lahore: { shell: 'bg-sx-card', title: 'text-white', body: 'text-white/80', arrow: 'brand' },
}

const ROW_ICONS = [Ruler, Wallet, CalendarDays]

/** The Smart Property Unit plan as stacked rows, each sliding in and gently bobbing. */
function PlanRowsVisual() {
  return (
    <ul className="flex flex-col gap-3" aria-label="Smart Property Unit payment plan">
      {products.smartRows.map((row, index) => {
        const Icon = ROW_ICONS[index] ?? Wallet
        return (
          <li
            key={row.label}
            className="sx-float flex items-center gap-3 rounded-[16px] bg-white p-2 pr-4 text-sx-ink shadow-lg"
            style={{ animationDelay: `${index * 0.6}s` }}
          >
            <span className="flex size-14 shrink-0 items-center justify-center rounded-[12px] bg-sx-forest text-sx-mint sm:size-16">
              <Icon size={24} aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1 leading-snug">
              <span className="block text-sm text-sx-ink/65">{row.label}</span>
              <span className="block font-heading text-lg font-bold tabular-nums tracking-[-0.01em]">{row.value}</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}

/** The three published 1 BHK plans as tiles fanned out at an angle, overlapping the card edge. */
function ApartmentTilesVisual() {
  const tilts = [
    '-rotate-[16deg] left-[-4%] top-[46%] z-30',
    '-rotate-[6deg] left-[20%] top-[26%] z-20',
    'rotate-[6deg] left-[44%] top-[2%] z-10',
  ]
  return (
    <ul className="relative h-[300px]" aria-label="Published 1 BHK apartment plans">
      {products.apartmentTiles.map((tile, index) => (
        <li
          key={tile.id}
          className={cn('sx-float-slow absolute w-[72%] max-w-[270px]', tilts[index])}
          style={{ animationDelay: `${index * 0.8}s` }}
        >
          <div
            className={cn(
              'flex aspect-[8/5] flex-col justify-between rounded-[18px] p-4 shadow-2xl',
              index === 0 ? 'bg-sx-sand text-sx-ink' : index === 1 ? 'bg-white text-sx-ink' : 'bg-sx-mint text-sx-ink',
            )}
          >
            {/* Price on top: the lower part of each tile is covered by the one in front. */}
            <span className="flex flex-col gap-1">
              <span className="whitespace-nowrap font-heading text-[1.5rem] font-extrabold leading-none tracking-[-0.04em] sm:text-[1.7rem]">{tile.total}</span>
              <span className="text-xs font-semibold text-sx-ink/70">1 BHK · {tile.area}</span>
            </span>
            <span className="text-xs font-semibold tabular-nums text-sx-ink/65">{tile.monthly}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Phone showing the Lahore tower and its published floor mix. */
function LahorePhoneVisual() {
  const v = products.lahore
  return (
    <div className="flex justify-center">
      <div className="sx-float-slow w-[230px] translate-y-6 rounded-[36px] border-[3px] border-sx-brand/70 bg-sx-ink p-2 shadow-2xl sm:w-[250px]">
        <div className="overflow-hidden rounded-[30px] bg-sx-card pb-6 text-white">
          <img src={withBase(v.image)} alt="" loading="lazy" className="h-28 w-full object-cover" />
          <div className="px-4">
            <p className="mt-3 text-sm font-semibold">{v.name}</p>
            <p className="mt-2 flex items-center gap-1.5 rounded-[10px] bg-white/5 px-3 py-2 text-sm font-bold">
              <BadgeCheck size={14} className="text-sx-mint" aria-hidden="true" />
              {v.from}
            </p>
            <ul className="mt-3 flex flex-col gap-1.5" aria-label="Floor mix">
              {v.rows.map((row) => (
                <li key={row.name} className="flex justify-between gap-2 rounded-[10px] bg-white/5 px-3 py-1.5 text-[11px]">
                  <span className="text-white/70">{row.name}</span>
                  <span className="font-semibold">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const VISUALS: Record<ProductCardId, () => React.JSX.Element> = {
  smart: PlanRowsVisual,
  apartment: ApartmentTilesVisual,
  lahore: LahorePhoneVisual,
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
            const style = CARD[card.id]
            const Visual = VISUALS[card.id]
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
                <div className={cn('mt-auto', card.id === 'lahore' ? 'px-6' : card.id === 'apartment' ? 'pl-6' : 'px-5 pb-5')}>
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
