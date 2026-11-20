import { smartUnit } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'

/** Photo card that rises from the bottom of the hero, with the five step names along its foot. */
export function HowHeroVisual() {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white p-2.5 sm:p-3">
      <div className="relative overflow-hidden rounded-[20px] bg-sx-sand">
        <img
          src={withBase('/images/serene/nathiagali/valley-tower.webp')}
          alt="Serene Heights Nathia Gali above the valley"
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
        />
        <p className="absolute inset-x-3 bottom-3 rounded-full bg-white px-4 py-2 text-left text-sm font-semibold text-sx-ink md:hidden">
          {smartUnit.steps.length} steps, from booking form to transfer
        </p>
        <ol className="absolute inset-x-5 bottom-5 hidden grid-cols-5 gap-2 md:grid" aria-label="The five steps">
          {smartUnit.steps.map((step, index) => (
            <li key={step.title} className="flex items-center gap-2 rounded-[14px] bg-white p-1.5 pr-2.5 text-left text-xs font-semibold leading-tight text-sx-ink">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sx-ink text-[11px] text-sx-mint" aria-hidden="true">
                {index + 1}
              </span>
              {step.title}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
