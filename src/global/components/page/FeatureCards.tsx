import type { LucideIcon } from 'lucide-react'
import { cn } from '@/global/lib/cn'

export type Feature = { title: string; body: string; icon?: LucideIcon }

/** Grid of icon + title + text cards. Use for benefits, principles, document lists. */
export function FeatureCards({
  items,
  tone = 'white',
  columns = 3,
  className,
}: {
  items: Feature[]
  tone?: 'white' | 'dark'
  columns?: 2 | 3 | 4
  className?: string
}) {
  const dark = tone === 'dark'
  return (
    <ul
      className={cn(
        'grid gap-3 sm:gap-4 sm:grid-cols-2',
        columns === 3 && 'lg:grid-cols-3',
        columns === 4 && 'lg:grid-cols-4',
        className,
      )}
    >
      {items.map(({ title, body, icon: Icon }) => (
        <li key={title} className={cn('flex flex-col gap-4 rounded-[20px] p-6 sm:p-7', dark ? 'bg-sx-card text-white' : 'bg-white text-sx-ink')}>
          {Icon && (
            <span
              className={cn(
                'flex size-11 items-center justify-center rounded-[12px]',
                dark ? 'bg-sx-mint text-sx-ink' : 'bg-sx-forest text-sx-mint',
              )}
            >
              <Icon size={22} aria-hidden="true" />
            </span>
          )}
          <h3 className="font-heading text-xl font-semibold tracking-[-0.015em]">{title}</h3>
          <p className={cn('text-base leading-relaxed', dark ? 'text-white/65' : 'text-sx-ink/65')}>{body}</p>
        </li>
      ))}
    </ul>
  )
}
