'use client'

import { useState } from 'react'
import { Calendar, ExternalLink, Play } from 'lucide-react'
import { cn } from '@/global/lib/cn'

export type ProgressUpdate = { id: string; date: string; url: string; embed: string; thumb: string }

/**
 * Click-to-play YouTube card: shows the thumbnail and a play button, and only inserts the
 * youtube-nocookie iframe once the visitor asks for it (no third-party request before that).
 */
export function ProgressVideo({ update, featured }: { update: ProgressUpdate; featured?: boolean }) {
  const [playing, setPlaying] = useState(false)
  const title = `Serene Heights site visit, ${update.date}`
  const headingId = `${update.id}-heading`
  // The featured card sits directly under the page title, so its heading is an h2.
  const Heading = featured ? 'h2' : 'h3'

  return (
    <article
      id={update.id}
      aria-labelledby={headingId}
      className={cn(
        'flex h-full scroll-mt-28 flex-col bg-white text-sx-ink',
        featured ? 'gap-3 rounded-[30px] p-3 md:grid md:grid-cols-[1.6fr_1fr]' : 'gap-4 rounded-[24px] p-3 pb-5',
      )}
    >
      <div className={cn('relative aspect-video overflow-hidden bg-sx-ink', featured ? 'rounded-[20px]' : 'rounded-[16px]')}>
        {playing ? (
          <iframe
            src={`${update.embed}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full">
            <img
              src={update.thumb}
              alt=""
              loading={featured ? 'eager' : 'lazy'}
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-sx-ink/25 transition-colors group-hover:bg-sx-ink/10" aria-hidden="true" />
            <span
              aria-hidden="true"
              className={cn(
                'absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-sx-ink transition-transform group-hover:scale-110',
                featured ? 'size-20' : 'size-14',
              )}
            >
              <Play size={featured ? 30 : 22} className="translate-x-0.5 fill-current" />
            </span>
            <span className="sr-only">Play video: {title}</span>
          </button>
        )}
      </div>

      <div className={cn('flex flex-col gap-3', featured ? 'justify-center p-5 sm:p-8' : 'px-3')}>
        {featured && <span className="w-fit rounded-full bg-sx-ink px-3 py-1 text-xs font-semibold text-white">Latest update</span>}
        <p className="inline-flex items-center gap-1.5 text-sm font-medium text-sx-ink/60">
          <Calendar size={14} aria-hidden="true" className="text-sx-brand" />
          {update.date}
        </p>
        <Heading
          id={headingId}
          className={cn('text-balance font-heading font-bold tracking-[-0.02em]', featured ? 'text-3xl sm:text-[2.5rem] sm:leading-[1.08]' : 'text-xl')}
        >
          Site visit · {update.date}
        </Heading>
        {featured && (
          <p className="text-base leading-relaxed text-sx-ink/65">
            The most recent walk-through of the site, filmed for the Serene Heights YouTube channel.
          </p>
        )}
        <a
          href={update.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sx-brand underline underline-offset-4 transition-colors hover:text-sx-forest"
        >
          Open on YouTube
          <ExternalLink size={14} aria-hidden="true" />
          <span className="sr-only"> ({update.date} site visit, opens in a new tab)</span>
        </a>
      </div>
    </article>
  )
}
