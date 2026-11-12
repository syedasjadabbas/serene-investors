'use client'

import { useState, useRef } from 'react'
import { Link } from '@/components/ui/Link'
import { ArrowRight } from 'lucide-react'
import type { OfferingSplit } from '@/types'
import { fundStageIntro, funds, sampleFundMinimum } from '@/data'
import { fundStageAssets, fundStageImage } from '@/data/fund-stage-assets'
import { formatSampleAmount } from '@/lib/format'
import { useOfferingsReveal } from '@/hooks/useOfferingsReveal'
import { withBase } from '@/lib/asset'

type Props = {
  offering: OfferingSplit
}

const FLOAT_CONFIGS = [
  { id: 'fund-float-0', defaultZIndex: 2, defaultTransform: 'rotate(3deg)', positionClass: 'lg:top-[6%] lg:right-0' },
  { id: 'fund-float-1', defaultZIndex: 6, defaultTransform: 'rotate(-3.5deg)', positionClass: 'lg:left-0 lg:bottom-[12%]' },
  { id: 'fund-float-2', defaultZIndex: 4, defaultTransform: 'rotate(2deg)', positionClass: 'lg:right-[8%] lg:bottom-0' },
] as const

export function FundStageSection({ offering }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  useOfferingsReveal(rootRef)

  const urban = funds.find((item) => item.id === 'urban-living-fund')
  const quay = funds.find((item) => item.id === 'quay-mixed-fund')
  const olive = funds.find((item) => item.id === 'olive-court-fund')
  const floats = [urban, quay, olive].filter((item) => item !== undefined)

  const isPhoneHovered = hoveredCard === 'fund-phone'
  const phoneStyle = {
    zIndex: isPhoneHovered ? 9999 : (hoveredCard ? 1 : 5),
    transform: isPhoneHovered ? 'translate3d(0, -14px, 0) scale(1.05)' : undefined,
    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, z-index 0s',
    boxShadow: isPhoneHovered ? '0 30px 60px -12px rgba(0, 0, 0, 0.45)' : undefined,
    pointerEvents: 'auto' as const,
  }

  return (
    <section
      ref={rootRef}
      id="funds-stage"
      className="bg-primary text-primary-ink py-16 md:py-24 px-5 md:px-8 overflow-x-clip"
      aria-labelledby="fund-stage-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)] grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <div className="max-w-xl">
          <p data-reveal-heading className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d5e0d6]">
            {fundStageIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="fund-stage-heading"
            className="text-[clamp(2.2rem,4vw,3.5rem)] font-semibold leading-[1.08] tracking-tight mt-3 max-w-[12ch] text-primary-ink"
          >
            {fundStageIntro.heading}
          </h2>
          <p data-reveal-heading className="mt-4 text-base md:text-lg leading-relaxed text-[#d5e0d6] max-w-[38ch]">
            {fundStageIntro.body}
          </p>
          <Link
            data-reveal-heading
            href={offering.href}
            className="group mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary-ink hover:underline underline-offset-4"
          >
            {offering.cta}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div data-reveal-item data-depth-stage className="relative min-h-[28rem] lg:min-h-[40rem] overflow-visible">
          <div data-offering-media data-depth="back" className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
            <img
              src={withBase(fundStageAssets.field.src)}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
              className="block w-full h-full object-cover object-[50%_40%] opacity-[0.34] saturate-[0.45] contrast-[1.08] mix-blend-luminosity pointer-events-none"
            />
          </div>

          <article
            data-offering-card
            data-fund-phone
            data-depth="mid"
            className="relative z-[2] w-[min(20rem,100%)] mx-auto lg:w-[22.5rem] lg:ml-[18%] bg-surface text-ink rounded-[2.5rem] p-3 shadow-2xl border border-black/10 cursor-pointer"
            style={phoneStyle}
            onMouseEnter={() => setHoveredCard('fund-phone')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="rounded-[2rem] bg-surface text-ink overflow-hidden border border-black/5">
              <div className="px-4 pt-3 pb-2 text-center">
                <div className="mx-auto h-4 w-24 rounded-full bg-black/80" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample fund</p>
                <p className="mt-2 text-xl font-semibold tracking-tight text-ink">
                  {urban?.name ?? offering.example.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {urban ? `${urban.propertyCount} sample properties` : offering.example.meta}
                </p>
              </div>
              <img
                className="block w-full h-[11.5rem] mt-3 object-cover object-[50%_40%]"
                src={withBase(fundStageAssets['urban-living-fund'].src)}
                alt=""
                width={900}
                height={1200}
              />
              <div className="px-5 pb-6 pt-4 text-left">
                <p className="text-[11px] uppercase tracking-[0.12em] text-subtle">
                  Sample minimum
                </p>
                <p className="mt-1 text-3xl font-semibold tabular-nums tracking-tight text-ink">
                  {formatSampleAmount(sampleFundMinimum)}
                </p>
                <p className="mt-3 text-sm text-muted">{urban?.portfolioLabel ?? offering.example.detail}</p>
              </div>
            </div>
          </article>

          {floats.map((fund, index) => {
            const config = FLOAT_CONFIGS[index] ?? FLOAT_CONFIGS[0]
            const isHovered = hoveredCard === config.id
            const image = fundStageImage(fund.id)

            const floatStyle = {
              zIndex: isHovered ? 9999 : (hoveredCard ? 1 : config.defaultZIndex),
              transform: isHovered
                ? 'translate3d(0, -14px, 0) scale(1.05)'
                : (hoveredCard ? `${config.defaultTransform} scale(0.97)` : config.defaultTransform),
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, z-index 0s',
              boxShadow: isHovered ? '0 30px 60px -12px rgba(0, 0, 0, 0.45)' : undefined,
              pointerEvents: 'auto' as const,
            }

            return (
              <aside
                key={fund.id}
                data-offering-card
                data-fund-float={index}
                className={`fund-float w-[min(16.5rem,100%)] mt-4 lg:mt-0 lg:absolute lg:w-[16.75rem] ${config.positionClass} bg-surface text-ink rounded-2xl shadow-xl cursor-pointer pointer-events-auto border border-black/5 overflow-hidden transition-all duration-300 hover:z-[100] hover:-translate-y-2 hover:scale-[1.04] hover:shadow-2xl`}
                style={floatStyle}
                onMouseEnter={() => setHoveredCard(config.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img
                  className="block w-full h-[7.5rem] object-cover object-[50%_40%] pointer-events-none"
                  src={withBase(image.src)}
                  alt={image.alt}
                  width={720}
                  height={540}
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Sample fund</p>
                  <p className="mt-2 text-lg font-medium tracking-tight text-ink">{fund.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {fund.market} · {fund.propertyCount} sample properties
                  </p>
                  <p className="mt-4 flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-muted">Sample minimum</span>
                    <span className="font-semibold tabular-nums text-ink">{formatSampleAmount(sampleFundMinimum)}</span>
                  </p>
                  <Link
                    href={`/funds#${fund.id}`}
                    className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink hover:text-primary transition-colors"
                  >
                    Explore funds
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </aside>
            )
          })}
        </div>
      </div>
    </section>
  )
}

