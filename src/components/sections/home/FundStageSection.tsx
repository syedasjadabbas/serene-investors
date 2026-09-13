import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { OfferingSplit } from '@/types'
import { fundStageIntro, funds } from '@/data'
import { fundStageAssets, fundStageImage } from '@/data/fund-stage-assets'
import { formatSampleAmount } from '@/lib/format'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { useFloatingMotion } from '@/hooks/useFloatingMotion'
import { useFundFocus } from '@/hooks/useFundFocus'
import { useOfferingsReveal } from '@/hooks/useOfferingsReveal'
import { usePointerTilt } from '@/hooks/usePointerTilt'

type Props = {
  offering: OfferingSplit
}

export function FundStageSection({ offering }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useOfferingsReveal(rootRef)
  useFundFocus(rootRef)
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-offering-media] img', x: 10, y: 7, rotateX: 1.6, rotateY: 2, z: -40, invert: true },
      { selector: '[data-fund-phone]', x: 12, y: 0, rotateX: 2.2, rotateY: 2.8, z: 16 },
      { selector: '[data-fund-float="0"]', x: 10, y: 0, rotateX: 1.8, rotateY: 2.2, z: -28, rotateZ: -2 },
      { selector: '[data-fund-float="1"]', x: 12, y: 0, rotateX: 2, rotateY: 2.4, z: 8 },
      { selector: '[data-fund-float="2"]', x: 14, y: 0, rotateX: 2.2, rotateY: 2.8, z: 36, rotateZ: 1.2 },
    ],
  })
  useFloatingMotion(rootRef, [
    { selector: '[data-fund-phone]', y: 9, rotate: 0.85, duration: 5.4 },
    { selector: '[data-fund-float]', y: 6, rotate: 0.5, duration: 6.2 },
  ])
  useDepthParallax(rootRef, [
    { selector: '[data-offering-media]', yPercent: 6 },
    { selector: '[data-fund-phone]', yPercent: -4 },
    { selector: '[data-fund-float="0"]', yPercent: -3 },
    { selector: '[data-fund-float="2"]', yPercent: -7 },
  ])

  const urban = funds.find((item) => item.id === 'urban-living-fund')
  const quay = funds.find((item) => item.id === 'quay-mixed-fund')
  const olive = funds.find((item) => item.id === 'olive-court-fund')
  const floats = [urban, quay, olive].filter((item) => item !== undefined)

  return (
    <section
      ref={rootRef}
      id="funds-stage"
      className="chapter-green home-band home-band--stage overflow-x-clip"
      aria-labelledby="fund-stage-heading"
    >
      <div className="fund-stage mx-auto max-w-[var(--container-wide)]">
        <div className="max-w-xl">
          <p data-reveal-heading className="home-kicker">
            {fundStageIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="fund-stage-heading"
            className="home-heading mt-3 max-w-[12ch]"
          >
            {fundStageIntro.heading}
          </h2>
          <p data-reveal-heading className="home-lede max-w-[38ch]">
            {fundStageIntro.body}
          </p>
          <Link
            data-reveal-heading
            to={offering.href}
            className="mt-8 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
          >
            {offering.cta}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </div>

        <div data-reveal-item data-depth-stage className="fund-stage__scene">
          <div data-offering-media data-depth="back" className="fund-stage__field">
            <img
              src={fundStageAssets.field.src}
              alt=""
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>

          <article data-offering-card data-fund-phone data-depth="mid" className="fund-phone app-phone" aria-hidden="true">
            <div className="app-phone__screen fund-phone__screen">
              <div className="px-3.5 pt-2">
                <div className="app-phone__island" />
                <p className="home-kicker mt-5 text-muted">Sample fund</p>
                <p className="mt-3 text-xl font-semibold tracking-tight">
                  {urban?.name ?? offering.example.name}
                </p>
                <p className="mt-1 text-sm text-muted">
                  {urban ? `${urban.propertyCount} sample properties` : offering.example.meta}
                </p>
              </div>
              <img
                className="fund-phone__photo"
                src={fundStageAssets['urban-living-fund'].src}
                alt=""
                width={900}
                height={1200}
              />
              <div className="px-3.5 pb-5 pt-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-subtle">
                  Sample minimum
                </p>
                <p className="mt-1 text-3xl font-semibold tabular-nums tracking-tight">
                  {formatSampleAmount(10000)}
                </p>
                <p className="mt-3 text-sm text-muted">{urban?.portfolioLabel ?? offering.example.detail}</p>
              </div>
            </div>
          </article>

          {floats.map((fund, index) => {
            const position =
              index === 0 ? 'fund-float--one' : index === 1 ? 'fund-float--two' : 'fund-float--three'
            const image = fundStageImage(fund.id)

            return (
              <aside
                key={fund.id}
                data-offering-card
                data-fund-float={index}
                data-depth={index === 2 ? 'front' : index === 0 ? 'far' : 'mid'}
                className={`fund-float ${position} stage-card`}
              >
                <img
                  className="fund-float__image"
                  src={image.src}
                  alt={image.alt}
                  width={720}
                  height={540}
                  loading="lazy"
                  decoding="async"
                />
                <div className="fund-float__body">
                  <p className="home-kicker text-muted">Sample fund</p>
                  <p className="mt-2 text-lg font-medium tracking-tight">{fund.name}</p>
                  <p className="mt-1 text-sm text-muted">
                    {fund.market} · {fund.propertyCount} sample properties
                  </p>
                  <p className="mt-4 flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-muted">Sample minimum</span>
                    <span className="font-semibold tabular-nums">{formatSampleAmount(10000)}</span>
                  </p>
                  <Link
                    to={`/funds#${fund.id}`}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium"
                  >
                    Explore funds
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
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
