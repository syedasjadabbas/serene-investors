import { fundStageAssets } from '@/global/data/fund-stage-assets'
import { catalogueFeaturedFund, sampleFundMinimum } from '@/global/data/funds'
import { withBase } from '@/global/lib/asset'
import { formatPercent, formatSampleAmount } from '@/global/lib/format'

/** The photo card that rises from the bottom of the funds hero, with a mini fund card on it. */
export function FundsHeroVisual() {
  const fund = catalogueFeaturedFund
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white p-2.5 sm:p-3">
      <div className="relative overflow-hidden rounded-[20px] bg-sx-sand">
        <img
          src={withBase(fundStageAssets.field.src)}
          alt={fundStageAssets.field.alt}
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-[16px] bg-white p-2.5 text-left text-sx-ink sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[340px]">
          <img src={withBase(fund.image)} alt="" width={160} height={160} loading="eager" className="size-14 shrink-0 rounded-[10px] object-cover" />
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sx-ink/60">Sample fund</p>
            <p className="truncate font-heading text-base font-bold">{fund.name}</p>
            <p className="text-xs leading-relaxed text-sx-ink/60">
              {fund.propertyCount} properties · {formatPercent(fund.sampleReturnPct)} sample yield · from {formatSampleAmount(sampleFundMinimum)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
