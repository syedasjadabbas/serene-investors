'use client'

import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHeader } from '@/global/components/page/PageHeader'
import { InvestmentYieldCalculator } from '@/global/components/sections/InvestmentYieldCalculator'
import { usePageMeta } from '@/global/hooks/usePageMeta'

// Tool page (Pattern B in docs/INNER-PAGE-PATTERNS.md): plain header → one calculator card → sign-up band.

export function CalculatorPage() {
  usePageMeta(
    'Serene Investors | Returns calculator',
    'Estimate the rental income and value growth a property share could produce over time. Illustrative figures only.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Returns calculator"
        title="See what a property share could earn."
        highlight="could earn"
        body="Set an amount, how long you would hold it and a net rental yield. The projection updates as you go. Figures are illustrative, not a forecast."
      />

      <section aria-label="Returns calculator" className="px-4 sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <InvestmentYieldCalculator variant="card" />
        </div>
      </section>

      <CtaBand
        tone="brand"
        title="Ready to put a number to work?"
        highlight="to work"
        body="Create an account to invest from a small sample minimum, or browse the listings first."
        actions={[
          { label: 'Create an account', href: '/signup' },
          { label: 'Browse properties', href: '/properties' },
        ]}
      />
    </>
  )
}
