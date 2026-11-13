import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/global/lib/cn'

const TONES = {
  brand: 'bg-sx-brand text-white',
  mint: 'bg-sx-mint text-sx-ink',
  sand: 'bg-sx-sand text-sx-ink',
  dark: 'bg-sx-ink text-white',
  light: 'bg-white text-sx-ink',
} as const

type Props = {
  tone?: keyof typeof TONES
  size?: 'sm' | 'md'
  className?: string
}

/** The round arrow badge used on cards and pill buttons. Decorative: the parent link carries the label. */
export function ArrowCircle({ tone = 'brand', size = 'md', className }: Props) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-45',
        size === 'md' ? 'size-9' : 'size-7',
        TONES[tone],
        className,
      )}
    >
      <ArrowUpRight size={size === 'md' ? 18 : 15} strokeWidth={2.2} />
    </span>
  )
}

export type ArrowTone = keyof typeof TONES
