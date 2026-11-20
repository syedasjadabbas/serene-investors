import Link from 'next/link'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { withBase } from '@/global/lib/asset'
import { featuredJournal } from '../_lib/journal'

/**
 * Row of tall image cards for the latest Investment articles: the cover fills the card, the
 * category, date and title sit over a dark gradient. Swipes sideways on small screens, three
 * columns on wide.
 */
export function LearnFeatured() {
  return (
    <section aria-labelledby="learn-featured-heading" className="px-4 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <h2 id="learn-featured-heading" className="sr-only">
          Latest on investing
        </h2>
        <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0">
          {featuredJournal.map((entry, index) => (
            <li key={entry.slug} className="w-[80vw] max-w-[380px] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <Link
                href={`/learn/${entry.slug}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[30px] bg-sx-ink text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
              >
                <img
                  src={withBase(entry.hero)}
                  alt=""
                  width={800}
                  height={1000}
                  fetchPriority={index === 0 ? 'high' : undefined}
                  loading={index === 0 ? undefined : 'lazy'}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-sx-ink via-sx-ink/50 to-transparent" />
                <div className="relative flex flex-col gap-3 p-6 sm:p-7">
                  <p className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full bg-sx-mint px-3 py-1 font-semibold text-sx-ink">{entry.category}</span>
                    <time dateTime={entry.date} className="font-medium text-white/80">
                      {entry.dateLabel}
                    </time>
                  </p>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-balance font-heading text-xl font-bold leading-[1.2] tracking-[-0.02em] sm:text-2xl">{entry.title}</h3>
                    <ArrowCircle tone="light" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
