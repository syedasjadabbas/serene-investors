'use client'

import { useRef } from 'react'
import { Link } from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import { howItWorksIntro, properties } from '@/data'
import { storyAssets } from '@/data/story-assets'
import { formatPercent, formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useSectionReveal } from '@/hooks/useSectionReveal'
import { withBase } from '@/lib/asset'

export function HowHero() {
  const rootRef = useRef<HTMLElement>(null)
  const cedar = properties.find((item) => item.id === 'cedar-court')
  useSectionReveal(rootRef, { media: '[data-how-hero-image]' })
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-how-hero-image]', x: 10, y: 6, rotateX: 1.4, rotateY: 1.8, invert: true },
      { selector: '[data-how-hero-card]', x: 12, y: 0, rotateX: 2, rotateY: 2.4, z: 22 },
    ],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-how-hero-image]', yPercent: 6 },
    { selector: '[data-how-hero-card]', yPercent: -5 },
  ])

  return (
    <section ref={rootRef} className="pt-20 pb-12 px-5 md:px-8 lg:px-10 lg:pt-24 lg:pb-16" aria-labelledby="how-page-heading">
      <div className="mx-auto max-w-[var(--container-wide)] grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center lg:gap-16">
        <div className="flex flex-col justify-center">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-muted m-0">
            Illustrative sample
          </p>
          <p data-reveal-heading className="mt-4 text-sm text-muted">
            {howItWorksIntro.eyebrow}
          </p>
          <h1
            data-reveal-heading
            id="how-page-heading"
            className="mt-2.5 max-w-[10ch] text-[clamp(2.6rem,5.4vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance text-ink"
          >
            How it works
          </h1>
          <p
            data-reveal-heading
            className="mt-4 max-w-[38ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {howItWorksIntro.body}
          </p>
          <div data-reveal-heading className="w-14 h-[1px] mt-9 bg-line" />
        </div>

        <div data-reveal-item data-depth-stage className="relative min-h-[22rem] lg:min-h-[34rem]">
          <figure className="m-0 overflow-hidden rounded-2xl bg-bg-warm">
            <img
              data-how-hero-image
              src={withBase(howItWorksIntro.image.src)}
              alt={howItWorksIntro.image.alt}
              width={2000}
              height={1200}
              loading="eager"
              fetchPriority="high"
              className="block w-full min-h-[22rem] lg:min-h-[34rem] aspect-[16/10] object-cover object-[50%_40%]"
            />
          </figure>

          {cedar ? (
            <Link
              href={`/properties/${cedar.id}`}
              data-how-hero-card
              className="group block relative z-10 w-[min(20.5rem,100%)] -mt-16 mr-4 ml-auto md:absolute md:right-5 md:bottom-5 md:m-0 lg:right-8 lg:bottom-8 overflow-hidden rounded-2xl bg-surface shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] hover:z-50 transition-all duration-300 border border-black/5"
              aria-label={`View sample listing for ${cedar.name}`}
            >
              <img src={withBase(storyAssets.choose.src)} alt="" width={720} height={480} className="block w-full h-[8.25rem] object-cover object-[50%_30%]" />
              <div className="p-4 sm:p-5 text-ink">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample property</p>
                <p className="mt-2 text-lg font-medium tracking-tight text-ink group-hover:text-primary transition-colors">{cedar.name}</p>
                <p className="mt-1 text-sm text-muted">
                  Sample yield {formatPercent(cedar.sampleYieldPct)} · From{' '}
                  {formatSampleAmount(cedar.sampleMinInvestment)}
                </p>
                <span className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink group-hover:text-primary transition-colors">
                  View property
                  <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  )
}

