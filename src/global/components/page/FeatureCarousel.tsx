'use client'

import { useRef, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'

export type FeatureSlide = {
  title: string
  body: ReactNode
  image?: { src: string; alt: string }
  visual?: ReactNode
  action?: ReactNode
}

/**
 * Row of wide cards (text on the left, an image card on the right) that you page through with
 * arrows or by swiping. Used for "why us" / benefits sections on product pages.
 */
export function FeatureCarousel({
  heading,
  slides,
  tone = 'light',
  headingId,
}: {
  heading?: string
  headingId?: string
  slides: FeatureSlide[]
  tone?: 'light' | 'dark'
}) {
  const railRef = useRef<HTMLUListElement>(null)
  const dark = tone === 'dark'

  function page(direction: 1 | -1) {
    const rail = railRef.current
    const first = rail?.querySelector('li')
    if (!rail || !first) return
    rail.scrollBy({ left: direction * (first.getBoundingClientRect().width + 16), behavior: 'smooth' })
  }

  return (
    <div>
      <div className="mx-auto flex max-w-[1240px] items-end justify-between gap-6 px-4 sm:px-8">
        {heading && (
          <h2 id={headingId} className={cn('font-heading text-3xl font-bold tracking-[-0.02em] sm:text-[2.2rem]', dark ? 'text-white' : 'text-sx-ink')}>
            {heading}
          </h2>
        )}
        <div className="hidden gap-2 sm:flex">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => page(dir)}
              aria-label={dir === -1 ? 'Previous' : 'Next'}
              className={cn(
                'flex size-11 items-center justify-center rounded-full border transition-colors',
                dark ? 'border-white/20 text-white hover:bg-white hover:text-sx-ink' : 'border-sx-ink/15 text-sx-ink hover:bg-sx-ink hover:text-white',
              )}
            >
              {dir === -1 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          ))}
        </div>
      </div>

      <ul
        ref={railRef}
        // scroll-px matches px so swipe snapping lines the first card up with the page column.
        className="sx-rail mt-8 scroll-px-4 px-4 sm:scroll-px-[max(2rem,calc((100vw_-_1240px)/2_+_2rem))] sm:px-[max(2rem,calc((100vw_-_1240px)/2_+_2rem))]"
      >
        {slides.map((slide) => (
          <li
            key={slide.title}
            className={cn(
              'grid w-[88vw] gap-4 rounded-[30px] p-3 sm:w-[min(970px,80vw)] md:grid-cols-2',
              dark ? 'bg-sx-card text-white' : 'bg-white text-sx-ink',
            )}
          >
            <div className="flex flex-col justify-end gap-4 p-5 sm:p-8 md:min-h-[480px]">
              <h3 className="font-heading text-3xl font-bold tracking-[-0.02em] sm:text-[2.2rem]">{slide.title}</h3>
              <div className={cn('max-w-sm text-base leading-relaxed', dark ? 'text-white/70' : 'text-sx-ink/65')}>{slide.body}</div>
              {slide.action}
            </div>
            <div className="relative min-h-[260px] overflow-hidden rounded-[20px] bg-sx-ink">
              {slide.image ? (
                <img src={withBase(slide.image.src)} alt={slide.image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              ) : (
                slide.visual
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
