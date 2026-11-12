import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { featuredLearnGuide } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

export function LearnFeatured() {
  const rootRef = useRef<HTMLElement>(null)
  const guide = featuredLearnGuide
  useSectionReveal(rootRef, { media: '[data-learn-featured-image]' })
  usePointerTilt(rootRef, {
    layers: [{ selector: '[data-learn-featured-image]', x: 7, y: 5, rotateX: 1.2, rotateY: 1.6 }],
  })
  useDepthParallax(rootRef, [{ selector: '[data-learn-featured-image]', yPercent: 4 }])

  return (
    <section
      ref={rootRef}
      id={guide.anchor}
      className="learn-featured py-20 px-6"
      aria-labelledby="learn-featured-heading"
    >
      <div className="learn-featured__layout max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <figure data-depth-stage className="learn-featured__media m-0 overflow-hidden rounded-2xl bg-bg-warm">
          <Link href={`/learn/${guide.slug}`} aria-label={`Read guide: ${guide.title}`}>
            <img
              data-learn-featured-image
              src={withBase(guide.image)}
              alt={guide.imageAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
              className="block w-full min-h-[22rem] lg:min-h-[30rem] object-cover rounded-2xl"
            />
          </Link>
        </figure>

        <div className="learn-featured__copy flex flex-col justify-center">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
            Featured guide
          </p>
          <p data-reveal-heading className="text-xs font-mono font-bold px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full inline-block mt-4 w-fit">
            {guide.category}
          </p>
          <h2
            data-reveal-heading
            id="learn-featured-heading"
            className="mt-3 max-w-[12ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance text-ink"
          >
            {guide.title}
          </h2>
          <p data-reveal-item className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty">
            {guide.description}
          </p>
          <p data-reveal-item className="text-xs font-medium uppercase tracking-wider text-ink/40 mt-3">
            Illustrative sample
          </p>
          <div data-reveal-item className="mt-8">
            <ButtonLink href={`/learn/${guide.slug}`} className="min-h-11 gap-1.5">
              Read guide
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
