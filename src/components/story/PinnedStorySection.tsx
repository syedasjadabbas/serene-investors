import { useRef, type ReactNode } from 'react'
import type { StoryState } from '@/types'
import { useFloatingMotion } from '@/hooks/useFloatingMotion'
import { usePinnedStory } from '@/hooks/usePinnedStory'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { StoryCopy } from './StoryCopy'
import { StoryVisual } from './StoryVisual'

type Props = {
  id: string
  headingId: string
  sectionLabel: string
  className?: string
  states: StoryState[]
  visuals: ReactNode[]
  footer?: ReactNode
  segmentVh?: number
  thresholds?: number[]
  stepOnScroll?: boolean
  hysteresis?: number
  releaseVh?: number
  lockMs?: number
  scrubbed?: boolean
}

export function PinnedStorySection({
  id,
  headingId,
  sectionLabel,
  className,
  states,
  visuals,
  footer,
  segmentVh,
  thresholds,
  stepOnScroll,
  hysteresis,
  releaseVh,
  lockMs,
  scrubbed,
}: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const { activeIndex, isPinned } = usePinnedStory(rootRef, pinRef, {
    stateCount: states.length,
    segmentVh,
    thresholds,
    stepOnScroll,
    hysteresis,
    releaseVh,
    lockMs,
    scrubbed,
  })

  usePointerTilt(rootRef, {
    perspective: 1500,
    layers: [
      { selector: '[data-depth="back"]', x: 10, y: 7, rotateX: 1.6, rotateY: 2, z: -36, invert: true },
      { selector: '[data-depth="mid"]:not([data-build-panel])', x: 8, y: 0, rotateX: 1.8, rotateY: 2.2, z: 12 },
      { selector: '[data-build-panel]', x: 7, y: 4, rotateX: 2.1, rotateY: 2.6, z: 18 },
      {
        selector:
          '[data-depth="front"]:not(.story-receipt__card):not(.story-property__card):not([data-build-head])',
        x: 12,
        y: 0,
        rotateX: 2,
        rotateY: 2.8,
        z: 44,
      },
      { selector: '[data-build-head]', x: 10, y: 5, rotateX: 2.4, rotateY: 3, z: 56 },
      { selector: '.story-receipt__card', x: 14, y: 8, rotateX: 2, rotateY: 2.6, rotateZ: -1.2, z: 56 },
      { selector: '.story-property__card', x: 14, y: 8, rotateX: 2.2, rotateY: 3.2, z: 48 },
    ],
  })

  useFloatingMotion(rootRef, [
    { selector: '[data-float-layer="phone"]', y: 9, rotate: 0.8, duration: 5.6 },
    { selector: '[data-float-layer="card"]', y: 7, rotate: 0.55, duration: 6.4 },
  ])

  return (
    <section
      ref={rootRef}
      id={id}
      className={`pinned-story${isPinned ? ' pinned-story--active' : ''}${scrubbed ? ' pinned-story--scrub' : ''} ${className ?? ''}`}
      aria-labelledby={headingId}
    >
      <div ref={pinRef} className="pinned-story__pin">
        <h2 id={headingId} className="sr-only">
          {sectionLabel}
        </h2>

        <div className="pinned-story__grid">
          <div className="pinned-story__copy-stage">
            {states.map((state, index) => (
              <StoryCopy
                key={state.id}
                state={state}
                active={index === activeIndex}
                stacked={isPinned}
                order={index * 2}
              />
            ))}
          </div>
          <div className="pinned-story__visual-stage" data-depth-stage>
            {states.map((state, index) => (
              <StoryVisual
                key={state.id}
                active={index === activeIndex}
                stacked={isPinned}
                order={index * 2 + 1}
              >
                {visuals[index]}
              </StoryVisual>
            ))}
          </div>
        </div>

        {footer ? (
          <div className="pinned-story__footer mx-auto max-w-[var(--container-wide)]">{footer}</div>
        ) : null}
      </div>
    </section>
  )
}
