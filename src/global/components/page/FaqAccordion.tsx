'use client'

import { useId, useState, type ReactNode } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/global/lib/cn'

export type FaqItem = { q: string; a: ReactNode }

/**
 * Accessible accordion of white rounded rows. One row open at a time; the first starts open.
 * Answers glide open (grid-rows 0fr → 1fr) instead of jumping; the round toggle turns from a
 * plus to a filled minus.
 */
export function FaqAccordion({ items, defaultOpen = 0, tone = 'light' }: { items: FaqItem[]; defaultOpen?: number; tone?: 'light' | 'dark' }) {
  const [open, setOpen] = useState(defaultOpen)
  const baseId = useId()
  const dark = tone === 'dark'

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = open === index
        const panelId = `${baseId}-panel-${index}`
        const buttonId = `${baseId}-button-${index}`
        return (
          <li
            key={item.q}
            className={cn(
              'rounded-[20px] transition-shadow duration-300',
              dark ? 'bg-sx-card' : 'bg-white',
              isOpen && !dark && 'shadow-[0_12px_40px_rgba(14,16,15,0.08)]',
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className={cn(
                  'flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-semibold sm:text-[1.2rem]',
                  dark ? 'text-white' : 'text-sx-ink',
                )}
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex size-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300',
                    isOpen ? 'bg-sx-brand text-white' : dark ? 'bg-white/10 text-sx-mint' : 'bg-sx-paper text-sx-brand',
                  )}
                >
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <div className={cn('max-w-3xl px-6 pb-6 text-base leading-relaxed', dark ? 'text-white/70' : 'text-sx-ink/70')}>
                  {item.a}
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
