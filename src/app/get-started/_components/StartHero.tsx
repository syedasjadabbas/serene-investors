import Link from 'next/link'
import { PageHero } from '@/global/components/page/PageHero'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { properties } from '@/global/data/properties'
import { storyAssets } from '@/global/data/story-assets'
import { withBase } from '@/global/lib/asset'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'
import { getStartedIntro } from '../_lib/get-started'

const cedar = properties.find((item) => item.id === 'cedar-court')

function HeroMedia() {
  return (
    <div className="relative bg-sx-sand">
      <img
        src={withBase(storyAssets.choose.src)}
        alt={storyAssets.choose.alt}
        width={1400}
        height={1867}
        loading="eager"
        fetchPriority="high"
        className="block aspect-[4/3] w-full object-cover object-[50%_35%] sm:aspect-[16/7]"
      />
      {cedar ? (
        <Link
          href={`/properties/${cedar.id}`}
          aria-label={`View sample listing for ${cedar.name}`}
          className="group relative -mt-16 mx-3 mb-3 flex items-center justify-between gap-4 rounded-[20px] bg-white p-5 text-sx-ink sm:absolute sm:bottom-6 sm:right-6 sm:m-0 sm:w-[340px]"
        >
          <span className="flex min-w-0 flex-col gap-1">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-brand">Sample property</span>
            <span className="font-heading text-lg font-bold tracking-[-0.015em]">{cedar.name}</span>
            <span className="text-sm text-sx-ink/60">
              Sample yield {formatPercent(cedar.sampleYieldPct)} · From {formatSampleAmount(cedar.sampleMinInvestment)}
            </span>
          </span>
          <ArrowCircle tone="brand" />
        </Link>
      ) : null}
    </div>
  )
}

export function StartHero() {
  return (
    <PageHero
      eyebrow="Illustrative sample"
      title={getStartedIntro.heading}
      highlight="exploring"
      body={getStartedIntro.body}
      actions={[
        { label: 'Walk the demo', href: '#start-onboard' },
        { label: 'Browse properties', href: '/properties' },
      ]}
      media={<HeroMedia />}
    />
  )
}
