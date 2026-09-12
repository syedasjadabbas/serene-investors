import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

type Shared = {
  variant?: Variant
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-primary-ink hover:bg-accent',
  secondary: 'bg-accent text-accent-ink hover:bg-primary',
  ghost: 'bg-transparent text-ink hover:text-primary',
}

const base =
  'inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-sm font-medium transition-[transform,color,background-color,filter] duration-[var(--duration-fast)] ease-[var(--ease-out-quart)] hover:-translate-y-0.5 hover:scale-[1.015] active:scale-[0.98]'

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
  to: string
  onClick?: ComponentProps<typeof Link>['onClick']
}

export function ButtonLink({
  to,
  variant = 'primary',
  className,
  children,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link to={to} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  )
}
