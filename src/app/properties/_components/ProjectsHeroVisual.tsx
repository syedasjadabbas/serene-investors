import { pkrShort, smartUnit } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'
import { nathiaGaliProject } from '../_lib/projects'

/** The photo card that rises from the bottom of the projects hero, with a short project summary on it. */
export function ProjectsHeroVisual() {
  const project = nathiaGaliProject
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] bg-sx-ink sm:aspect-[16/9]">
      <img
        src={withBase(project.image)}
        alt="The Serene Heights Nathia Gali tower among pine trees in the mist"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute left-3 top-3 w-[min(300px,calc(100%-1.5rem))] rounded-[20px] bg-white p-4 text-left text-sx-ink sm:left-5 sm:top-5 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-sx-ink/65">{project.kind}</p>
          <span className="rounded-full bg-sx-ink px-2.5 py-0.5 text-[11px] font-semibold text-sx-mint">{project.status}</span>
        </div>
        <p className="mt-1.5 font-heading text-lg font-bold leading-tight tracking-[-0.015em]">{project.name}</p>
        <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-[12px] bg-sx-paper px-3 py-2">
            <dt className="text-[11px] text-sx-ink/65">Smart Property Unit</dt>
            <dd className="font-heading font-bold tabular-nums">{pkrShort(smartUnit.value)}</dd>
          </div>
          <div className="rounded-[12px] bg-sx-paper px-3 py-2">
            <dt className="text-[11px] text-sx-ink/65">Altitude</dt>
            <dd className="font-heading font-bold tabular-nums">{project.facts[0]}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
