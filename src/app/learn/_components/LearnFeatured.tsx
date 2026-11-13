import Link from 'next/link'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { withBase } from '@/global/lib/asset'
import { featuredLearnGuide } from '../_lib/learn'

/** Large image card for the lead guide. */
export function LearnFeatured() {
  const guide = featuredLearnGuide

  return (
    <section id={guide.anchor} aria-labelledby="learn-featured-heading" className="scroll-mt-28 px-4 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <Link
          href={`/learn/${guide.slug}`}
          aria-label={`Read guide: ${guide.title}`}
          className="group grid overflow-hidden rounded-[24px] bg-white text-sx-ink transition-colors hover:bg-sx-sand md:grid-cols-[1.2fr_1fr]"
        >
          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[360px] md:min-h-[460px]">
            <img
              src={withBase(guide.image)}
              alt={guide.imageAlt}
              width={1400}
              height={1050}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-10 lg:p-12">
            <p className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-sx-ink px-3 py-1 font-semibold text-white">Featured guide</span>
              <span className="rounded-full bg-sx-mint px-3 py-1 font-semibold text-sx-ink">{guide.category}</span>
            </p>
            <h2
              id="learn-featured-heading"
              className="text-balance font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]"
            >
              {guide.title}
            </h2>
            <p className="max-w-md text-base leading-relaxed text-sx-ink/65 sm:text-lg">{guide.description}</p>
            <p className="text-xs font-medium text-sx-ink/50">Illustrative sample</p>
            <span className="mt-2 inline-flex w-fit items-center gap-5 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white sm:text-base">
              Read guide
              <ArrowCircle tone="mint" size="sm" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}
