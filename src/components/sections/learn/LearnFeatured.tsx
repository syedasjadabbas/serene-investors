import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/components/ui/Button'
import { featuredLearnGuide } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'

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
      className="learn-featured"
      aria-labelledby="learn-featured-heading"
    >
      <div className="learn-featured__layout mx-auto max-w-[var(--container-wide)]">
        <figure data-depth-stage className="learn-featured__media m-0">
          <Link to={`/learn/${guide.slug}`} aria-label={`Read guide: ${guide.title}`}>
            <img
              data-learn-featured-image
              src={guide.image}
              alt={guide.imageAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
            />
          </Link>
        </figure>

        <div className="learn-featured__copy">
          <p data-reveal-heading className="property-hero__mark">
            Featured guide
          </p>
          <p data-reveal-heading className="learn-kicker mt-5">
            {guide.category}
          </p>
          <h2
            data-reveal-heading
            id="learn-featured-heading"
            className="mt-3 max-w-[12ch] text-[clamp(2.2rem,4.2vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance"
          >
            {guide.title}
          </h2>
          <p data-reveal-item className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty">
            {guide.description}
          </p>
          <p data-reveal-item className="learn-featured__note">
            Illustrative sample
          </p>
          <div data-reveal-item className="mt-8">
            <ButtonLink to={`/learn/${guide.slug}`} className="min-h-11 gap-1.5">
              Read guide
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
