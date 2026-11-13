'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Award, CheckCircle2 } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { products } from '../_lib/home'

const TITLE_TONE = {
  properties: 'text-sx-mint',
  funds: 'text-sx-sand',
  visa: 'text-white',
} as const

function ActivityVisual() {
  return (
    <ul className="flex flex-col gap-2.5" aria-label="Sample investor activity">
      {products.activity.map((row, index) => (
        <li
          key={row.name}
          className="flex items-center gap-3 rounded-[14px] bg-white p-2.5 text-sx-ink shadow-sm"
          style={{ marginLeft: `${index * 12}px` }}
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-sx-mint text-xs font-bold">
            {row.initials}
          </span>
          <span className="text-sm leading-tight">
            <span className="block font-semibold">{row.name}</span>
            <span className="text-sx-ink/60">{row.action}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}

function AllocationVisual() {
  return (
    <div className="rounded-[14px] bg-sx-card-2 p-4" aria-label="Sample fund allocation">
      <p className="text-xs uppercase tracking-[0.14em] text-white/50">Sample allocation</p>
      <ul className="mt-3 flex flex-col gap-3">
        {products.allocation.map((row) => (
          <li key={row.label}>
            <div className="flex justify-between text-sm text-white/80">
              <span>{row.label}</span>
              <span className="font-semibold text-white">{row.value}%</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-white/10">
              <div className="h-2 rounded-full bg-sx-sand" style={{ width: `${row.value}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function VisaVisual() {
  return (
    <div className="relative flex items-center justify-center rounded-[14px] bg-gradient-to-br from-sx-forest to-sx-card-2 py-8">
      <div className="flex flex-col items-center gap-3 rounded-[16px] border border-white/15 bg-white/5 px-8 py-6 text-center">
        <Award size={36} className="text-sx-sand" />
        <p className="font-heading text-lg font-bold uppercase tracking-[0.08em] text-white">Golden Visa</p>
        <p className="flex items-center gap-1.5 text-xs text-white/70">
          <CheckCircle2 size={14} className="text-sx-mint" /> Eligibility steps
        </p>
      </div>
    </div>
  )
}

const VISUALS = { properties: ActivityVisual, funds: AllocationVisual, visa: VisaVisual } as const

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

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {products.cards.map((card) => {
            const Visual = VISUALS[card.id as keyof typeof VISUALS]
            return (
              <Link
                key={card.id}
                href={card.href}
                data-reveal-item
                className="group relative flex min-h-[460px] flex-col gap-6 rounded-[20px] bg-sx-card p-6 transition-colors hover:bg-sx-card-2 sm:p-7"
              >
                <div>
                  <h3
                    className={`font-heading text-3xl font-bold tracking-[-0.02em] ${TITLE_TONE[card.id as keyof typeof TITLE_TONE]}`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">{card.body}</p>
                </div>
                <div className="mb-12 mt-auto">
                  <Visual />
                </div>
                <ArrowCircle tone="mint" className="absolute bottom-6 right-6" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
