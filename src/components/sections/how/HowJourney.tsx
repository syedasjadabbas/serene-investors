import { useRef, type CSSProperties } from 'react'
import type { StoryState } from '@/types'
import { howPageJourney } from '@/data'
import { HowPageVisual } from '@/components/sections/how/HowJourneyVisuals'
import { useFloatingMotion } from '@/hooks/useFloatingMotion'
import { useHowJourney } from '@/hooks/useHowJourney'
import { usePointerTilt } from '@/hooks/usePointerTilt'

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
  return (
    <div
      data-how-copy
      data-how-id={state.id}
      className={active ? 'how-journey__copy is-active' : 'how-journey__copy'}
      style={{ '--how-order': order } as CSSProperties}
      aria-hidden={stacked && !active ? true : undefined}
      inert={stacked && !active ? true : undefined}
    >
      <p className="how-kicker">{state.kicker}</p>
      {state.number ? (
        <p className="how-journey__number" aria-hidden="true">
          {state.number}
        </p>
      ) : null}
      <h2 className="how-journey__heading">
        <span>{state.heading}</span>
        {state.subtitle ? <span>{state.subtitle}</span> : null}
      </h2>
      {state.body ? <p className="how-journey__body">{state.body}</p> : null}
      {state.note ? <p className="how-journey__note">{state.note}</p> : null}
    </div>
  )
}

export function HowJourney() {
  const rootRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const { activeIndex, isPinned } = useHowJourney(rootRef, pinRef, howPageJourney.length)

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
      className={`how-journey${isPinned ? ' how-journey--pinned' : ''}`}
      aria-label="How a sample investment moves from choose to receive"
    >
      <div ref={pinRef} className="how-journey__pin">
        <div className="how-journey__grid">
          <div className="how-journey__copy-stage">
            {howPageJourney.map((state, index) => (
              <JourneyCopy
                key={state.id}
                state={state}
                active={index === activeIndex}
                stacked={isPinned}
                order={index * 2}
              />
            ))}
          </div>

          <div className="how-journey__visual-stage" data-depth-stage>
            {howPageJourney.map((state, index) => (
              <div
                key={state.id}
                data-how-visual
                data-how-id={state.id}
                className={index === activeIndex ? 'how-journey__visual is-active' : 'how-journey__visual'}
                style={{ '--how-order': index * 2 + 1 } as CSSProperties}
                aria-hidden={isPinned && index !== activeIndex ? true : undefined}
                inert={isPinned && index !== activeIndex ? true : undefined}
              >
                <HowPageVisual id={state.id} />
              </div>
            ))}
          </div>
        </div>

        <ol className="how-journey__steps" aria-hidden="true">
          {howPageJourney.map((state, index) => (
            <li key={state.id} className={index === activeIndex ? 'is-active' : undefined}>
              {state.number}
            </li>
          ))}
        </ol>
        <div className="how-journey__progress-track">
          <span data-how-progress className="how-journey__progress" />
        </div>
      </div>
    </section>
  )
}
