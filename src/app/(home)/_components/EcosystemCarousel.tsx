'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { withBase } from '@/global/lib/asset'
import { ecosystem } from '../_lib/home'

export function EcosystemCarousel() {
  const railRef = useRef<HTMLUListElement>(null)

  function scrollRail(direction: 1 | -1) {
    const rail = railRef.current
    if (!rail) return
    const card = rail.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 16 : rail.clientWidth * 0.8
    rail.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section aria-labelledby="ecosystem-heading" className="pb-20 sm:pb-28">
      <div className="mx-auto flex max-w-[1240px] items-end justify-between gap-6 px-4 sm:px-8">
        <div>
          <h2 id="ecosystem-heading" className="font-heading text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
            {ecosystem.heading}
          </h2>
          <p className="mt-2 text-base text-white/65">{ecosystem.body}</p>
        </div>
        <div className="hidden gap-2 sm:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scrollRail(dir)}
              aria-label={dir === -1 ? 'Previous' : 'Next'}
              className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-sx-ink"
            >
              {dir === -1 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          ))}
        </div>
      </div>

      <ul
        ref={railRef}
        className="sx-rail mt-8 px-4 sm:px-[max(2rem,calc((100vw-1240px)/2+2rem))]"
        aria-label="Serene Investors services"
      >
        {ecosystem.cards.map((card) => (
          <li key={card.title} className="w-[78vw] sm:w-[300px]">
            <Link
              href={card.href}
              className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-sx-card transition-colors hover:bg-sx-card-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={withBase(card.image)}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-heading text-xl font-semibold leading-snug text-white">{card.title}</h3>
                <p className="mt-auto flex items-center justify-between text-sm text-white/60">
                  {card.meta}
                  <ArrowRight size={18} className="text-white transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
