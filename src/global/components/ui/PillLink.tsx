import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/global/lib/cn'
import { ArrowCircle, type ArrowTone } from './ArrowCircle'

const VARIANTS: Record<string, { pill: string; arrow: ArrowTone }> = {
  dark: { pill: 'bg-sx-ink text-white hover:bg-sx-forest', arrow: 'mint' },
  brand: { pill: 'bg-sx-brand text-white hover:bg-sx-forest', arrow: 'light' },
  light: { pill: 'bg-white text-sx-ink hover:bg-sx-sand', arrow: 'brand' },
  outline: { pill: 'border border-current text-current hover:bg-sx-ink/5', arrow: 'dark' },
}

export type PillVariant = 'dark' | 'brand' | 'light' | 'outline'

type Props = {
  href: string
  children: ReactNode
  variant?: PillVariant
  className?: string
  onClick?: () => void
}

/** Rounded call-to-action with the round arrow badge on the right. The site's standard button-link. */
export function PillLink({ href, children, variant = 'dark', className, onClick }: Props) {
  const v = VARIANTS[variant]
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group inline-flex items-center justify-between gap-5 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors sm:text-base',
        v.pill,
        className,
      )}
    >
      {children}
      <ArrowCircle tone={v.arrow} size="sm" />
    </Link>
  )
}
