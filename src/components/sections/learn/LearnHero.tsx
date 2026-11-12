import { useRef } from 'react'
import { learnIntro } from '@/data'
import { storyAssets } from '@/data/story-assets'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

export function LearnHero() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-learn-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-learn-hero-image]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.5, invert: true }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-learn-hero-image]', yPercent: 5 }])

  return (
    <section ref={rootRef} className="learn-hero pt-20 pb-12 px-6 lg:pt-24 lg:pb-16" aria-labelledby="learn-heading">
      <div className="learn-hero__layout max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-12 items-center">
        <div className="learn-hero__copy flex flex-col justify-center">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
            Illustrative sample
          </p>
          <h1
            data-reveal-heading
            id="learn-heading"
            className="mt-4 max-w-[12ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
          >
            {learnIntro.heading}
          </h1>
          <p
            data-reveal-heading
            className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {learnIntro.body}
          </p>
          <div data-reveal-heading className="w-14 h-[1px] mt-8 bg-line" />
        </div>

        <figure data-reveal-item data-depth-stage className="learn-hero__media m-0 overflow-hidden rounded-2xl bg-bg-warm">
          <img
            data-learn-hero-image
            src={withBase(storyAssets.grow.src)}
            alt={storyAssets.grow.alt}
            width={1600}
            height={1200}
            loading="eager"
            fetchPriority="high"
            className="block w-full min-h-[22rem] lg:min-h-[32rem] object-cover rounded-2xl"
          />
        </figure>
      </div>
    </section>
  )
}
