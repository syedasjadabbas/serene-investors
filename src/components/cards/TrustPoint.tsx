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
      <h3 className="mt-3 max-w-[16ch] text-[1.35rem] font-medium tracking-tight">{item.title}</h3>
      <p className="mt-2 max-w-[36ch] text-[length:var(--type-body)] leading-[var(--lh-body)] text-muted">{item.body}</p>
    </li>
  )
}
