'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import type { StoryState } from '@/global/types/content'
import { howPageJourney } from '@/global/data/how-it-works'
import { HowPageVisual } from './HowJourneyVisuals'
import { useFloatingMotion } from '../_hooks/useFloatingMotion'
import { useHowJourney } from '../_hooks/useHowJourney'
import { usePointerTilt } from '@/global/hooks/usePointerTilt'
import { cn } from '@/global/lib/cn'

function JourneyCopy({
  state,
  active,
  stacked,
  order,
}: {
  state: StoryState
  active: boolean
  stacked: boolean
  order: number
}) {
  const headingText = state.heading
  let subtitleText = state.subtitle || ''
  if (
    state.id === 'choose' ||
    (headingText.toLowerCase() === 'choose' && subtitleText.startsWith('A '))
  ) {
    subtitleText = subtitleText.replace(/^A\s+/, 'a ')
  }

  return (
    <div
      data-how-copy
      data-how-id={state.id}
      className={cn(
        'how-journey__copy w-full',
        stacked
          ? 'lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center'
          : 'mb-12 lg:mb-0',
        active ? 'is-active' : stacked ? 'lg:pointer-events-none' : '',
      )}
      style={{ '--how-order': order } as CSSProperties}
      aria-hidden={stacked && !active ? true : undefined}
      inert={stacked && !active ? true : undefined}
    >
      <div className="flex items-center gap-3 mb-4">
        {state.number ? (
          <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full inline-block">
            {state.number}
          </span>
        ) : null}
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">
          {state.kicker}
        </span>
      </div>

      <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-ink flex flex-wrap items-baseline gap-2">
        <span>{headingText}</span>
        {subtitleText ? (
          <span className="text-ink/80 font-normal">{subtitleText}</span>
        ) : null}
      </h2>

      {state.body ? (
        <p className="text-lg text-ink/70 leading-relaxed mb-4 max-w-xl">
          {state.body}
        </p>
      ) : null}

      {state.note ? (
        <p className="text-xs font-medium uppercase tracking-wider text-ink/40">
          {state.note}
        </p>
      ) : null}
    </div>
  )
}

export function HowJourney() {
  const rootRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { activeIndex, isPinned } = useHowJourney(rootRef, pinRef, howPageJourney.length)
  const activePinned = mounted && isPinned

  usePointerTilt(rootRef, {
    perspective: 1400,
    layers: [
      { selector: '[data-depth="back"]', x: 10, y: 7, rotateX: 1.5, rotateY: 1.9, z: -32, invert: true },
      { selector: '[data-depth="mid"]', x: 8, y: 0, rotateX: 1.8, rotateY: 2.2, z: 14 },
      { selector: '[data-depth="front"]', x: 12, y: 0, rotateX: 2, rotateY: 2.6, z: 40 },
    ],
  })
  useFloatingMotion(rootRef, [
    { selector: '[data-float-layer="phone"]', y: 8, rotate: 0.7, duration: 5.6 },
    { selector: '[data-float-layer="card"]', y: 6, rotate: 0.5, duration: 6.2 },
  ])

  return (
    <section
      ref={rootRef}
      id="how-journey"
      className={cn('how-journey bg-bg-warm relative overflow-hidden', activePinned && 'how-journey--pinned')}
      aria-label="How a sample investment moves from choose to receive"
    >
      <div ref={pinRef} className="how-journey__pin max-w-7xl mx-auto px-6 py-20 min-h-[500px] lg:min-h-screen flex flex-col justify-center">
        <div className="how-journey__grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="how-journey__copy-stage relative min-h-[320px] lg:min-h-[440px] flex flex-col justify-center">
            {howPageJourney.map((state, index) => (
              <JourneyCopy
                key={state.id}
                state={state}
                active={index === activeIndex}
                stacked={activePinned}
                order={index * 2}
              />
            ))}
          </div>

          <div className="how-journey__visual-stage relative min-h-[360px] lg:min-h-[460px] flex flex-col justify-center" data-depth-stage>
            {howPageJourney.map((state, index) => (
              <div
                key={state.id}
                data-how-visual
                data-how-id={state.id}
                className={cn(
                  'how-journey__visual w-full',
                  activePinned
                    ? 'lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-center'
                    : 'mb-12 lg:mb-0',
                  index === activeIndex
                    ? 'is-active'
                    : activePinned
                      ? 'lg:pointer-events-none'
                      : '',
                )}
                style={{ '--how-order': index * 2 + 1 } as CSSProperties}
                aria-hidden={activePinned && index !== activeIndex ? true : undefined}
                inert={activePinned && index !== activeIndex ? true : undefined}
              >
                <HowPageVisual id={state.id} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-4 border-t border-line/60">
          <ol className="flex items-center gap-6 text-xs font-mono font-medium text-ink/40 list-none p-0 m-0" aria-hidden="true">
            {howPageJourney.map((state, index) => (
              <li
                key={state.id}
                className={cn(
                  'transition-colors duration-200',
                  index === activeIndex ? 'text-emerald-800 font-bold' : 'text-ink/40',
                )}
              >
                {state.number}
              </li>
            ))}
          </ol>
          <div className="how-journey__progress-track h-1 w-full max-w-xs bg-line/80 overflow-hidden mt-3 rounded-full">
            <span data-how-progress className="how-journey__progress block h-full w-full bg-primary origin-left scale-x-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
