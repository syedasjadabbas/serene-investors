import type { CSSProperties, ReactNode } from 'react'

type Props = {
  active: boolean
  stacked: boolean
  children: ReactNode
  order?: number
}

export function StoryVisual({ active, stacked, children, order }: Props) {
  const style =
    order === undefined
      ? undefined
      : ({ '--story-order': order } as CSSProperties)

  return (
    <div
      data-story-visual
      className={active ? 'story-visual story-visual-layer is-active' : 'story-visual story-visual-layer'}
      style={style}
      aria-hidden={stacked && !active ? true : undefined}
      inert={stacked && !active ? true : undefined}
    >
      {children}
    </div>
  )
}
