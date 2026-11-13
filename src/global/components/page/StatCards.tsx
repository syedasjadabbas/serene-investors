import { cn } from '@/global/lib/cn'

type Stat = { value: string; label: string }

/** Row of big-number cards. `light` = white cards on paper, `dark` = dark cards. */
export function StatCards({ items, tone = 'light', caption, className }: { items: Stat[]; tone?: 'light' | 'dark'; caption?: string; className?: string }) {
  return (
    <div className={className}>
      <ul className={cn('grid grid-cols-2 gap-3 sm:gap-4', items.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3')}>
        {items.map((item) => (
          <li
            key={item.label}
            className={cn(
              'flex min-h-[150px] flex-col justify-between gap-6 rounded-[20px] p-5 sm:min-h-[190px] sm:p-7',
              tone === 'dark' ? 'bg-sx-card text-white' : 'bg-white text-sx-ink',
            )}
          >
            <span className="whitespace-nowrap font-heading text-3xl font-bold tracking-[-0.03em] sm:text-5xl">{item.value}</span>
            <span className={cn('text-sm sm:text-base', tone === 'dark' ? 'text-white/65' : 'text-sx-ink/60')}>{item.label}</span>
          </li>
        ))}
      </ul>
      {caption && <p className={cn('mt-3 text-xs', tone === 'dark' ? 'text-white/45' : 'text-sx-ink/45')}>{caption}</p>}
    </div>
  )
}
