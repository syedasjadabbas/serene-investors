import { useRef } from 'react'
import { FileText, Landmark, Scale, ShieldCheck } from 'lucide-react'
import type { TrustItem } from '@/types'
import { TrustPoint } from '@/components/cards/TrustPoint'
import { TrustRecordCard } from '@/components/ui/TrustRecordCard'
import { trustIntro, trustRecord } from '@/data'
import { useDepthParallax } from '@/hooks/useDepthParallax'
import { usePointerTilt } from '@/hooks/usePointerTilt'
import { useTrustReveal } from '@/hooks/useTrustReveal'
import { withBase } from '@/lib/asset'

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
      className="overflow-x-clip bg-accent py-16 text-accent-ink md:py-20 lg:py-24"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal-heading className="home-kicker text-[#aebbaf]">
            {trustIntro.eyebrow}
          </p>
          <h2
            data-reveal-heading
            id="trust-heading"
            className="mx-auto mt-4 max-w-[14ch] text-[clamp(2.4rem,4.8vw,4.2rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-accent-ink text-balance"
          >
            {trustIntro.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 inline-block rounded-pill bg-[rgb(247_245_239/0.08)] px-2.5 py-1 text-xs font-medium text-accent-ink"
          >
            {trustIntro.sampleLabel}
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16" data-depth-stage>
          <div className="relative overflow-visible">
            <figure data-trust-media data-depth="back" className="m-0">
              <img
                src={withBase(trustIntro.image.src)}
                alt={trustIntro.image.alt}
                width={2000}
                height={1200}
                loading="lazy"
                decoding="async"
                className="block aspect-video min-h-[22rem] w-full rounded-2xl object-cover opacity-30 lg:min-h-[28rem] lg:max-h-[32rem]"
              />
            </figure>
            <div className="-mt-14 mx-auto relative z-[3] w-[min(24rem,100%)] lg:absolute lg:left-[70%] lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mt-0 lg:w-[min(24rem,calc(100%-3rem))]" data-depth="mid">
              <TrustRecordCard record={trustRecord} />
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14">
            {sideCards.map((item, index) => (
              <article
                key={item.id}
                data-trust-doc
                data-depth={index === 0 ? 'mid' : 'front'}
                className="group relative rounded-2xl border border-white/65 bg-white/90 p-7 text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_12px_30px_-8px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:z-50 hover:-translate-y-2 hover:scale-[1.03] hover:border-white/90 hover:shadow-2xl"
              >
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-[rgba(49,92,69,0.09)] text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-[rgba(49,92,69,0.15)]" aria-hidden="true">
                  {item.id === 'custody' ? (
                    <Landmark size={20} strokeWidth={1.8} />
                  ) : item.id === 'registry' || item.id === 'documentation' ? (
                    <FileText size={20} strokeWidth={1.8} />
                  ) : item.id === 'valuation' ? (
                    <Scale size={20} strokeWidth={1.8} />
                  ) : (
                    <ShieldCheck size={20} strokeWidth={1.8} />
                  )}
                </div>
                <h3 className="m-0 max-w-[16ch] text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-ink text-balance">{item.title}</h3>
                <p className="mt-2.5 max-w-[36ch] text-[0.95rem] leading-relaxed text-muted text-pretty">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <ol className="mt-12 grid border-t border-[rgb(247_245_239/0.16)] md:mt-16 md:grid-cols-2">
          {items.map((item, index) => (
            <TrustPoint key={item.id} item={item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  )
}
