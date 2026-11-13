import type { ReactNode, Ref } from 'react'
import { cn } from '@/global/lib/cn'

// Building blocks for inner pages. See README "Inner page kit" for how they fit together.

export type Tone = 'paper' | 'white' | 'dark'

const SECTION_TONE: Record<Tone, string> = {
  paper: 'bg-sx-paper text-sx-ink',
  white: 'bg-white text-sx-ink',
  dark: 'bg-sx-ink text-white',
}

type SectionProps = {
  children: ReactNode
  tone?: Tone
  id?: string
  labelledBy?: string
  label?: string
  className?: string
  /** Inner width: 'default' 1240px, 'narrow' 880px for reading, 'wide' 1400px. */
  width?: 'default' | 'narrow' | 'wide'
  /** Vertical padding. Use 'top' when the next section continues on the same background. */
  pad?: 'both' | 'top' | 'bottom' | 'none'
  /** For reveal/scroll hooks that need the section element. */
  ref?: Ref<HTMLElement>
}

const PAD = {
  both: 'py-16 sm:py-24',
  top: 'pt-16 sm:pt-24',
  bottom: 'pb-16 sm:pb-24',
  none: '',
} as const

/** Standard section: full-width band with consistent padding and a centred inner column. */
export function PageSection({ children, tone = 'paper', id, labelledBy, label, className, width = 'default', pad = 'both', ref }: SectionProps) {
  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      aria-label={label}
      className={cn('px-4 sm:px-8', PAD[pad], SECTION_TONE[tone], className)}
    >
      <div
        className={cn(
          'mx-auto w-full',
          width === 'narrow' ? 'max-w-[880px]' : width === 'wide' ? 'max-w-[1400px]' : 'max-w-[1240px]',
        )}
      >
        {children}
      </div>
    </section>
  )
}

/** Small pill label above a heading ("Step 01", "Why we do it"). */
export function Eyebrow({ children, tone = 'mint', className }: { children: ReactNode; tone?: 'mint' | 'sand' | 'brand' | 'dark'; className?: string }) {
  const tones = {
    mint: 'bg-sx-mint text-sx-ink',
    sand: 'bg-sx-sand text-sx-ink',
    brand: 'bg-sx-brand text-white',
    dark: 'bg-sx-ink text-white',
  }
  return (
    <span className={cn('inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold', tones[tone], className)}>
      {children}
    </span>
  )
}

/** Renders `title` with `highlight` (a substring of it) in the accent colour. */
export function Highlighted({ title, highlight, className }: { title: string; highlight?: string; className?: string }) {
  if (!highlight || !title.includes(highlight)) return <>{title}</>
  const [before, ...rest] = title.split(highlight)
  return (
    <>
      {before}
      <span className={className}>{highlight}</span>
      {rest.join(highlight)}
    </>
  )
}

type HeadingProps = {
  id?: string
  eyebrow?: string
  title: string
  highlight?: string
  body?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  /** Heading level; sections use h2, a page's top block uses h1 via PageHero. */
  as?: 'h2' | 'h3'
  action?: ReactNode
  className?: string
}

/** Eyebrow + heading + supporting text, used at the top of every section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  highlight,
  body,
  align = 'left',
  tone = 'light',
  as: Tag = 'h2',
  action,
  className,
}: HeadingProps) {
  const centered = align === 'center'
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        centered ? 'items-center text-center' : 'items-start',
        Boolean(action) && !centered && 'sm:flex-row sm:items-end sm:justify-between',
        className,
      )}
    >
      <div className={cn('flex flex-col gap-4', centered ? 'items-center' : 'items-start')}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Tag
          id={id}
          className={cn(
            'max-w-3xl scroll-mt-28 text-balance font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]',
            tone === 'dark' ? 'text-white' : 'text-sx-ink',
          )}
        >
          <Highlighted title={title} highlight={highlight} className={tone === 'dark' ? 'text-sx-mint' : 'text-sx-brand'} />
        </Tag>
        {body && (
          <div className={cn('max-w-2xl text-base leading-relaxed sm:text-lg', tone === 'dark' ? 'text-white/70' : 'text-sx-ink/65')}>
            {body}
          </div>
        )}
      </div>
      {action}
    </div>
  )
}

/** Rounded content card. `dark` for cards on dark bands or for emphasis on light ones. */
export function Card({
  children,
  tone = 'white',
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  tone?: 'white' | 'paper' | 'dark' | 'forest'
  className?: string
  as?: 'div' | 'article' | 'li'
}) {
  const tones = {
    white: 'bg-white text-sx-ink',
    paper: 'bg-sx-paper text-sx-ink',
    dark: 'bg-sx-card text-white',
    forest: 'bg-sx-forest text-white',
  }
  return <Tag className={cn('rounded-[20px] p-6 sm:p-8', tones[tone], className)}>{children}</Tag>
}
