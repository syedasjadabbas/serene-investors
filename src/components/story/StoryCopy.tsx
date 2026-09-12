import type { CSSProperties } from 'react'
import type { StoryState } from '@/types'

type Props = {
  state: StoryState
  active: boolean
  stacked: boolean
  order?: number
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function supportPhrase(heading: string, subtitle?: string) {
  if (!subtitle) return undefined

  const remainder = subtitle
    .replace(new RegExp(`^${escapeRegExp(heading)}\\s+`, 'i'), '')
    .trim()

  return remainder || undefined
}

export function StoryCopy({ state, active, stacked, order }: Props) {
  const style =
    order === undefined
      ? undefined
      : ({ '--story-order': order } as CSSProperties)
  const support = supportPhrase(state.heading, state.subtitle)
  const body =
    state.body && state.body !== state.subtitle && state.body !== support
      ? state.body
      : undefined

  return (
    <div
      data-story-copy
      data-story-id={state.id}
      className={active ? 'story-copy story-copy-state is-active' : 'story-copy story-copy-state'}
      style={style}
      aria-hidden={stacked && !active ? true : undefined}
      inert={stacked && !active ? true : undefined}
    >
      <div className="story-copy__inner">
        <p className="story-copy__kicker">{state.kicker}</p>
        {state.number ? (
          <p className="story-copy__number" aria-hidden="true">
            {state.number}
          </p>
        ) : null}
        <h3 className="story-copy__heading">
          <span className="story-copy__word">{state.heading}</span>
          {support ? <span className="story-copy__support">{support}</span> : null}
        </h3>
        {body ? <p className="story-copy__body">{body}</p> : null}
        {state.note ? <p className="story-copy__note">{state.note}</p> : null}
      </div>
    </div>
  )
}
