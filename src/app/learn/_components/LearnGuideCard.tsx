import Link from 'next/link'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import type { LearnGuide } from '@/global/types/learn'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'

type Props = {
  guide: LearnGuide
  /** Card colour: white on paper sections, paper on white sections. */
  tone?: 'white' | 'paper'
  id?: string
}

/** Blog-style guide card: image on top, category pill, title, short description. */
export function LearnGuideCard({ guide, tone = 'white', id }: Props) {
  return (
    <article id={id} className="h-full scroll-mt-28">
      <Link
        href={`/learn/${guide.slug}`}
        aria-label={`${guide.title}. Read guide.`}
        className={cn(
          'group flex h-full flex-col overflow-hidden rounded-[20px] text-sx-ink transition-colors',
          tone === 'white' ? 'bg-white hover:bg-sx-sand' : 'bg-sx-paper hover:bg-sx-sand',
        )}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={withBase(guide.image)}
            alt={guide.imageAlt}
            width={900}
            height={675}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
            <span className="rounded-full bg-sx-mint px-3 py-1 font-semibold text-sx-ink">{guide.category}</span>
            <span className="text-sx-ink/50">Illustrative sample</span>
          </p>
          <h3 className="font-heading text-xl font-semibold leading-snug tracking-[-0.015em]">{guide.title}</h3>
          <p className="text-sm leading-relaxed text-sx-ink/65">{guide.description}</p>
          <span className="mt-auto flex items-center justify-between gap-3 pt-2 text-sm font-semibold">
            Read guide
            <ArrowCircle tone="dark" size="sm" />
          </span>
        </div>
      </Link>
    </article>
  )
}
