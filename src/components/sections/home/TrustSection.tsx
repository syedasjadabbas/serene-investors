import { useRef } from 'react'
import type { TrustItem } from '@/types'
import { TrustPoint } from '@/components/cards/TrustPoint'
import { TrustRecordCard } from '@/components/ui/TrustRecordCard'
import { trustIntro, trustRecord } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useTrustReveal } from '@/hooks/useTrustReveal'

type Props = {
  items: TrustItem[]
}

export function TrustSection({ items }: Props) {
  const rootRef = useRef<HTMLElement>(null)
  useTrustReveal(rootRef)
  usePointerTilt(rootRef, {
    layers: [
      { selector: '[data-trust-media] img', x: 10, y: 7, rotateX: 1.4, rotateY: 1.8, z: -28, invert: true },
      { selector: '[data-trust-record]', x: 8, y: 5, rotateX: 1.4, rotateY: 1.8, z: 8 },
      { selector: '[data-trust-doc]', x: 12, y: 8, rotateX: 2, rotateY: 2.4, z: 36 },
    ],
  })
  useDepthParallax(rootRef, [
    { selector: '[data-trust-media] img', yPercent: 7 },
    { selector: '[data-trust-record]', yPercent: -5 },
  ])
  const sideCards = items.slice(0, 2)

  return (
    <section
      ref={rootRef}
      id="trust"
      className="chapter-dark home-band home-band--stage overflow-x-clip"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)]">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal-heading className="home-kicker">
            {trustIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="trust-heading"
            className="home-heading mx-auto mt-4 max-w-[14ch] text-[clamp(2.4rem,4.8vw,4.2rem)]"
          >
            {trustIntro.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-[rgb(247_245_239/0.08)] px-2.5 py-1 text-xs font-medium"
          >
            {trustIntro.sampleLabel}
          </p>
        </div>

        <div className="trust-stage mt-12 lg:mt-16" data-depth-stage>
          <figure data-trust-media data-depth="back" className="trust-stage__media m-0">
            <img
              src={trustIntro.image.src}
              alt={trustIntro.image.alt}
              width={2000}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="trust-stage__record" data-depth="mid">
            <TrustRecordCard record={trustRecord} />
          </div>
          <div className="trust-stage__cards">
            {sideCards.map((item, index) => (
              <article
                key={item.id}
                data-trust-doc
                data-depth={index === 0 ? 'mid' : 'front'}
                className="trust-doc stage-card depth-lift text-ink"
              >
                <h3 className="trust-doc__title">{item.title}</h3>
                <p className="trust-doc__body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <ol className="mt-12 grid border-t border-line md:mt-16 md:grid-cols-2">
          {items.map((item, index) => (
            <TrustPoint key={item.id} item={item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}
