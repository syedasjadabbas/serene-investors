import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/global/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type Shared = {
  variant?: Variant
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-ink border border-primary/25 shadow-xs hover:bg-accent hover:border-accent',
  secondary:
    'bg-surface text-ink border border-ink/[0.12] hover:bg-bg-warm hover:border-ink/20 shadow-2xs',
  ghost:
    'bg-transparent text-ink hover:text-primary hover:bg-ink/[0.04] border border-transparent hover:border-ink/[0.08]',
}

const base =
  'inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-45 cursor-pointer select-none'

export function Button({
  variant = 'primary',
  className,
  children,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & Shared) {
  return (
    <button type={type} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

type ButtonLinkProps = Shared & {
  to?: string
  href?: string
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>

export function ButtonLink({
  to,
  href,
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const targetHref = href ?? to ?? '/'
  return (
    <Link href={targetHref} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
