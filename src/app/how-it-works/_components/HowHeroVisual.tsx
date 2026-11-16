import { howPageJourney } from '@/global/data/how-it-works'
import { storyAssets } from '@/global/data/story-assets'
import { withBase } from '@/global/lib/asset'

/** Photo card that rises from the bottom of the hero, with the four step names along its foot. */
export function HowHeroVisual() {
  return (
    <div className="overflow-hidden rounded-[28px] bg-white p-2.5 sm:p-3">
      <div className="relative overflow-hidden rounded-[20px] bg-sx-sand">
        <img
          src={withBase(storyAssets.valueWalk.src)}
          alt={storyAssets.valueWalk.alt}
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          className="block aspect-[4/3] w-full object-cover sm:aspect-[16/8]"
        />
        <ol className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 sm:inset-x-5 sm:bottom-5 sm:grid-cols-4" aria-label="The four steps">
          {howPageJourney.map((state) => (
            <li key={state.id} className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-3 text-left text-sm font-semibold text-sx-ink">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-sx-ink text-xs text-sx-mint" aria-hidden="true">
                {state.number}
              </span>
              {state.heading}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
