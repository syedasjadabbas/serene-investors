import type { TrustItem } from '@/types'

type Props = {
  item: TrustItem
  index: number
}

export function TrustPoint({ item, index }: Props) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <li data-trust-point className="trust-point">
      <p className="trust-point__index home-kicker" aria-hidden="true">
        {number}
      </p>
      <h3 className="trust-point__title">{item.title}</h3>
      <p className="trust-point__body">{item.body}</p>
    </li>
  )
}
