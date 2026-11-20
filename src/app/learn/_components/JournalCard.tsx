import Link from 'next/link'
import { withBase } from '@/global/lib/asset'
import type { JournalEntry } from '../_lib/journal'

/** Grid card: rounded 16:9 cover, "Category · date" line and a 22px title, on a white card. */
export function JournalCard({ entry, headingLevel = 'h3' }: { entry: JournalEntry; headingLevel?: 'h2' | 'h3' }) {
  const Heading = headingLevel
  return (
    <article className="h-full">
      <Link
        href={`/learn/${entry.slug}`}
        className="group flex h-full flex-col gap-5 rounded-[24px] bg-white p-3 pb-6 text-sx-ink transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(14,16,15,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
      >
        <div className="aspect-video overflow-hidden rounded-[16px] bg-sx-sand">
          <img
            src={withBase(entry.cover)}
            alt=""
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-3">
          <p className="text-sm text-sx-ink/60">
            <span className="font-semibold text-sx-brand">{entry.category}</span>
            <span aria-hidden="true"> · </span>
            <time dateTime={entry.date}>{entry.dateLabel}</time>
          </p>
          <Heading className="text-balance font-heading text-[1.375rem] font-semibold leading-snug tracking-[-0.015em]">{entry.title}</Heading>
          <p className="line-clamp-3 text-sm leading-relaxed text-sx-ink/65">{entry.description}</p>
        </div>
      </Link>
    </article>
  )
}
