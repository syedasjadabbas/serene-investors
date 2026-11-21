'use client'

import type { ReactNode } from 'react'
import { PillLink } from '@/global/components/ui/PillLink'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import type { HeroAction } from './PageHero'
import { Eyebrow, Highlighted } from './PageSection'

type Props = {
  eyebrow?: string
  title: string
  /** A substring of `title` shown in the accent colour. */
  highlight?: string
  body?: ReactNode
  actions?: HeroAction[]
  /**
   * tint: pale mint background, dark text, a visual rising from the bottom (Projects, Smart Property).
   * dark: full-bleed photo or video under a dark overlay, white text (The Resort, Trust & compliance).
   */
  tone?: 'tint' | 'dark'
  image?: { src: string; alt?: string }
  /** Looping background video for the dark tone (the image is its poster). */
  video?: string
  /** For the tint tone: the element that rises from the bottom edge (a photo card, a phone). */
  visual?: ReactNode
  /** Extra row under the actions (a trust line, small badges). */
  children?: ReactNode
}

/**
 * Full-screen hero for product pages. It stays pinned while the page content slides up over it,
 * so wrap everything that follows in <HeroCover>. Renders the page's only h1.
 */
export function ProductHero({ eyebrow, title, highlight, body, actions, tone = 'tint', image, video, visual, children }: Props) {
  const dark = tone === 'dark'
  const still = usePrefersReducedMotion()

  return (
    <section
      className={cn(
        // Pulled up under the floating navbar. Only pins when the viewport is tall enough so zoomed-in
        // or short screens never get overlapped by HeroCover.
        'relative isolate -mt-24 flex min-h-[clamp(540px,100svh,900px)] flex-col overflow-hidden rounded-b-[30px] [@media(min-height:600px)]:sticky [@media(min-height:600px)]:top-0',
        dark ? 'bg-sx-ink text-white' : 'bg-gradient-to-b from-sx-tint to-sx-paper text-sx-ink',
      )}
    >
      {dark && (image || video) && (
        <div className="absolute inset-0 -z-10">
          {video && !still ? (
            <video
              className="h-full w-full object-cover"
              src={withBase(video)}
              poster={image ? withBase(image.src) : undefined}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          ) : (
            image && <img src={withBase(image.src)} alt={image.alt ?? ''} className="h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-sx-ink/75 via-sx-ink/55 to-sx-ink/90" />
        </div>
      )}

      <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col items-center gap-5 px-4 pb-16 pt-28 text-center sm:px-8 sm:pb-20 sm:pt-36">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.2rem,5vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.035em]">
          <Highlighted title={title} highlight={highlight} className={dark ? 'text-sx-mint' : 'text-sx-brand'} />
        </h1>
        {body && <div className={cn('max-w-xl text-base leading-relaxed sm:text-lg', dark ? 'text-white/75' : 'text-sx-ink/65')}>{body}</div>}
        {actions && actions.length > 0 && (
          <div className="mt-2 flex flex-wrap justify-center gap-3">
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
        {visual && !dark && <div className="mt-auto w-full max-w-3xl pt-8">{visual}</div>}
      </div>
    </section>
  )
}

/**
 * Everything after a ProductHero: a paper sheet with rounded top corners that scrolls up over the
 * pinned hero.  for dark product pages (rounded at the bottom too, above the paper
 * newsletter).
 */
export function HeroCover({ children, tone = 'paper' }: { children: ReactNode; tone?: 'paper' | 'dark' }) {
  return (
    <div className={cn('relative z-[2] -mt-6 rounded-t-[32px] pt-6', tone === 'dark' ? 'rounded-b-[32px] bg-sx-ink text-white' : 'bg-sx-paper')}>
      {children}
    </div>
  )
}
