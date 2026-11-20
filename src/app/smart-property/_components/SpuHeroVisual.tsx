import { withBase } from '@/global/lib/asset'
import { pkr, smartUnit } from '@/global/data/serene'
import { downPct, MONTHS } from '../_lib/programmes'

/** Photo card that rises from the bottom of the hero, with the published SPU plan on a small card. */
export function SpuHeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white p-2.5 sm:p-3">
      <div className="relative overflow-hidden rounded-[20px] bg-sx-sand">
        <img
          src={withBase('/images/serene/nathiagali/tower-forest-mist.webp')}
          alt="The Serene Heights Nathia Gali tower among pines in the mist"
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
        />
        <div className="absolute inset-x-3 bottom-3 rounded-[16px] bg-white p-3 text-left text-sx-ink sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[340px] sm:p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sx-ink/60">Smart Property Unit · Nathia Gali</p>
          <p className="mt-1 font-heading text-lg font-bold">
            {smartUnit.sqft} sq ft · {pkr(smartUnit.value)}
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-sx-ink/65">
            {downPct} down {pkr(smartUnit.down)} · {pkr(smartUnit.monthly)} × {MONTHS}
          </p>
        </div>
      </div>
    </div>
  )
}
