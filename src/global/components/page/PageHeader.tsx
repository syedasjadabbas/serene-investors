import type { ReactNode } from 'react'
import { cn } from '@/global/lib/cn'
import { Eyebrow, Highlighted } from './PageSection'

type Props = {
  title: string
  highlight?: string
  eyebrow?: string
  body?: ReactNode
  /** Right-hand slot on wide screens (filter button, count, actions). */
  aside?: ReactNode
  align?: 'left' | 'center'
  /** Optional back link row above the title ("← All guides"). */
  back?: ReactNode
}

/**
 * The plain page title used by list, tool and content pages (listings, calculator, contact, blog,
 * team): a 44px heading with a short line under it, left-aligned on the 1240px column.
 * Product pages use ProductHero instead. Renders the page's only h1.
 */
export function PageHeader({ title, highlight, eyebrow, body, aside, align = 'left', back }: Props) {
  const centered = align === 'center'
  return (
    <header className="px-4 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-14">
      <div
        className={cn(
          'mx-auto flex max-w-[1240px] flex-col gap-6',
          centered ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between',
        )}
      >
        <div className={cn('flex flex-col gap-4', centered && 'items-center')}>
          {back}
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="max-w-3xl text-balance font-heading text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-sx-ink sm:text-[2.75rem]">
            <Highlighted title={title} highlight={highlight} className="text-sx-brand" />
          </h1>
          {body && <div className="max-w-2xl text-base leading-relaxed text-sx-ink/60 sm:text-lg">{body}</div>}
        </div>
        {aside && <div className="shrink-0">{aside}</div>}
      </div>
    </header>
  )
}
