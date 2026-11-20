import { contact, interests, pkr, plans, type InterestKey, type Plan } from '@/global/data/serene'

// Copy for /get-started. The three steps build a WhatsApp enquiry from real Serene Heights options.

export const getStartedIntro = {
  heading: 'Start your enquiry.',
  body: 'Tell us what interests you and which plan you prefer, then send it to the Serene Heights team on WhatsApp. Nothing is booked or paid here.',
} as const

export const getStartedSteps = [
  { id: 'interest', number: '01', title: 'What are you interested in?' },
  { id: 'plan', number: '02', title: 'Your preferred plan' },
  { id: 'review', number: '03', title: 'Review and send' },
] as const

export const interestKeys = Object.keys(interests) as InterestKey[]

export function isInterestKey(value: string | null | undefined): value is InterestKey {
  return Boolean(value) && Object.prototype.hasOwnProperty.call(interests, value as string)
}

export type Project = 'nathia-gali' | 'lahore'

/** Which project an interest belongs to (`visit` has no project until one is chosen). */
export function projectOf(interest: InterestKey): Project | null {
  if (interest.startsWith('ng-')) return 'nathia-gali'
  if (interest.startsWith('lhr-')) return 'lahore'
  return null
}

/** Plans shown for a Nathia Gali interest: the SPU interest lists the SPU first, apartments list theirs first. */
export function plansFor(interest: InterestKey): readonly Plan[] {
  if (interest === 'ng-apartment') return [...plans.filter((p) => p.id !== 'spu'), ...plans.filter((p) => p.id === 'spu')]
  return plans
}

export function planTitle(plan: Plan) {
  return `${plan.kind} · ${plan.area} sq ft`
}

export function planBody(plan: Plan) {
  return `${pkr(plan.total)} · ${pkr(plan.down)} down · ${pkr(plan.monthly)} × 36`
}

export const visitProjects: { id: Project; title: string; body: string }[] = [
  { id: 'nathia-gali', title: contact.offices[0].name, body: contact.offices[0].address },
  { id: 'lahore', title: contact.offices[1].name, body: contact.offices[1].address },
]

export const getStartedNotes = [
  {
    title: 'Nothing is booked here',
    body: 'This page only prepares a WhatsApp message to the Serene Heights team. Booking itself starts with the Serene Heights booking form.',
  },
  {
    title: 'Published plans only',
    body: 'Every plan shown is a payment plan as published by Serene Heights for Nathia Gali. For Lahore, ask the Lahore team about its flexible payment plans.',
  },
  {
    title: 'Talk to a person',
    body: `Prefer to call? The UAN is ${contact.uan}, and WhatsApp is ${contact.whatsapp}.`,
  },
]
