'use client'

import { useId, useState, type ReactNode } from 'react'
import { Calendar, Info, Minus, Percent, Plus, Wallet, type LucideIcon } from 'lucide-react'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { cn } from '@/global/lib/cn'
import { formatSampleAmount } from '@/global/lib/format'

// Amount limits and the yield stepper range. The maths below is unchanged: a fixed net yield every
// year plus 4.2% yearly capital growth, compounding.
const AMOUNT_MIN = 5000
const AMOUNT_MAX = 500000
const AMOUNT_STEP = 2500
const YIELD_MIN = 3
const YIELD_MAX = 12
const YIELD_STEP = 0.5
const DEFAULT_YIELD = 7
const CAPITAL_GROWTH_RATE = 0.042
const YEAR_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand'

const money = (value: number) => formatSampleAmount(Math.round(value))
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

/** Callers may pass the eyebrow in capitals ("PORTFOLIO MODELING"); the pill reads better in sentence case. */
function sentenceCase(text: string) {
  if (text !== text.toUpperCase()) return text
  const lower = text.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

function project(amount: number, rate: number, years: number) {
  const annualRentalIncome = amount * (rate / 100)
  const totalRentalIncome = annualRentalIncome * years
  const projectedAppreciation = amount * (Math.pow(1 + CAPITAL_GROWTH_RATE, years) - 1)
  return { annualRentalIncome, totalRentalIncome, projectedAppreciation, totalEstimatedReturn: totalRentalIncome + projectedAppreciation }
}

type Props = {
  title?: string
  eyebrow?: string
  className?: string
  /**
   * section (default): a full page section with its own heading, for embedding in a page (Funds).
   * card: just the calculator card, for a page that already has its title (/calculator).
   */
  variant?: 'section' | 'card'
}

function InputTile({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 rounded-[16px] bg-sx-paper p-5 sm:p-6">
      <Icon size={20} aria-hidden="true" className="text-sx-brand" />
      {children}
    </div>
  )
}

function CalculatorCard() {
  const id = useId()
  const [amountDraft, setAmountDraft] = useState(String(25000))
  const [years, setYears] = useState(5)
  const [rate, setRate] = useState(DEFAULT_YIELD)

  const parsed = Number(amountDraft.replace(/[^0-9.]/g, ''))
  const amount = clamp(Number.isFinite(parsed) ? parsed : AMOUNT_MIN, AMOUNT_MIN, AMOUNT_MAX)

  const result = project(amount, rate, years)
  const monthlyRentalIncome = result.annualRentalIncome / 12
  const quarterlyRentalIncome = result.annualRentalIncome / 4
  const totalPortfolioValue = amount + result.projectedAppreciation
  const totalRoiPct = (result.totalEstimatedReturn / amount) * 100
  const yearsLabel = `${years} ${years === 1 ? 'year' : 'years'}`

  // One bar per year: rent collected so far and growth in value so far.
  const bars = Array.from({ length: years }, (_, index) => {
    const step = project(amount, rate, index + 1)
    return { year: index + 1, rent: step.totalRentalIncome, growth: step.projectedAppreciation, total: step.totalEstimatedReturn }
  })
  const peak = bars[bars.length - 1]?.total || 1

  const stepRate = (direction: 1 | -1) => setRate((current) => clamp(Math.round((current + direction * YIELD_STEP) * 10) / 10, YIELD_MIN, YIELD_MAX))

  return (
    <div className="rounded-[30px] bg-white p-3 text-sx-ink sm:p-6">
      <div className="grid gap-3 lg:grid-cols-12">
        {/* Inputs */}
        <div className="grid gap-3 lg:col-span-5">
          <InputTile icon={Wallet}>
            <label htmlFor={`${id}-amount`} className="text-sm font-semibold">
              Investment amount
            </label>
            <div className="flex items-center rounded-[12px] bg-white px-4 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-sx-brand">
              <span aria-hidden="true" className="font-heading text-2xl font-bold text-sx-ink/45">
                $
              </span>
              <input
                id={`${id}-amount`}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={amountDraft}
                onChange={(e) => setAmountDraft(e.target.value)}
                onBlur={() => setAmountDraft(String(amount))}
                aria-describedby={`${id}-amount-hint`}
                className="h-14 w-full min-w-0 bg-transparent pl-1 font-heading text-2xl font-bold tabular-nums tracking-[-0.02em] outline-none"
              />
            </div>
            <label htmlFor={`${id}-amount-range`} className="sr-only">
              Investment amount slider
            </label>
            <input
              id={`${id}-amount-range`}
              type="range"
              min={AMOUNT_MIN}
              max={AMOUNT_MAX}
              step={AMOUNT_STEP}
              value={amount}
              onChange={(e) => setAmountDraft(e.target.value)}
              aria-valuetext={money(amount)}
              className={cn('h-2 w-full cursor-pointer rounded-full accent-sx-brand', FOCUS)}
            />
            <p id={`${id}-amount-hint`} className="flex justify-between text-xs text-sx-ink/55">
              <span>{money(AMOUNT_MIN)}</span>
              <span>{money(AMOUNT_MAX)}</span>
            </p>
          </InputTile>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <InputTile icon={Calendar}>
              <label htmlFor={`${id}-years`} className="text-sm font-semibold">
                Holding period
              </label>
              <select
                id={`${id}-years`}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className={cn('h-12 w-full cursor-pointer rounded-[12px] bg-white px-3 text-base font-semibold', FOCUS)}
              >
                {YEAR_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option} {option === 1 ? 'year' : 'years'}
                  </option>
                ))}
              </select>
            </InputTile>

            <InputTile icon={Percent}>
              <label htmlFor={`${id}-yield`} className="text-sm font-semibold">
                Net rental yield (%)
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => stepRate(-1)}
                  disabled={rate <= YIELD_MIN}
                  aria-label="Lower the yield by 0.5%"
                  aria-controls={`${id}-yield`}
                  className={cn('flex size-11 shrink-0 items-center justify-center rounded-full bg-sx-ink text-white transition-colors hover:bg-sx-forest disabled:opacity-35', FOCUS)}
                >
                  <Minus size={18} aria-hidden="true" />
                </button>
                <input
                  id={`${id}-yield`}
                  type="number"
                  min={YIELD_MIN}
                  max={YIELD_MAX}
                  step={YIELD_STEP}
                  value={rate}
                  onChange={(e) => {
                    const next = Number(e.target.value)
                    if (Number.isFinite(next)) setRate(clamp(next, YIELD_MIN, YIELD_MAX))
                  }}
                  className={cn('h-12 w-full min-w-0 rounded-[12px] bg-white text-center font-heading text-xl font-bold tabular-nums', FOCUS)}
                />
                <button
                  type="button"
                  onClick={() => stepRate(1)}
                  disabled={rate >= YIELD_MAX}
                  aria-label="Raise the yield by 0.5%"
                  aria-controls={`${id}-yield`}
                  className={cn('flex size-11 shrink-0 items-center justify-center rounded-full bg-sx-ink text-white transition-colors hover:bg-sx-forest disabled:opacity-35', FOCUS)}
                >
                  <Plus size={18} aria-hidden="true" />
                </button>
              </div>
            </InputTile>
          </div>

          <p className="flex items-start gap-2.5 px-2 py-1 text-xs leading-relaxed text-sx-ink/60">
            <Info size={16} aria-hidden="true" className="mt-px shrink-0 text-sx-brand" />
            <span>
              Illustrative estimate. Assumes the chosen net yield every year and 4.2% yearly capital growth, compounding. Real
              income and values can fall as well as rise; returns are not guaranteed.
            </span>
          </p>
        </div>

        {/* Results and chart */}
        <div className="grid gap-3 lg:col-span-7">
          <div aria-live="polite" className="grid gap-3 sm:grid-cols-2">
            <div className="flex min-h-[180px] flex-col justify-between gap-6 rounded-[16px] bg-sx-ink p-5 text-white sm:p-6">
              <p className="text-sm text-white/65">Total projected return after {yearsLabel}</p>
              <div>
                <p className="font-heading text-4xl font-bold tabular-nums tracking-[-0.03em] sm:text-5xl">{money(result.totalEstimatedReturn)}</p>
                <p className="mt-2 text-sm text-white/65">
                  +{totalRoiPct.toFixed(1)}% · value at exit <strong className="font-semibold text-white">{money(totalPortfolioValue)}</strong>
                </p>
              </div>
            </div>
            <div className="flex min-h-[180px] flex-col justify-between gap-6 rounded-[16px] bg-sx-forest p-5 text-white sm:p-6">
              <p className="text-sm text-white/70">Estimated rental income a year</p>
              <div>
                <p className="font-heading text-4xl font-bold tabular-nums tracking-[-0.03em] sm:text-5xl">{money(result.annualRentalIncome)}</p>
                <p className="mt-2 text-sm text-white/70">
                  {money(monthlyRentalIncome)} a month · {money(quarterlyRentalIncome)} a quarter
                </p>
              </div>
            </div>
          </div>

          <figure className="flex flex-col gap-4 rounded-[16px] bg-sx-paper p-5 sm:p-6">
            <figcaption className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-semibold">Projection by year</span>
              <span className="flex flex-wrap gap-4 text-xs text-sx-ink/65">
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-sx-brand" />
                  Rent {money(result.totalRentalIncome)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-sx-forest" />
                  Value growth {money(result.projectedAppreciation)}
                </span>
              </span>
            </figcaption>
            <div aria-hidden="true" className="flex h-48 items-end gap-1.5 sm:h-56 sm:gap-2">
              {bars.map((bar) => (
                <div key={bar.year} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1.5">
                  <div className="flex w-full flex-col justify-end overflow-hidden rounded-[8px]" style={{ height: `${(bar.total / peak) * 100}%` }}>
                    <div className="w-full bg-sx-forest transition-[height] duration-500 ease-out" style={{ height: `${(bar.growth / bar.total) * 100}%` }} />
                    <div className="w-full flex-1 bg-sx-brand" />
                  </div>
                  <span className="text-[11px] font-medium tabular-nums text-sx-ink/55">Y{bar.year}</span>
                </div>
              ))}
            </div>
          </figure>

          <div className="flex flex-col gap-3 sm:flex-row">
            <PillLink href={`/get-started?amount=${amount}`} variant="brand">
              Start with {money(amount)}
            </PillLink>
            <PillLink href="/properties" variant="outline">
              Browse sample properties
            </PillLink>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Rental income and capital growth projection: input tiles, two result tiles and a yearly chart in one card. */
export function InvestmentYieldCalculator({
  title = 'Estimate your projected returns',
  eyebrow = 'Projection model',
  className,
  variant = 'section',
}: Props) {
  if (variant === 'card') return <CalculatorCard />

  return (
    <PageSection id="yield-calculator" labelledBy="calculator-heading" className={cn('overflow-x-clip', className)}>
      <SectionHeading
        id="calculator-heading"
        eyebrow={sentenceCase(eyebrow)}
        title={title}
        body="Estimate rental income and capital growth for an amount and holding period. Illustrative figures only: returns are not guaranteed."
      />
      <div className="mt-10">
        <CalculatorCard />
      </div>
    </PageSection>
  )
}
