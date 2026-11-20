'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CtaBand } from '@/global/components/page/CtaBand'
import { PageHeader } from '@/global/components/page/PageHeader'
import { PaymentPlanCalculator } from '@/global/components/sections/PaymentPlanCalculator'
import { usePageMeta } from '@/global/hooks/usePageMeta'

// Tool page (Pattern B in docs/INNER-PAGE-PATTERNS.md): plain header → one calculator card → closing band.

/** Reads ?plan= (set by the plan cards on /properties) to preselect a published plan. */
function CalculatorFromQuery() {
  const params = useSearchParams()
  const plan = params?.get('plan')
  return <PaymentPlanCalculator key={plan ?? 'default'} initialPlan={plan} />
}

export function CalculatorPage() {
  usePageMeta(
    'Serene Investors | Payment plans',
    'The published Serene Heights Nathia Gali payment plans: 30% down and 36 monthly instalments, from PKR 2,250,000 for a Smart Property Unit.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Payment plans"
        title="Pay 30% down, the rest over 36 months."
        highlight="36 months"
        body="Pick one of the four published Serene Heights Nathia Gali plans to see its total, down payment and monthly instalment, or estimate a custom apartment area at the published price per sq ft."
      />

      <section aria-label="Payment plan calculator" className="px-4 sm:px-8">
        <div className="mx-auto max-w-[1240px]">
          <Suspense fallback={<PaymentPlanCalculator />}>
            <CalculatorFromQuery />
          </Suspense>
        </div>
      </section>

      <CtaBand
        tone="brand"
        title="Found the plan that fits?"
        highlight="that fits"
        body="See both Serene Heights projects, or talk to the team about booking."
        actions={[
          { label: 'See the projects', href: '/properties' },
          { label: 'Contact us', href: '/contact' },
        ]}
      />
    </>
  )
}
