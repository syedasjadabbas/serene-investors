'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { SectionHeading } from '@/global/components/page/PageSection'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { PillLink } from '@/global/components/ui/PillLink'
import { catalogueFeaturedFund, fundSampleStatus, funds, fundsFeaturedBand, sampleFundMinimum } from '@/global/data/funds'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import { useFundFocus } from '../_hooks/useFundFocus'

/** Dark band: the featured fund's photo with the other funds layered on it (hover/click brings one forward). */
export function FeaturedFundBand() {
  const rootRef = useRef<HTMLElement>(null)
  const fund = catalogueFeaturedFund
  const layers = funds.filter((item) => item.id !== fund.id)
  useFundFocus(rootRef, '[data-funds-layer]')

  return (
    <section ref={rootRef} aria-labelledby="featured-fund-heading" className="bg-sx-ink px-4 py-16 text-white sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <div data-depth-stage className="relative min-w-0">
          <Link
            href={`/funds/${fund.id}`}
            aria-label={`View sample fund ${fund.name}`}
            className="group block overflow-hidden rounded-[24px] bg-sx-card"
          >
            <img
              src={withBase(fund.image)}
              alt={fund.imageAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
              className="block aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:aspect-[4/5]"
            />
          </Link>

          {layers.map((item, index) => (
            <aside
              key={item.id}
              data-funds-layer={index}
              aria-label={`Sample fund ${item.name}`}
              className={cn(
                'relative mt-3 flex items-center gap-3 rounded-[20px] bg-white p-3 text-sx-ink lg:absolute lg:mt-0 lg:w-[300px]',
                index === 0 ? 'lg:-left-6 lg:bottom-10' : 'lg:-right-6 lg:top-10',
              )}
            >
              <img
                src={withBase(item.image)}
                alt=""
                width={200}
                height={200}
                loading="lazy"
                className="size-16 shrink-0 rounded-[12px] object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate font-heading text-base font-bold tracking-[-0.01em]">{item.name}</p>
                <p className="truncate text-sm text-sx-ink/60">
                  {item.market} · {item.propertyCount} sample properties
                </p>
              </div>
              <Link href={`/funds/${item.id}`} aria-label={`View fund ${item.name}`} className="group rounded-full">
                <ArrowCircle tone="dark" />
              </Link>
            </aside>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <SectionHeading
            id="featured-fund-heading"
            tone="dark"
            eyebrow={fundsFeaturedBand.eyebrow}
            title={fund.name}
            body={`${fund.propertyCount} sample properties under one allocation, shown with the existing sample yield and sample minimum for this demonstration.`}
          />
          <p className="text-sm text-white/60">
            {formatFundType(fund.type)} · {fund.market} · {fund.portfolioLabel} · {fundSampleStatus}
          </p>
          <dl className="grid grid-cols-2 gap-3">
            <div className="rounded-[20px] bg-sx-card p-5 sm:p-6">
              <dt className="text-sm text-white/60">Sample yield</dt>
              <dd className="mt-3 font-heading text-2xl font-bold tabular-nums tracking-[-0.03em] sm:text-4xl">
                {formatPercent(fund.sampleReturnPct)}
              </dd>
            </div>
            <div className="rounded-[20px] bg-sx-card p-5 sm:p-6">
              <dt className="text-sm text-white/60">Sample minimum</dt>
              <dd className="mt-3 font-heading text-2xl font-bold tabular-nums tracking-[-0.03em] sm:text-4xl">
                {formatSampleAmount(sampleFundMinimum)}
              </dd>
            </div>
          </dl>
          <div>
            <PillLink href={`/funds/${fund.id}`} variant="light">
              {fundsFeaturedBand.cta}
            </PillLink>
          </div>
        </div>
      </div>
    </section>
  )
}
