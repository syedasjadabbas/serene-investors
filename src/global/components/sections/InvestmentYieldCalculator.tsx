'use client'

import { useState } from 'react'
import { ArrowRight, Calculator, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react'
import { ButtonLink } from '@/global/components/ui/Button'
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

type Props = {
  title?: string
  eyebrow?: string
  className?: string
}

export function InvestmentYieldCalculator({
  title = 'Investment & Projected Yield Calculator',
  eyebrow = 'INSTITUTIONAL MODELING',
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

  return (
    <section
      id="yield-calculator"
      className={cn(
        'home-band home-band--quiet overflow-x-clip border-y border-line bg-surface/90 py-16 md:py-20 lg:py-24',
        className,
      )}
      aria-labelledby="calculator-heading"
    >
      <div className="mx-auto max-w-[var(--container-wide)] px-5 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="home-kicker text-muted">{eyebrow}</p>
          <h2
            id="calculator-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">
            Forecast real quarterly dividend yields and conservative asset appreciation across prime
            institutional UK property holdings.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Controls Column */}
          <div className="rounded-2xl border border-ink/[0.08] bg-surface p-6 sm:p-8 shadow-xs lg:col-span-6 xl:col-span-7">
            {/* Amount Slider */}
            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="investment-amount" className="text-sm font-semibold text-ink">
                  Investment Capital
                </label>
                <span className="font-mono text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                  £{amount.toLocaleString('en-GB')}
                </span>
              </div>

              <input
                id="investment-amount"
                type="range"
                min={5000}
                max={500000}
                step={2500}
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-bg-warm accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              />

              {/* Amount Quick Presets */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted font-medium mr-1">Presets:</span>
                {amountPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset)}
                    className={cn(
                      'rounded-pill px-3 py-1 font-mono text-xs font-medium transition-all cursor-pointer',
                      amount === preset
                        ? 'bg-primary text-primary-ink font-semibold shadow-xs'
                        : 'border border-ink/[0.08] bg-surface hover:bg-bg-warm text-ink',
                    )}
                  >
                    £{(preset / 1000).toFixed(0)}k
                  </button>
                ))}
              </div>
            </div>

            <div className="my-8 h-px bg-line" />

            {/* Holding Period Slider */}
            <div>
              <div className="flex items-baseline justify-between">
                <label htmlFor="holding-years" className="text-sm font-semibold text-ink">
                  Holding Period
                </label>
                <span className="font-mono text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {years} {years === 1 ? 'Year' : 'Years'}
                </span>
              </div>

              <input
                id="holding-years"
                type="range"
                min={1}
                max={10}
                step={1}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-lg bg-bg-warm accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              />

              {/* Years Quick Presets */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted font-medium mr-1">Presets:</span>
                {yearPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setYears(preset)}
                    className={cn(
                      'rounded-pill px-3 py-1 font-mono text-xs font-medium transition-all cursor-pointer',
                      years === preset
                        ? 'bg-primary text-primary-ink font-semibold shadow-xs'
                        : 'border border-ink/[0.08] bg-surface hover:bg-bg-warm text-ink',
                    )}
                  >
                    {preset} yrs
                  </button>
                ))}
              </div>
            </div>

            <div className="my-8 h-px bg-line" />

            {/* Yield Scenario Selector */}
            <div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-ink">Yield Performance Model</span>
                <span className="font-mono text-xs font-semibold text-primary">
                  {selectedScenario.rate}% Net / Yr
                </span>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {scenarios.map((sc) => (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setSelectedScenario(sc)}
                    className={cn(
                      'flex flex-col items-start rounded-xl border p-3 text-left transition-all cursor-pointer',
                      selectedScenario.id === sc.id
                        ? 'border-primary bg-primary/[0.06] shadow-xs'
                        : 'border-ink/[0.08] bg-surface hover:border-ink/20 hover:bg-bg-warm/50',
                    )}
                  >
                    <span className="text-xs font-semibold text-ink">{sc.label}</span>
                    <span className="mt-1 font-mono text-sm font-bold text-primary">
                      {sc.rate}%
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Platform Security Reassurance */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-line bg-bg-warm/60 p-3.5">
              <ShieldCheck size={20} className="text-primary shrink-0" />
              <p className="text-xs leading-relaxed text-muted">
                100% asset-backed fractional shares registered with UK Land Registry title deeds.
                Distributions deposited quarterly to your verified bank account.
              </p>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="rounded-2xl border border-ink/[0.08] bg-surface p-6 sm:p-8 shadow-lg lg:col-span-6 xl:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                  <Calculator size={14} className="text-primary" />
                  Maturity Forecast
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                  <TrendingUp size={12} />
                  +{totalRoiPct.toFixed(1)}% Total Return
                </span>
              </div>

              {/* Big Stat: Total Estimated Return */}
              <div className="mt-6">
                <p className="text-xs font-medium text-muted">Total Projected Return ({years} yrs)</p>
                <p className="mt-1 font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
                  £{Math.round(totalEstimatedReturn).toLocaleString('en-GB')}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Portfolio asset value at exit:{' '}
                  <strong className="text-ink font-semibold">
                    £{Math.round(totalPortfolioValue).toLocaleString('en-GB')}
                  </strong>
                </p>
              </div>

              {/* Breakdown Figures */}
              <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-line bg-bg-warm/50 p-4">
                <div>
                  <p className="text-[0.72rem] text-muted uppercase font-medium">Est. Annual Income</p>
                  <p className="mt-1 font-mono text-lg font-bold text-primary">
                    £{Math.round(annualRentalIncome).toLocaleString('en-GB')}
                  </p>
                  <p className="text-[0.68rem] text-muted">
                    £{Math.round(monthlyRentalIncome).toLocaleString('en-GB')}/mo
                  </p>
                </div>
                <div>
                  <p className="text-[0.72rem] text-muted uppercase font-medium">Capital Growth</p>
                  <p className="mt-1 font-mono text-lg font-bold text-ink">
                    £{Math.round(projectedAppreciation).toLocaleString('en-GB')}
                  </p>
                  <p className="text-[0.68rem] text-muted">+4.2% compound / yr</p>
                </div>
              </div>

              {/* Visual Split Bar (Rental Dividends vs Capital Appreciation) */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold text-ink mb-2">
                  <span>Return Composition</span>
                  <span className="font-mono text-muted text-[0.7rem]">
                    Dividends vs Appreciation
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-bg-warm flex gap-0.5">
                  <div
                    className="h-full bg-primary transition-all duration-500 ease-out"
                    style={{ width: `${rentalRatio}%` }}
                    title={`Rental Distributions: ${rentalRatio}%`}
                  />
                  <div
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${appreciationRatio}%` }}
                    title={`Capital Growth: ${appreciationRatio}%`}
                  />
                </div>

                {/* Legend */}
                <div className="mt-3 flex items-center justify-between text-xs text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-primary" />
                    <span>
                      Rental Yields:{' '}
                      <strong className="text-ink">
                        £{Math.round(totalRentalIncome).toLocaleString('en-GB')}
                      </strong>{' '}
                      ({rentalRatio}%)
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-accent" />
                    <span>
                      Appreciation:{' '}
                      <strong className="text-ink">
                        £{Math.round(projectedAppreciation).toLocaleString('en-GB')}
                      </strong>{' '}
                      ({appreciationRatio}%)
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-line flex flex-col gap-3">
              <ButtonLink
                href={`/get-started?amount=${amount}`}
                className="w-full min-h-11 gap-2 text-sm shadow-md"
              >
                <span>Allocate £{amount.toLocaleString('en-GB')} to this portfolio</span>
                <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink
                variant="secondary"
                href="/properties"
                className="w-full min-h-11 text-sm text-center"
              >
                Browse matching prime properties
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
