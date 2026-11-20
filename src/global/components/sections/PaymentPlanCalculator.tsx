'use client'

import { useId, useState } from 'react'
import { Info, Ruler } from 'lucide-react'
import { PillLink } from '@/global/components/ui/PillLink'
import { plans, pkr, pricing, smartUnit, whatsappWith, type Plan } from '@/global/data/serene'
import { cn } from '@/global/lib/cn'

// Payment plans for Serene Heights Nathia Gali. "Published" shows the four plans exactly as issued;
// "Estimate" applies the published PKR per sq ft, 30% down and 36 months to a custom area.

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand'
const AREA_MIN = 50
const AREA_MAX = 3000
const AREA_DEFAULT = 700

type Mode = 'published' | 'estimate'

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

function ResultTiles({ total, down, monthly, note }: { total: number; down: number; monthly: number; note: string }) {
  return (
    <div aria-live="polite" className="grid gap-3">
      <div className="flex min-h-[160px] flex-col justify-between gap-6 rounded-[16px] bg-sx-ink p-5 text-white sm:p-6">
        <p className="text-sm text-white/70">Total price</p>
        <div>
          <p className="break-words font-heading text-4xl font-bold tabular-nums tracking-[-0.03em] sm:text-5xl">{pkr(total)}</p>
          <p className="mt-2 text-sm text-white/70">{note}</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex min-h-[140px] flex-col justify-between gap-4 rounded-[16px] bg-sx-forest p-5 text-white sm:p-6">
          <p className="text-sm text-white/75">Down payment ({Math.round(pricing.downShare * 100)}%)</p>
          <p className="break-words font-heading text-3xl font-bold tabular-nums tracking-[-0.03em]">{pkr(down)}</p>
        </div>
        <div className="flex min-h-[140px] flex-col justify-between gap-4 rounded-[16px] bg-sx-paper p-5 text-sx-ink sm:p-6">
          <p className="text-sm text-sx-ink/70">{pricing.months} monthly instalments of</p>
          <p className="break-words font-heading text-3xl font-bold tabular-nums tracking-[-0.03em]">{pkr(monthly)}</p>
        </div>
      </div>
      {/* The split of the price: down payment, then the instalments. */}
      <div className="rounded-[16px] bg-sx-paper p-5 sm:p-6">
        <div className="flex h-3 overflow-hidden rounded-full bg-white" aria-hidden="true">
          <span className="bg-sx-forest" style={{ width: `${pricing.downShare * 100}%` }} />
          <span className="flex-1 bg-sx-brand" />
        </div>
        <p className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-sx-ink/70">
          <span>{Math.round(pricing.downShare * 100)}% on booking</span>
          <span>{Math.round((1 - pricing.downShare) * 100)}% over {pricing.months} months</span>
        </p>
      </div>
    </div>
  )
}

function PublishedPlans({ selected, onSelect }: { selected: Plan['id']; onSelect: (id: Plan['id']) => void }) {
  const name = useId()
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-3 text-sm font-semibold">Choose a published plan</legend>
      {plans.map((plan) => {
        const checked = plan.id === selected
        return (
          <label
            key={plan.id}
            className={cn(
              'flex cursor-pointer items-center gap-4 rounded-[16px] border-2 bg-sx-paper p-4 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-sx-brand',
              checked ? 'border-sx-brand bg-white' : 'border-transparent hover:bg-white',
            )}
          >
            <input
              type="radio"
              name={name}
              value={plan.id}
              checked={checked}
              onChange={() => onSelect(plan.id)}
              className="size-5 shrink-0 accent-sx-brand"
            />
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">{plan.kind}</span>
              <span className="block text-sm text-sx-ink/65">
                {plan.project} · {plan.area} sq ft
              </span>
            </span>
            <span className="shrink-0 whitespace-nowrap text-right font-heading text-sm font-bold tabular-nums sm:text-base">{pkr(plan.total)}</span>
          </label>
        )
      })}
    </fieldset>
  )
}

function AreaEstimate({ draft, setDraft, area }: { draft: string; setDraft: (value: string) => void; area: number }) {
  const id = useId()
  return (
    <div className="flex flex-col gap-3 rounded-[16px] bg-sx-paper p-5 sm:p-6">
      <Ruler size={20} aria-hidden="true" className="text-sx-brand" />
      <label htmlFor={`${id}-area`} className="text-sm font-semibold">
        Apartment area (sq ft)
      </label>
      <div className="flex items-center rounded-[12px] bg-white px-4 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-sx-brand">
        <input
          id={`${id}-area`}
          type="text"
          inputMode="numeric"
          autoComplete="off"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => setDraft(String(area))}
          aria-describedby={`${id}-hint`}
          className="h-14 w-full min-w-0 bg-transparent font-heading text-2xl font-bold tabular-nums tracking-[-0.02em] outline-none"
        />
        <span aria-hidden="true" className="text-sm font-semibold text-sx-ink/65">
          sq ft
        </span>
      </div>
      <label htmlFor={`${id}-range`} className="sr-only">
        Apartment area slider
      </label>
      <input
        id={`${id}-range`}
        type="range"
        min={AREA_MIN}
        max={AREA_MAX}
        step={1}
        value={area}
        onChange={(e) => setDraft(e.target.value)}
        aria-valuetext={`${area} sq ft`}
        className={cn('h-6 w-full cursor-pointer rounded-full accent-sx-brand', FOCUS)}
      />
      <p id={`${id}-hint`} className="text-xs leading-relaxed text-sx-ink/70">
        Estimate at the published {pkr(pricing.perSqft)} per sq ft, {Math.round(pricing.downShare * 100)}% down and {pricing.months} monthly
        instalments. The {smartUnit.sqft} sq ft Smart Property Unit is priced separately at {pkr(smartUnit.value)}.
      </p>
    </div>
  )
}

/** Smart Property Unit projection, exactly as published, with its note. */
export function SmartUnitProjection({ className }: { className?: string }) {
  return (
    <figure className={cn('rounded-[16px] bg-sx-paper p-5 sm:p-6', className)}>
      <figcaption className="text-sm font-semibold">Smart Property Unit projection</figcaption>
      <table className="mt-4 w-full text-left text-sm">
        <caption className="sr-only">Projection published by Serene Heights for one Smart Property Unit</caption>
        <tbody>
          {smartUnit.projection.map((row) => (
            <tr key={row.label} className="border-t border-sx-ink/10 first:border-t-0">
              <th scope="row" className="py-3 pr-4 font-normal text-sx-ink/70">
                {row.label}
              </th>
              <td className="whitespace-nowrap py-3 text-right font-heading font-bold tabular-nums">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 flex items-start gap-2.5 text-xs leading-relaxed text-sx-ink/70">
        <Info size={16} aria-hidden="true" className="mt-px shrink-0 text-sx-brand" />
        <span>{smartUnit.projectionNote}</span>
      </p>
    </figure>
  )
}

/** The payment plans card: pick a published plan or estimate a custom area, plus the Smart Property Unit projection. */
export function PaymentPlanCalculator({ initialPlan }: { initialPlan?: string | null }) {
  const startPlan = plans.find((plan) => plan.id === initialPlan)?.id ?? plans[0].id
  const [mode, setMode] = useState<Mode>('published')
  const [planId, setPlanId] = useState<Plan['id']>(startPlan)
  const [areaDraft, setAreaDraft] = useState(String(AREA_DEFAULT))

  const plan = plans.find((item) => item.id === planId) ?? plans[0]
  const parsed = Number(areaDraft.replace(/[^0-9.]/g, ''))
  const area = clamp(Number.isFinite(parsed) && parsed > 0 ? Math.round(parsed) : AREA_MIN, AREA_MIN, AREA_MAX)
  const estimateTotal = area * pricing.perSqft
  const estimateDown = estimateTotal * pricing.downShare
  const estimateMonthly = (estimateTotal - estimateDown) / pricing.months

  const enquiry =
    mode === 'published'
      ? `Hello, I would like to know more about the ${plan.kind} (${plan.area} sq ft) payment plan at Serene Heights ${plan.project}.`
      : `Hello, I would like to know more about a ${area} sq ft hotel apartment at Serene Heights Nathia Gali.`

  return (
    <div className="rounded-[30px] bg-white p-3 text-sx-ink sm:p-6">
      <div role="group" aria-label="Calculator mode" className="mb-4 flex w-full rounded-full bg-sx-paper p-1 text-sm sm:w-fit">
        {(
          [
            ['published', 'Published plans'],
            ['estimate', 'Estimate by area'],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => setMode(value)}
            className={cn(
              'min-h-11 flex-1 rounded-full px-4 font-semibold transition-colors sm:flex-none sm:px-6',
              FOCUS,
              mode === value ? 'bg-sx-forest text-white' : 'text-sx-ink/65 hover:text-sx-ink',
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-3 lg:grid-cols-12">
        <div className="flex flex-col gap-3 lg:col-span-5">
          {mode === 'published' ? (
            <PublishedPlans selected={plan.id} onSelect={setPlanId} />
          ) : (
            <AreaEstimate draft={areaDraft} setDraft={setAreaDraft} area={area} />
          )}
        </div>

        <div className="flex flex-col gap-3 lg:col-span-7">
          {mode === 'published' ? (
            <ResultTiles
              total={plan.total}
              down={plan.down}
              monthly={plan.monthly}
              note={`${plan.kind}, ${plan.area} sq ft, ${plan.project}. Exactly as published.`}
            />
          ) : (
            <ResultTiles
              total={estimateTotal}
              down={estimateDown}
              monthly={estimateMonthly}
              note={`Estimate for ${area} sq ft at the published ${pkr(pricing.perSqft)} per sq ft. Not a published plan.`}
            />
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PillLink href={`${mode === 'published' ? `/get-started?intent=plan&id=${plan.id}` : '/get-started?intent=project&id=nathia-gali'}`} variant="brand">
              Book this plan
            </PillLink>
            <a
              href={whatsappWith(enquiry)}
              target="_blank"
              rel="noreferrer"
              className={cn(
                'inline-flex min-h-11 items-center justify-center rounded-full border border-current px-6 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-ink/5 sm:text-base',
                FOCUS,
              )}
            >
              Ask on WhatsApp
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <SmartUnitProjection className="mt-3" />
    </div>
  )
}
