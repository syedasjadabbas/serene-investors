'use client'

import { useId, useState, type ReactNode } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/global/lib/cn'

export type FaqItem = { q: string; a: ReactNode }

/** Accessible accordion of white rounded rows. One row open at a time; the first starts open. */
export function FaqAccordion({ items, defaultOpen = 0, tone = 'light' }: { items: FaqItem[]; defaultOpen?: number; tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(defaultOpen)
  const baseId = useId()
  const dark = tone === 'dark'

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `${baseId}-panel-${index}`
        return (
          <li key={item.q} className={cn('rounded-[16px]', dark ? 'bg-sx-card' : 'bg-white')}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className={cn(
                  'flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold sm:text-lg',
                  dark ? 'text-white' : 'text-sx-ink',
                )}
              >
                {item.q}
                <Plus
                  size={20}
                  aria-hidden="true"
                  className={cn('shrink-0 transition-transform duration-300', dark ? 'text-sx-mint' : 'text-sx-brand', isOpen && 'rotate-45')}
                />
              </button>
            </h3>
            <div
              id={panelId}
              hidden={!isOpen}
              className={cn('px-5 pb-5 text-base leading-relaxed', dark ? 'text-white/70' : 'text-sx-ink/70')}
            >
              {item.a}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
