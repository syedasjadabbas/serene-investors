'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { heroBar, heroModes } from '../_lib/home'

export function HomeHero() {
  const [modeId, setModeId] = useState(heroModes[0].id)
  const mode = heroModes.find((item) => item.id === modeId) ?? heroModes[0]

  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-sx-ink text-white"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={withBase(heroBar.image)}
          alt=""
          className="sx-kenburns h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sx-ink/70 via-sx-ink/45 to-sx-ink/85" />
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center px-4 pt-32 text-center sm:px-8 sm:pt-36">
        <div
          role="group"
          aria-label="What would you like to own?"
          className="flex rounded-full bg-white p-1 text-sm shadow-lg"
        >
          {heroModes.map((item) => {
            const active = item.id === modeId
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={active}
                onClick={() => setModeId(item.id)}
                className={cn(
                  'flex items-center gap-2 rounded-full px-4 py-2 font-medium transition-colors duration-300 sm:px-5',
                  active ? 'bg-sx-forest text-white' : 'text-sx-ink/60 hover:text-sx-ink',
                )}
              >
                {active && (
                  <span className="flex size-6 items-center justify-center rounded-full bg-sx-mint text-sx-ink">
                    <ArrowRight size={14} strokeWidth={2.4} />
                  </span>
                )}
                {item.label}
              </button>
            )
          })}
        </div>

        <h1
          id="home-hero-heading"
          key={mode.id}
          className="sx-menu-in mt-10 max-w-4xl font-heading text-[2.4rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl"
        >
          {mode.heading[0]}
          <br />
          {mode.heading[1]}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{mode.body}</p>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-6 sm:px-8 sm:pb-8">
        <div className="flex flex-col gap-4 rounded-[20px] bg-white p-3 text-sx-ink shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex items-center gap-4 px-1">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-[14px] bg-sx-brand text-white">
              <Building2 size={22} />
            </span>
            <p className="text-base font-medium sm:text-lg">{heroBar.text}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            {heroBar.actions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className="group flex items-center justify-between gap-6 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest sm:text-base"
              >
                {action.label}
                <ArrowCircle tone={action.tone} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
