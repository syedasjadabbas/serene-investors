import type { ReactNode } from 'react'
import { PillLink, type PillVariant } from '@/global/components/ui/PillLink'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { Eyebrow, Highlighted } from './PageSection'

export type HeroAction = { label: string; href: string; variant?: PillVariant }

type Props = {
  eyebrow?: string
  title: string
  /** A substring of `title` shown in the accent colour. */
  highlight?: string
  body?: ReactNode
  actions?: HeroAction[]
  /**
   * light: centred title on the paper background (most pages).
   * dark: rounded dark panel, optionally over a dimmed photo (product pages like Golden Visa).
   */
  tone?: 'light' | 'dark'
  align?: 'center' | 'left'
  /** Background photo for the dark tone. */
  image?: { src: string; alt?: string }
  /** Extra content under the actions (search box, filters, a stat row). */
  children?: ReactNode
  /** Media shown below the hero text in a rounded frame (light tone). */
  media?: ReactNode
}

/** Top block of every inner page. Renders the page's only h1. */
export function PageHero({
  eyebrow,
  title,
  highlight,
  body,
  actions,
  tone = 'light',
  align = 'center',
  image,
  children,
  media,
}: Props) {
  const dark = tone === 'dark'
  const centered = align === 'center'

  const content = (
    <div className={cn('flex flex-col gap-5', centered ? 'items-center text-center' : 'items-start')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1
        className={cn(
          'max-w-4xl text-balance font-heading text-[2.5rem] font-bold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl',
          dark ? 'text-white' : 'text-sx-ink',
        )}
      >
        <Highlighted title={title} highlight={highlight} className={dark ? 'text-sx-mint' : 'text-sx-brand'} />
      </h1>
      {body && (
        <div className={cn('max-w-2xl text-base leading-relaxed sm:text-lg', dark ? 'text-white/75' : 'text-sx-ink/65')}>{body}</div>
      )}
      {actions && actions.length > 0 && (
        <div className={cn('mt-2 flex flex-wrap gap-3', centered && 'justify-center')}>
          {actions.map((action, index) => (
            <PillLink
              key={action.href + action.label}
              href={action.href}
              variant={action.variant ?? (index === 0 ? (dark ? 'light' : 'dark') : dark ? 'outline' : 'brand')}
            >
              {action.label}
            </PillLink>
          ))}
        </div>
      )}
      {children}
    </div>
  )

  if (dark) {
    return (
      <section className="px-3 pt-2 sm:px-6">
        <div className="relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-sx-ink px-5 py-20 text-white sm:px-12 sm:py-28">
          {image && (
            <>
              <img src={withBase(image.src)} alt={image.alt ?? ''} className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sx-ink/80 via-sx-ink/60 to-sx-ink/90" />
            </>
          )}
          <div className="mx-auto max-w-[1240px]">{content}</div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16">
      <div className="mx-auto max-w-[1240px]">
        {content}
        {media && <div className="mt-12 overflow-hidden rounded-[24px]">{media}</div>}
      </div>
    </section>
  )
}
