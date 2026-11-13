'use client'

import { useState } from 'react'
import { Calculator, Info, TrendingUp } from 'lucide-react'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { PillLink } from '@/global/components/ui/PillLink'
import { cn } from '@/global/lib/cn'

type YieldScenario = {
  id: string
  label: string
  rate: number
}

const scenarios: YieldScenario[] = [
  { id: 'conservative', label: 'Conservative Core', rate: 6.5 },
  { id: 'target', label: 'Platform Average', rate: 7.4 },
  { id: 'opportunistic', label: 'High-Yield Focus', rate: 8.2 },
]

const amountPresets = [10000, 25000, 50000, 100000, 250000]
const yearPresets = [3, 5, 7, 10]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand'
const RANGE_CLASS = cn('mt-4 h-2 w-full cursor-pointer rounded-full accent-sx-brand', FOCUS)

function chipClass(selected: boolean) {
  return cn(
    'min-h-9 rounded-full px-3.5 text-xs font-semibold tabular-nums transition-colors',
    FOCUS,
    selected ? 'bg-sx-ink text-white' : 'bg-white text-sx-ink hover:bg-sx-sand',
  )
}

/** Callers may pass the eyebrow in capitals ("PORTFOLIO MODELING"); the pill reads better in sentence case. */
function sentenceCase(text: string) {
  if (text !== text.toUpperCase()) return text
  const lower = text.toLowerCase()
  return lower.charAt(0).toUpperCase() + lower.slice(1)
}

const gbp = (value: number) => `£${Math.round(value).toLocaleString('en-GB')}`

type Props = {
  title?: string
  eyebrow?: string
  className?: string
}

export function InvestmentYieldCalculator({
  title = 'Investment & Projected Yield Calculator',
  eyebrow = 'Projection model',
  className,
}: Props) {
  const [amount, setAmount] = useState<number>(25000)
  const [years, setYears] = useState<number>(5)
  const [selectedScenario, setSelectedScenario] = useState<YieldScenario>(scenarios[1])

  // Calculations
  const annualRentalIncome = amount * (selectedScenario.rate / 100)
  const monthlyRentalIncome = annualRentalIncome / 12
  const quarterlyRentalIncome = annualRentalIncome / 4
  const totalRentalIncome = annualRentalIncome * years

  // Conservative capital growth modeled at 4.2% per year compounding
  const capitalGrowthRate = 0.042
  const projectedAppreciation = amount * (Math.pow(1 + capitalGrowthRate, years) - 1)
  const totalEstimatedReturn = totalRentalIncome + projectedAppreciation
  const totalPortfolioValue = amount + projectedAppreciation
  const totalRoiPct = (totalEstimatedReturn / amount) * 100

  // Split percentages for visual bar
  const rentalRatio = Math.max(1, Math.round((totalRentalIncome / totalEstimatedReturn) * 100))
  const appreciationRatio = Math.max(1, 100 - rentalRatio)

  const yearsLabel = `${years} ${years === 1 ? 'year' : 'years'}`

  return (
    <PageSection
      id="yield-calculator"
      labelledBy="calculator-heading"
      tone="white"
      className={cn('overflow-x-clip', className)}
    >
      <SectionHeading
        id="calculator-heading"
        eyebrow={sentenceCase(eyebrow)}
        title={title}
        body="Estimate rental income and capital growth for an amount and holding period. Illustrative figures only: returns are not guaranteed."
        align="center"
        className="[&_h2]:scroll-mt-28"
      />

      <div className="mt-12 grid items-start gap-4 lg:grid-cols-12">
        {/* Controls */}
        <div className="rounded-[20px] bg-sx-paper p-5 sm:p-8 lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <label htmlFor="investment-amount" className="text-sm font-semibold text-sx-ink">
                Investment amount
              </label>
              <output
                htmlFor="investment-amount"
                className="font-heading text-2xl font-bold tabular-nums tracking-[-0.02em] text-sx-ink sm:text-3xl"
              >
                {gbp(amount)}
              </output>
            </div>
            <input
              id="investment-amount"
              type="range"
              min={5000}
              max={500000}
              step={2500}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              aria-valuetext={gbp(amount)}
              className={RANGE_CLASS}
            />
            <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Amount presets">
              {amountPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  aria-pressed={amount === preset}
                  onClick={() => setAmount(preset)}
                  className={chipClass(amount === preset)}
                >
                  £{(preset / 1000).toFixed(0)}k
                </button>
              ))}
            </div>
          </div>

          <div className="my-7 h-px bg-sx-ink/10" />

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <label htmlFor="holding-years" className="text-sm font-semibold text-sx-ink">
                Holding period
              </label>
              <output
                htmlFor="holding-years"
                className="font-heading text-xl font-bold tabular-nums tracking-[-0.02em] text-sx-ink sm:text-2xl"
              >
                {yearsLabel}
              </output>
            </div>
            <input
              id="holding-years"
              type="range"
              min={1}
              max={10}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              aria-valuetext={yearsLabel}
              className={RANGE_CLASS}
            />
            <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Holding period presets">
              {yearPresets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  aria-pressed={years === preset}
                  onClick={() => setYears(preset)}
                  className={chipClass(years === preset)}
                >
                  {preset} yrs
                </button>
              ))}
            </div>
          </div>

          <div className="my-7 h-px bg-sx-ink/10" />

          <div role="group" aria-labelledby="yield-scenario-label">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span id="yield-scenario-label" className="text-sm font-semibold text-sx-ink">
                Yield scenario
              </span>
              <span className="text-xs font-semibold text-sx-brand">{selectedScenario.rate}% net a year</span>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {scenarios.map((sc) => {
                const selected = selectedScenario.id === sc.id
                return (
                  <button
                    key={sc.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setSelectedScenario(sc)}
                    className={cn(
                      'flex flex-col items-start rounded-[14px] p-3.5 text-left transition-colors',
                      FOCUS,
                      selected ? 'bg-sx-ink text-white' : 'bg-white text-sx-ink hover:bg-sx-sand',
                    )}
                  >
                    <span className="text-xs font-semibold">{sc.label}</span>
                    <span className={cn('mt-1 font-heading text-lg font-bold', selected ? 'text-sx-mint' : 'text-sx-brand')}>
                      {sc.rate}%
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <p className="mt-7 flex items-start gap-2.5 text-xs leading-relaxed text-sx-ink/60">
            <Info size={16} aria-hidden="true" className="mt-px shrink-0 text-sx-brand" />
            <span>
              Illustrative estimate. Assumes the selected net yield every year and 4.2% yearly capital growth,
              compounding. Real income and values can fall as well as rise.
            </span>
          </p>
        </div>

        {/* Results */}
        <div className="flex flex-col justify-between gap-8 rounded-[20px] bg-sx-ink p-5 text-white sm:p-8 lg:col-span-5">
          <div aria-live="polite">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/60">
                <Calculator size={14} aria-hidden="true" className="text-sx-mint" />
                Projection after {yearsLabel}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-sx-mint px-2.5 py-0.5 text-xs font-semibold text-sx-ink">
                <TrendingUp size={12} aria-hidden="true" />+{totalRoiPct.toFixed(1)}% total return
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-white/60">Total projected return</p>
              <p className="mt-1 font-heading text-4xl font-bold tabular-nums tracking-[-0.03em] sm:text-5xl">
                {gbp(totalEstimatedReturn)}
              </p>
              <p className="mt-2 text-sm text-white/60">
                Asset value at exit: <strong className="font-semibold text-white">{gbp(totalPortfolioValue)}</strong>
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-[14px] bg-sx-card p-4">
                <dt className="text-xs text-white/60">Est. annual income</dt>
                <dd className="mt-1 font-heading text-lg font-bold tabular-nums text-sx-mint">{gbp(annualRentalIncome)}</dd>
                <dd className="text-xs text-white/50">
                  {gbp(monthlyRentalIncome)}/mo · {gbp(quarterlyRentalIncome)}/qtr
                </dd>
              </div>
              <div className="rounded-[14px] bg-sx-card p-4">
                <dt className="text-xs text-white/60">Capital growth</dt>
                <dd className="mt-1 font-heading text-lg font-bold tabular-nums">{gbp(projectedAppreciation)}</dd>
                <dd className="text-xs text-white/50">+4.2% compound / yr</dd>
              </div>
            </dl>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold text-white/80">Return composition</p>
              <div className="flex h-3 w-full gap-0.5 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                <div className="h-full bg-sx-brand transition-all duration-500 ease-out" style={{ width: `${rentalRatio}%` }} />
                <div className="h-full bg-sx-sand transition-all duration-500 ease-out" style={{ width: `${appreciationRatio}%` }} />
              </div>
              <ul className="mt-3 flex flex-col gap-1.5 text-xs text-white/60">
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-sx-brand" />
                  <span>
                    Rental income: <strong className="text-white">{gbp(totalRentalIncome)}</strong> ({rentalRatio}%)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-sx-sand" />
                  <span>
                    Appreciation: <strong className="text-white">{gbp(projectedAppreciation)}</strong> ({appreciationRatio}%)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6">
            <PillLink href={`/get-started?amount=${amount}`} variant="brand" className="w-full">
              Allocate {gbp(amount)} to this portfolio
            </PillLink>
            <PillLink href="/properties" variant="outline" className="w-full">
              Browse matching properties
            </PillLink>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
