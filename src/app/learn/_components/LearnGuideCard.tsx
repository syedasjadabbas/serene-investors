import Link from 'next/link'
import type { LearnGuide } from '@/global/types/learn'
import { withBase } from '@/global/lib/asset'
import { guideDate } from '../_lib/learn'

type Props = {
  guide: LearnGuide
  id?: string
}

/** Grid card: rounded 16:9 photo, "Tag · date" line and a 22px title, on a white card. */
export function LearnGuideCard({ guide, id }: Props) {
  const date = guideDate(guide)
  return (
    <article id={id} className="h-full scroll-mt-28">
      <Link
        href={`/learn/${guide.slug}`}
        className="group flex h-full flex-col gap-5 rounded-[24px] bg-white p-3 pb-6 text-sx-ink transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(14,16,15,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
      >
        <div className="aspect-video overflow-hidden rounded-[16px] bg-sx-sand">
          <img
            src={withBase(guide.image)}
            alt={guide.imageAlt}
            width={960}
            height={540}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-3">
          <p className="text-sm text-sx-ink/60">
            <span className="font-semibold text-sx-brand">{guide.category}</span>
            <span aria-hidden="true"> · </span>
            <time dateTime={date.iso}>{date.label}</time>
          </p>
          <h3 className="text-balance font-heading text-[1.375rem] font-semibold leading-snug tracking-[-0.015em]">{guide.title}</h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-sx-ink/60">{guide.description}</p>
        </div>
      </Link>
    </article>
  )
}
