import { cn } from '@/lib/cn'

type Props = {
  children: string
  className?: string
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill bg-soft px-1.5 py-0.5 text-[10px] font-medium leading-none text-soft-ink',
        className,
      )}
    >
      {children}
    </span>
  )
}
