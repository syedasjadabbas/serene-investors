'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { Eyebrow } from './PageSection'

export type Step = {
  step: string
  title: string
  body: ReactNode
  image?: { src: string; alt: string }
  /** Any visual instead of an image (a mini UI card). */
  visual?: ReactNode
  action?: ReactNode
}

/**
 * "Step 01 / Browse" scrollytelling: on wide screens the step texts scroll down the left while a
 * pinned panel on the right cross-fades to the active step's image. On phones each step shows its
 * image inline. `tone="dark"` for dark product pages.
 */
export function StickySteps({ steps, tone = 'light' }: { steps: Step[]; tone?: 'light' | 'dark' }) {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const dark = tone === 'dark'

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index))
        }
      },
      // A step counts as active while it crosses the middle of the screen.
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.forEach((node) => node && observer.observe(node))
    return () => observer.disconnect()
  }, [steps.length])

  const media = (s: Step) =>
    s.image ? <img src={withBase(s.image.src)} alt={s.image.alt} loading="lazy" className="h-full w-full object-cover" /> : s.visual

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <ol className="flex flex-col">
        {steps.map((s, index) => (
          <li key={s.step}>
            <div
              ref={(node) => {
                refs.current[index] = node
              }}
              data-index={index}
              className={cn(
                'flex flex-col justify-center gap-4 py-8 transition-opacity duration-500 md:min-h-[clamp(380px,65vh,660px)] md:py-0',
                active === index ? 'md:opacity-100' : 'md:opacity-35',
              )}
            >
              <Eyebrow tone={dark ? 'mint' : 'sand'}>{s.step}</Eyebrow>
              <h3 className={cn('font-heading text-4xl font-bold tracking-[-0.03em] sm:text-[3.25rem]', dark ? 'text-white' : 'text-sx-ink')}>
                {s.title}
              </h3>
              <div className={cn('max-w-md text-base leading-relaxed sm:text-lg', dark ? 'text-white/70' : 'text-sx-ink/65')}>{s.body}</div>
              {s.action}
              {/* Phones: the visual sits under its own step. */}
              <div className="relative mt-2 aspect-[4/3] overflow-hidden rounded-[20px] md:hidden">{media(s)}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="hidden md:block">
        <div className="sticky top-24 h-[clamp(360px,calc(100vh-7.5rem),680px)] overflow-hidden rounded-[24px] bg-sx-card">
          {steps.map((s, index) => (
            <div
              key={s.step}
              aria-hidden={active !== index}
              className={cn(
                'absolute inset-0 transition-[opacity,transform] duration-700 ease-out',
                active === index ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0',
              )}
            >
              {media(s)}
            </div>
          ))}
          <div className="absolute bottom-5 left-5 flex gap-1.5" aria-hidden="true">
            {steps.map((s, index) => (
              <span key={s.step} className={cn('h-1.5 rounded-full transition-all duration-500', active === index ? 'w-8 bg-white' : 'w-1.5 bg-white/50')} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
