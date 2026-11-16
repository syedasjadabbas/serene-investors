'use client'

import { Star } from 'lucide-react'
import { usePrefersReducedMotion } from '@/global/hooks/usePrefersReducedMotion'
import { testimonials } from '@/global/data/reviews'
import { cn } from '@/global/lib/cn'

type Item = (typeof testimonials.items)[number]

function ReviewCard({ item, hidden, dark }: { item: Item; hidden?: boolean; dark?: boolean }) {
  return (
    <li className="mr-4 w-[80vw] shrink-0 sm:w-[340px]" aria-hidden={hidden || undefined}>
      <figure className={cn('flex h-full min-h-[260px] flex-col rounded-[24px] p-6', dark ? 'bg-sx-card' : 'bg-white')}>
        <div className="flex gap-1 text-sx-brand" aria-label="Five out of five">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          ))}
        </div>
        <blockquote className={cn('mt-4 text-base leading-relaxed', dark ? 'text-white/85' : 'text-sx-ink')}>“{item.quote}”</blockquote>
        <figcaption className={cn('mt-auto flex items-center gap-3 pt-6 text-sm font-medium', dark ? 'text-white/70' : 'text-sx-ink/80')}>
          <span className="flex size-9 items-center justify-center rounded-full bg-sx-paper text-sx-forest" aria-hidden="true">
            {item.name.split(', ')[1]?.[0] ?? 'S'}
          </span>
          {item.name}
        </figcaption>
      </figure>
    </li>
  )
}

/** Moving strip of sample reviews. Pass tone="dark" for dark pages, and heading to change the title. */
export function ReviewStrip({ tone = 'light', heading }: { tone?: 'light' | 'dark'; heading?: string } = {}) {
  const dark = tone === 'dark'
  const still = usePrefersReducedMotion()

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 sm:py-28">
      <div className="px-4 text-center sm:px-8">
        <h2 id="testimonials-heading" className={cn('font-heading text-3xl font-bold tracking-[-0.02em] sm:text-4xl', dark ? 'text-white' : 'text-sx-ink')}>
          {heading ?? testimonials.heading}
        </h2>
        <p className={cn('mt-2 text-sm', dark ? 'text-white/50' : 'text-sx-ink/55')}>{testimonials.note}</p>
      </div>

      {still ? (
        <ul className="sx-rail mt-10 scroll-px-4 px-4 sm:scroll-px-8 sm:px-8" aria-label="Sample reviews">
          {testimonials.items.map((item) => (
            <ReviewCard key={item.name} item={item} dark={dark} />
          ))}
        </ul>
      ) : (
        // Moves continuously (the opposite way to the services strip) and pauses on hover or focus.
        <div className="sx-strip mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
          <ul className="sx-strip-track sx-strip-reverse flex w-max" aria-label="Sample reviews">
            {testimonials.items.map((item) => (
              <ReviewCard key={item.name} item={item} dark={dark} />
            ))}
            {testimonials.items.map((item) => (
              <ReviewCard key={`${item.name}-copy`} item={item} hidden dark={dark} />
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
