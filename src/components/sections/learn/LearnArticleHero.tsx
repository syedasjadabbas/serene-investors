import { useRef } from 'react'
import type { LearnGuide } from '@/types'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

type Props = {
  guide: LearnGuide
}

export function LearnArticleHero({ guide }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-learn-article-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-learn-article-image]', x: 7, y: 5, rotateX: 1.1, rotateY: 1.4 }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-learn-article-image]', yPercent: 5 }])

  return (
    <header ref={rootRef} className="learn-article-hero pt-20 pb-12 px-6">
      <div className="learn-article-hero__copy max-w-7xl mx-auto mb-12">
        <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
          Illustrative sample
        </p>
        <p data-reveal-heading className="text-xs font-mono font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full inline-block mt-4">
          {guide.category}
        </p>
        <h1
          data-reveal-heading
          className="mt-4 max-w-[14ch] text-[clamp(2.4rem,5vw,4.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-balance text-ink"
        >
          {guide.title}
        </h1>
        <p
          data-reveal-heading
          className="mt-5 max-w-[42ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
        >
          {guide.description}
        </p>
      </div>

      <figure data-reveal-item data-depth-stage className="learn-article-hero__media max-w-7xl mx-auto m-0 overflow-hidden rounded-2xl">
        <img
          data-learn-article-image
          src={withBase(guide.image)}
          alt={guide.imageAlt}
          width={1600}
          height={1000}
          loading="eager"
          fetchPriority="high"
          className="block w-full min-h-[22rem] lg:min-h-[32rem] object-cover rounded-2xl"
        />
      </figure>
    </header>
  )
}
