import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { interests, plans, projectById, type InterestKey, type Plan } from '@/global/data/serene'
import { isInterestKey, planBody, planTitle, plansFor, projectOf, visitProjects, type Project } from '../_lib/get-started'

export type OnboardingStep = 0 | 1 | 2

type Initial = { interest: InterestKey | null; planId: Plan['id'] | null; visit: Project | null }

/**
 * Reads `?intent=&id=` and maps it to a real option. Supported:
 *   intent=project&id=nathia-gali|lahore · intent=plan&id=<plan id> · intent=interest&id=<interest key>
 * Anything else is ignored.
 */
function initialFromQuery(intent: string | null | undefined, id: string | null | undefined): Initial {
  const none: Initial = { interest: null, planId: null, visit: null }
  if (!intent || !id) return none
  if (intent === 'project') {
    if (id === 'nathia-gali') return { interest: 'ng-smart', planId: 'spu', visit: null }
    if (id === 'lahore') return { interest: 'lhr-smart', planId: null, visit: null }
  }
  if (intent === 'plan') {
    const plan = plans.find((p) => p.id === id)
    if (plan) return { interest: plan.id === 'spu' ? 'ng-smart' : 'ng-apartment', planId: plan.id, visit: null }
  }
  if (intent === 'interest' && isInterestKey(id)) {
    return { interest: id, planId: id === 'ng-smart' ? 'spu' : null, visit: null }
  }
  return none
}

/**
 * Enquiry state. The page remounts the onboarding (via `key`) when the query changes, which resets it.
 */
export function useGetStarted() {
  const params = useSearchParams()
  const initial = initialFromQuery(params?.get('intent'), params?.get('id'))

  const [step, setStep] = useState<OnboardingStep>(0)
  const [interest, setInterest] = useState<InterestKey | null>(initial.interest)
  const [planId, setPlanId] = useState<Plan['id'] | null>(initial.planId)
  const [visit, setVisit] = useState<Project | null>(initial.visit)

  const project = interest ? projectOf(interest) : null
  const plan = plans.find((p) => p.id === planId) ?? null
  const planOptions = interest && project === 'nathia-gali' ? plansFor(interest) : []

  const canAdvance =
    (step === 0 && interest !== null) ||
    (step === 1 && (project === 'lahore' || (project === 'nathia-gali' && plan !== null) || (interest === 'visit' && visit !== null)))

  const summary = useMemo(() => {
    if (!interest) return ''
    const lines = ['Hello Serene Heights, I would like to enquire.', `Interest: ${interests[interest]}`]
    if (project === 'nathia-gali' && plan) lines.push(`Preferred plan: ${planTitle(plan)} (${planBody(plan)})`)
    if (project === 'lahore') lines.push(`Project: ${projectById('lahore')?.name}. Please ask the Lahore team to contact me.`)
    if (interest === 'visit' && visit) lines.push(`Site visit at: ${visitProjects.find((v) => v.id === visit)?.title}`)
    return lines.join('\n')
  }, [interest, plan, project, visit])

  function next() {
    if (step === 2 || !canAdvance) return
    setStep((current) => (current + 1) as OnboardingStep)
  }

  function back() {
    if (step === 0) return
    setStep((current) => (current - 1) as OnboardingStep)
  }

  function chooseInterest(value: InterestKey) {
    setInterest(value)
    // Keep a chosen plan only if it is still offered for the new interest.
    if (projectOf(value) !== 'nathia-gali') setPlanId(null)
    else if (value === 'ng-smart' && planId === null) setPlanId('spu')
    if (value !== 'visit') setVisit(null)
  }

  return {
    back,
    canAdvance,
    chooseInterest,
    choosePlan: setPlanId,
    chooseVisit: setVisit,
    interest,
    next,
    plan,
    planOptions,
    project,
    step,
    summary,
    visit,
  }
}
