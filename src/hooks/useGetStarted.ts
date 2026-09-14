import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { Fund, Property } from '@/types'
import {
  catalogueFeaturedFund,
  funds,
  properties,
  sampleFundMinimum,
  sampleOnboardingAmounts,
} from '@/data'

export type StartInterest = 'property' | 'fund'
export type SampleAmount = (typeof sampleOnboardingAmounts)[number]
export type OnboardingStep = 0 | 1 | 2

const cedarCourt = properties.find((item) => item.id === 'cedar-court')
if (!cedarCourt) {
  throw new Error('Missing sample record: cedar-court')
}
const defaultProperty: Property = cedarCourt
const defaultFund = catalogueFeaturedFund

function isSampleAmount(value: number): value is SampleAmount {
  return sampleOnboardingAmounts.includes(value as SampleAmount)
}

function propertyFromQuery(id: string | null) {
  if (!id) return undefined
  return properties.find((item) => item.id === id)
}

function fundFromQuery(id: string | null) {
  if (!id) return undefined
  return funds.find((item) => item.id === id)
}

function closestSampleAmount(minimum: number): SampleAmount {
  if (isSampleAmount(minimum)) return minimum
  return sampleOnboardingAmounts.reduce((current, amount) => {
    return Math.abs(amount - minimum) < Math.abs(current - minimum) ? amount : current
  })
}

export function useGetStarted() {
  const [params] = useSearchParams()
  const intent = params.get('intent')
  const relatedId = params.get('id')
  const queryProperty = propertyFromQuery(intent === 'property' ? relatedId : null)
  const queryFund = fundFromQuery(intent === 'fund' ? relatedId : null)

  const [step, setStep] = useState<OnboardingStep>(0)
  const [completed, setCompleted] = useState(false)
  const [interest, setInterest] = useState<StartInterest | null>(
    queryFund ? 'fund' : queryProperty ? 'property' : null,
  )
  const [amount, setAmount] = useState<SampleAmount | null>(() => {
    if (queryFund) return closestSampleAmount(sampleFundMinimum)
    if (queryProperty) return closestSampleAmount(queryProperty.sampleMinInvestment)
    return null
  })

  useEffect(() => {
    if (queryFund) {
      setInterest('fund')
      setAmount(closestSampleAmount(sampleFundMinimum))
      setStep(0)
      setCompleted(false)
      return
    }
    if (queryProperty) {
      setInterest('property')
      setAmount(closestSampleAmount(queryProperty.sampleMinInvestment))
      setStep(0)
      setCompleted(false)
      return
    }
    setInterest(null)
    setAmount(null)
    setStep(0)
    setCompleted(false)
  }, [intent, relatedId, queryFund, queryProperty])

  const sampleProperty: Property = queryProperty ?? defaultProperty
  const sampleFund: Fund = queryFund ?? defaultFund

  const listing = useMemo(() => {
    if (interest === 'fund') return { kind: 'fund' as const, fund: sampleFund }
    return { kind: 'property' as const, property: sampleProperty }
  }, [interest, sampleFund, sampleProperty])

  const canAdvance =
    (step === 0 && interest !== null) ||
    (step === 1 && amount !== null) ||
    (step === 2 && interest !== null && amount !== null)

  function next() {
    if (!canAdvance) return
    if (step === 2) {
      setCompleted(true)
      return
    }
    setStep((current) => (current + 1) as OnboardingStep)
  }

  function back() {
    if (completed) {
      setCompleted(false)
      setStep(2)
      return
    }
    if (step === 0) return
    setStep((current) => (current - 1) as OnboardingStep)
  }

  function chooseInterest(value: StartInterest) {
    setInterest(value)
    setCompleted(false)
  }

  function chooseAmount(value: SampleAmount) {
    setAmount(value)
    setCompleted(false)
  }

  return {
    amount,
    back,
    canAdvance,
    chooseAmount,
    chooseInterest,
    completed,
    interest,
    listing,
    next,
    sampleFund,
    sampleProperty,
    step,
  }
}
