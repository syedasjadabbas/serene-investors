import { useLayoutEffect } from 'react'
import { useParams } from 'next/navigation'
import { CtaBand } from '@/global/components/page/CtaBand'
import { Eyebrow, PageSection } from '@/global/components/page/PageSection'
import { HeroCover, ProductHero } from '@/global/components/page/ProductHero'
import { StatCards } from '@/global/components/page/StatCards'
import { fundSampleStatus, funds, sampleFundMinimum } from '@/global/data/funds'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { formatFundType, formatPercent, formatSampleAmount } from '@/global/lib/format'
import { ScrollTrigger } from '@/global/lib/gsap'
import type { Fund } from '@/global/types/fund'
import { FundNotFound } from './FundNotFound'
import { FundRelated } from './FundRelated'

function FundInfo({ fund }: { fund: Fund }) {
  const rows = [
    { label: 'Sample properties', value: String(fund.propertyCount) },
    { label: 'Investment theme', value: fund.portfolioLabel },
    { label: 'Market', value: fund.market },
    { label: 'Fund type', value: formatFundType(fund.type) },
    { label: 'Sample yield', value: formatPercent(fund.sampleReturnPct) },
    { label: 'Sample minimum', value: formatSampleAmount(sampleFundMinimum) },
    { label: 'Status', value: fundSampleStatus },
  ]

  return (
    <PageSection labelledBy="fund-about-heading">
      <div className="grid gap-4 md:grid-cols-2">
        <article aria-labelledby="fund-about-heading" className="flex flex-col gap-4 rounded-[30px] bg-white p-6 sm:p-10">
          <Eyebrow tone="sand">About the fund</Eyebrow>
          <h2 id="fund-about-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.2rem]">
            One theme, one allocation.
          </h2>
          <p className="text-base leading-relaxed text-sx-ink/65">
            {fund.name} is a {fund.portfolioLabel.toLowerCase()} in {fund.market}. It holds {fund.propertyCount} sample
            properties, and one allocation is shared across all of them.
          </p>
          <p className="text-base leading-relaxed text-sx-ink/65">
            Individual sample buildings are not assigned to this fund in the current catalogue, so only the published fund
            fields are listed here.
          </p>
          <div className="relative mt-auto min-h-[220px] overflow-hidden rounded-[20px] bg-sx-sand">
            <img
              src={withBase(fund.image)}
              alt={fund.imageAlt}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </article>

        <article aria-labelledby="fund-details-heading" className="flex flex-col gap-6 rounded-[30px] bg-white p-6 sm:p-10">
          <Eyebrow tone="sand">Fund details</Eyebrow>
          <h2 id="fund-details-heading" className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-[2.2rem]">
            What this fund contains.
          </h2>
          <dl className="flex flex-col gap-2">
            {rows.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-6 rounded-[16px] bg-sx-paper px-5 py-4">
                <dt className="text-sm text-sx-ink/60">{row.label}</dt>
                <dd className="text-right font-semibold tabular-nums text-sx-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs leading-relaxed text-sx-ink/60">Illustrative sample only. Returns are not guaranteed.</p>
        </article>
      </div>
    </PageSection>
  )
}

export function FundDetailPage() {
  const params = useParams<{ slug: string }>()
  const slug = params?.slug
  const fund = funds.find((item) => item.id === slug)

  usePageMeta(
    fund ? `Serene Investors | ${fund.name}` : 'Serene Investors | Fund not found',
    fund
      ? `Sample fund listing for ${fund.name} in ${fund.market}. All figures are fictional demonstration data.`
      : 'This sample fund does not exist in the current collection.',
  )

  // Layout height changes between funds; let any scroll-driven effects elsewhere re-measure.
  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  if (!fund) {
    return <FundNotFound />
  }

  const stats = [
    { value: formatPercent(fund.sampleReturnPct), label: 'Sample yield' },
    { value: String(fund.propertyCount), label: 'Sample properties' },
    { value: formatSampleAmount(sampleFundMinimum), label: 'Sample minimum' },
    { value: formatFundType(fund.type), label: 'Fund type' },
  ]

  return (
    <div key={fund.id}>
      <ProductHero
        tone="tint"
        eyebrow={`Sample fund · ${formatFundType(fund.type)}`}
        title={fund.name}
        body={`${fund.market} · ${fund.portfolioLabel}. ${fund.propertyCount} sample properties under one allocation.`}
        actions={[
          { label: 'Continue with this fund', href: `/get-started?intent=fund&id=${fund.id}` },
          { label: 'All funds', href: '/funds' },
        ]}
        visual={
          <div className="overflow-hidden rounded-[28px] bg-white p-2.5 sm:p-3">
            <img
              src={withBase(fund.image)}
              alt={fund.imageAlt}
              width={1600}
              height={900}
              loading="eager"
              fetchPriority="high"
              className="block aspect-[4/3] w-full rounded-[20px] bg-sx-sand object-cover sm:aspect-[16/8]"
            />
          </div>
        }
      />

      <HeroCover>
        <PageSection label={`${fund.name} at a glance`} pad="top">
          <StatCards items={stats} caption="Illustrative sample only. Returns are not guaranteed." />
        </PageSection>

        <FundInfo fund={fund} />

        <FundRelated fund={fund} />

        <CtaBand
          tone="brand"
          title="Explore the allocation."
          highlight="allocation"
          body={`${fund.name}, sample minimum ${formatSampleAmount(sampleFundMinimum)}. Walk the demonstration onboarding with this fund selected.`}
          actions={[
            { label: 'Continue with this fund', href: `/get-started?intent=fund&id=${fund.id}` },
            { label: 'Back to funds', href: '/funds' },
          ]}
        />
      </HeroCover>
    </div>
  )
}
