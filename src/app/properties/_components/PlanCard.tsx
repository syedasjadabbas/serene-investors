import Link from 'next/link'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { pkr, type Plan } from '@/global/data/serene'
import { withBase } from '@/global/lib/asset'
import { planImage } from '../_lib/projects'

/** A published payment plan as a listing-style card: photo, unit, total, down payment and instalment. */
export function PlanCard({ plan }: { plan: Plan }) {
  const image = planImage(plan.id)
  return (
    <li>
      <Link
        href={`/calculator?plan=${plan.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white p-2 text-sx-ink transition-shadow hover:shadow-[0_12px_40px_rgba(14,16,15,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-sx-paper">
          <img src={withBase(image.src)} alt={image.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sx-ink">{plan.project}</span>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div>
            <h3 className="font-heading text-xl font-bold leading-tight tracking-[-0.015em]">{plan.kind}</h3>
            <p className="mt-1 text-sm text-sx-ink/65">{plan.area} sq ft</p>
          </div>
          <p className="font-heading text-2xl font-bold tabular-nums tracking-[-0.02em]">{pkr(plan.total)}</p>
          <dl className="grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-[12px] bg-sx-paper px-3 py-2">
              <dt className="text-xs text-sx-ink/65">30% down</dt>
              <dd className="font-semibold tabular-nums">{pkr(plan.down)}</dd>
            </div>
            <div className="rounded-[12px] bg-sx-paper px-3 py-2">
              <dt className="text-xs text-sx-ink/65">36 × monthly</dt>
              <dd className="font-semibold tabular-nums">{pkr(plan.monthly)}</dd>
            </div>
          </dl>
          <span className="mt-auto flex items-center justify-between text-sm font-semibold">
            See this plan
            <ArrowCircle tone="brand" size="sm" />
          </span>
        </div>
      </Link>
    </li>
  )
}

/** Grid of all the published plans. */
export function PlanGrid({ plans }: { plans: readonly Plan[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} />
      ))}
    </ul>
  )
}
