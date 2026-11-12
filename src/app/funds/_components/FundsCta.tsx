'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@/global/components/ui/Button'
import { Image } from '@/global/components/ui/Image'
import { catalogueFeaturedFund, fundsCta } from '@/global/data/funds'
import { useDepthParallax } from '@/global/hooks/useDepthParallax'
import { usePointerTilt } from '@/global/hooks/usePointerTilt'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function FundsCta() {
  const rootRef = useRef<HTMLElement>(null)
  useSectionReveal(rootRef, { media: '[data-funds-cta-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-funds-cta-card]', x: 8, y: 5, rotateX: 1.2, rotateY: 1.4 },
    ],
  })
  useDepthParallax(rootRef, [{ selector: '[data-funds-cta-card]', yPercent: 4 }])

  return (
    <section ref={rootRef} className="py-20 md:py-24 px-5 md:px-8 lg:px-10 bg-soft overflow-clip" aria-labelledby="funds-cta-heading">
      <div className="mx-auto max-w-[var(--container-wide)] grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-12 lg:gap-16">
        <div className="flex flex-col justify-center">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            Next step
          </p>
          <h2
            data-reveal-heading
            id="funds-cta-heading"
            className="mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
          >
            {fundsCta.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {fundsCta.body}
          </p>
          <div data-reveal-heading className="flex flex-col sm:flex-row items-center gap-3 mt-8">
            <ButtonLink href={`/funds/${catalogueFeaturedFund.id}`} className="min-h-11 w-full gap-1.5 sm:w-auto">
              View a fund
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="ghost" className="min-h-11 w-full sm:w-auto">
              How it works
            </ButtonLink>
          </div>
        </div>

        <figure data-reveal-item data-depth-stage className="relative flex items-center justify-center m-0">
          <Link
            href={`/funds/${catalogueFeaturedFund.id}`}
            data-funds-cta-card
            className="group relative w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 block"
            aria-label={`View sample fund: ${catalogueFeaturedFund.name}`}
          >
            <Image
              data-funds-cta-image
              src={fundsCta.image.src}
              alt={fundsCta.image.alt}
              width={1600}
              height={1200}
              className="block w-full aspect-[16/10] md:aspect-[4/3] md:min-h-[20rem] md:max-h-[24rem] lg:min-h-[22rem] lg:max-h-[25rem] object-cover object-[50%_45%] rounded-2xl lg:rounded-3xl transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </figure>
      </div>
    </section>
  )
}


