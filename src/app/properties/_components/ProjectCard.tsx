import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import type { projects } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'
import { cn } from '@/global/lib/cn'

type Project = (typeof projects)[number]

/** One Serene Heights project as a big card: photo on one side, status, place and facts on the other. */
export function ProjectCard({ project, reverse = false }: { project: Project; reverse?: boolean }) {
  const headingId = `project-${project.id}`
  return (
    <article aria-labelledby={headingId} className="grid gap-4 rounded-[30px] bg-white p-3 text-sx-ink sm:p-4 md:grid-cols-2">
      <div className={cn('relative min-h-[280px] overflow-hidden rounded-[22px] bg-sx-paper sm:min-h-[420px]', reverse && 'md:order-2')}>
        <img
          src={withBase(project.image)}
          alt={`${project.name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-sx-ink px-3 py-1 text-xs font-semibold text-sx-mint">{project.status}</span>
      </div>
      <div className="flex flex-col gap-5 p-4 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sx-brand">
          {project.kind} · {project.since}
        </p>
        <h3 id={headingId} className="font-heading text-3xl font-bold leading-[1.08] tracking-[-0.025em] sm:text-4xl">
          {project.name}
        </h3>
        <p className="flex items-start gap-2 text-sm font-semibold text-sx-ink/75">
          <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
          {project.place}
        </p>
        <p className="text-base leading-relaxed text-sx-ink/65">{project.summary}</p>
        <ul className="flex flex-wrap gap-2" aria-label="Key facts">
          {project.facts.map((fact) => (
            <li key={fact} className="rounded-full bg-sx-paper px-3 py-1.5 text-sm font-semibold">
              {fact}
            </li>
          ))}
        </ul>
        <Link
          href={`/properties/${project.id}`}
          className="group mt-auto flex w-fit items-center gap-4 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand sm:text-base"
        >
          Explore {project.short}
          <ArrowCircle tone="mint" size="sm" />
        </Link>
      </div>
    </article>
  )
}
