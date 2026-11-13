'use client'

import { useRef } from 'react'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'
import { locations, stats } from '../_lib/home'

export function StatsGrid() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  return (
    <section ref={ref} aria-label={stats.caption} className="px-4 sm:px-8">
      <ul className="mx-auto grid max-w-[1240px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.items.map((item) => (
          <li
            key={item.label}
            data-reveal-item
            className="flex min-h-[180px] flex-col justify-between rounded-[20px] bg-sx-card p-5 text-white sm:min-h-[220px] sm:p-7"
          >
            <span className="whitespace-nowrap font-heading text-4xl font-bold tracking-[-0.03em] sm:text-5xl xl:text-6xl">
              {item.value}
            </span>
            <span className="text-sm text-white/70 sm:text-base">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function LocationsMarquee() {
  const row = [...locations.items, ...locations.items]

  return (
    <section aria-label={locations.caption} className="py-20 sm:py-28">
      <p className="text-center text-sm text-sx-ink/60">{locations.caption}</p>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="sx-marquee gap-3 sm:gap-4">
          {row.map((name, index) => (
            <li
              key={`${name}-${index}`}
              aria-hidden={index >= locations.items.length}
              className="flex h-24 min-w-[220px] items-center justify-center rounded-[20px] bg-white px-8 font-heading text-xl font-bold tracking-[-0.02em] text-sx-ink sm:h-28 sm:text-2xl"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
