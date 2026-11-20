import { lahore } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'

/** The four floor types of Serene Heights Lahore, each with its render. */
export function LahoreFloors({ headingLevel = 'h3' }: { headingLevel?: 'h3' | 'h4' }) {
  const Heading = headingLevel
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
      {lahore.floors.map((floor) => (
        <li key={floor.id} className="flex flex-col overflow-hidden rounded-[24px] bg-white p-2 text-sx-ink">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-sx-paper">
            <img
              src={withBase(floor.image)}
              alt={`${floor.title} at Serene Heights Lahore`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold">{floor.tag}</span>
          </div>
          <div className="flex flex-col gap-2 p-4 sm:p-5">
            <Heading className="font-heading text-2xl font-bold tracking-[-0.02em]">{floor.title}</Heading>
            <p className="text-base leading-relaxed text-sx-ink/65">{floor.body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
