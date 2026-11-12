import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/global/components/ui/Button'
import { Image } from '@/global/components/ui/Image'
import { catalogueFeatured, propertiesCta } from '@/global/data/properties'
import { useDepthParallax } from '@/global/hooks/useDepthParallax'
import { usePointerTilt } from '@/global/hooks/usePointerTilt'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function PropertiesCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-properties-cta-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-properties-cta-card]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.4 },
    ],
  })
  useDepthParallax(rootRef, [{ selector: '[data-properties-cta-card]', yPercent: 4 }])

  return (
    <section ref={rootRef} className="properties-cta" aria-labelledby="properties-cta-heading">
      <div className="properties-cta__layout mx-auto max-w-[var(--container-wide)]">
        <div className="properties-cta__copy">
          <p data-reveal-heading className="property-hero__mark">
            Next step
          </p>
          <h2
            data-reveal-heading
            id="properties-cta-heading"
            className="mt-6 max-w-[10ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance"
          >
            {propertiesCta.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {propertiesCta.body}
          </p>
          <div data-reveal-heading className="properties-cta__actions">
            <ButtonLink href={`/properties/${catalogueFeatured.id}`} className="min-h-11 w-full gap-1.5 sm:w-auto">
              Explore a property
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="ghost" className="min-h-11 w-full sm:w-auto">
              How it works
            </ButtonLink>
          </div>
        </div>

        <figure data-reveal-item data-depth-stage className="properties-cta__visual m-0">
          <Link
            href={`/properties/${catalogueFeatured.id}`}
            data-properties-cta-card
            className="properties-cta__card block"
            aria-label={`View sample listing for ${catalogueFeatured.name}`}
          >
            <Image
              data-properties-cta-image
              src={propertiesCta.image.src}
              alt={propertiesCta.image.alt}
              width={1400}
              height={1050}
              className="properties-cta__image"
            />
          </Link>
        </figure>
      </div>
    </section>
  )
}

