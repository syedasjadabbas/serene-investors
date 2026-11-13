import Link from 'next/link'
import { PageHero } from '@/global/components/page/PageHero'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { fundStageAssets } from '@/global/data/fund-stage-assets'
import { catalogueFeaturedFund, fundsIntro, sampleFundMinimum } from '@/global/data/funds'
import { withBase } from '@/global/lib/asset'
import { formatSampleAmount } from '@/global/lib/format'

function HeroMedia() {
  const fund = catalogueFeaturedFund
  return (
    <div className="relative bg-sx-sand">
      <img
        src={withBase(fundStageAssets.field.src)}
        alt={fundStageAssets.field.alt}
        width={1600}
        height={900}
        loading="eager"
        fetchPriority="high"
        className="block aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
      />
      <Link
        href={`/funds/${fund.id}`}
        aria-label={`View sample fund ${fund.name}`}
        className="group relative -mt-20 mx-3 mb-3 flex items-center gap-4 rounded-[20px] bg-white p-3 pr-4 text-sx-ink sm:absolute sm:bottom-6 sm:left-6 sm:m-0 sm:w-[380px]"
      >
        <img
          src={withBase(fund.image)}
          alt=""
          width={240}
          height={240}
          loading="eager"
          className="size-20 shrink-0 rounded-[14px] object-cover sm:size-24"
        />
        <span className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-brand">Featured sample fund</span>
          <span className="font-heading text-lg font-bold leading-tight tracking-[-0.015em]">{fund.name}</span>
          <span className="text-sm text-sx-ink/60">
            {fund.propertyCount} sample properties · from {formatSampleAmount(sampleFundMinimum)}
          </span>
        </span>
        <ArrowCircle tone="brand" />
      </Link>
    </div>
  )
}

export function FundsHero() {
  return (
    <PageHero
      eyebrow="Illustrative sample"
      title={fundsIntro.heading}
      highlight="one allocation"
      body={fundsIntro.body}
      actions={[
        { label: 'Browse the funds', href: '#fund-collection' },
        { label: 'How it works', href: '/how-it-works' },
      ]}
      media={<HeroMedia />}
    />
  )
}
