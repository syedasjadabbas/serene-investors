'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { heroBar, heroModes } from '../_lib/home'

export function HomeHero() {
  const [modeId, setModeId] = useState(heroModes[0].id)
  const mode = heroModes.find((item) => item.id === modeId) ?? heroModes[0]
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      data-home-hero
      aria-labelledby="home-hero-heading"
      className="relative isolate flex min-h-[clamp(620px,100svh,960px)] flex-col justify-between gap-8 overflow-hidden bg-sx-ink text-white"
    >
      <div className="absolute inset-0 -z-10">
        {reducedMotion ? (
          <img src={withBase(heroBar.videoPoster)} alt="" className="h-full w-full object-cover" fetchPriority="high" />
        ) : (
          // Decorative loop; the photo shows as the poster while the video loads.
          <video
            className="h-full w-full object-cover"
            src={withBase(heroBar.video)}
            poster={withBase(heroBar.videoPoster)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-sx-ink/70 via-sx-ink/45 to-sx-ink/85" />
      </div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center justify-center px-4 pb-4 pt-24 text-center sm:px-8 sm:pt-28">
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
          className="sx-menu-in mt-6 max-w-4xl font-heading text-[clamp(2rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-balance sm:mt-8"
        >
          {mode.heading[0]}
          <br />
          {mode.heading[1]}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">{mode.body}</p>
      </div>

      <div className="mx-auto w-full max-w-[780px] px-4 pb-6 sm:px-8 sm:pb-8">
        <div className="flex flex-col gap-3 rounded-[24px] bg-sx-ink/75 p-2.5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/15 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:py-2 sm:pl-3 sm:pr-2">
          <div className="flex items-center gap-3 px-1">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sx-mint/15 text-sx-mint ring-1 ring-sx-mint/25">
              <Building2 size={18} aria-hidden="true" />
            </span>
            <p className="flex flex-wrap items-center gap-x-2 text-sm font-medium tracking-[-0.01em] text-white/90 sm:text-[0.9375rem]">
              <span>{heroBar.place}</span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <span className="font-semibold text-sx-mint">{heroBar.from}</span>
            </p>
          </div>

          <div className="flex items-center justify-between gap-2 sm:justify-end">
            {heroBar.actions.map((action) =>
              action.variant === 'primary' ? (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-mint"
                >
                  {action.label}
                  <ArrowCircle tone="dark" size="sm" />
                </Link>
              ) : (
                <Link
                  key={action.href}
                  href={action.href}
                  className="inline-flex min-h-10 items-center whitespace-nowrap rounded-full px-4 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {action.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
