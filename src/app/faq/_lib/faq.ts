// Questions and answers about Serene Heights. Every answer comes from src/global/data/serene.ts;
// where a fact is not published there, the answer says so and points to the team.

import { Building2, HelpCircle, MapPin, ShieldCheck, Sparkles, Wallet, type LucideIcon } from 'lucide-react'
import {
  company,
  contact,
  lahore,
  nathiagali,
  ownerBenefits,
  pkr,
  plans,
  pricing,
  progressUpdates,
  projects,
  smartUnit,
} from '@/global/data/serene'
import { site } from '@/global/data/site'

export type FaqCategory = 'Projects' | 'Smart Property' | 'Payments' | 'Ownership' | 'Visiting & contact'

export type FaqEntry = {
  id: string
  category: FaqCategory
  question: string
  summary: string
  bulletPoints: string[]
  badge?: string
  actionLink?: { label: string; href: string }
}

export const faqIntro = {
  eyebrow: 'FAQs',
  heading: 'Questions about Serene Heights, answered.',
  highlight: 'answered',
  body: 'The two projects, Smart Property Units, payment plans, owner benefits, visits and how to reach the team.',
} as const

const ng = projects.find((p) => p.id === 'nathia-gali')!
const downPct = `${Math.round(pricing.downShare * 100)}%`
const latestUpdate = progressUpdates[0]
const firstUpdate = progressUpdates[progressUpdates.length - 1]
const islamabad = nathiagali.route.find((stop) => stop.place === 'Islamabad')

export const faqEntries: FaqEntry[] = [
  /* ---------------------------------------------------------------- projects */
  {
    id: 'what-is-serene-investors',
    category: 'Projects',
    badge: 'Start here',
    question: 'What is Serene Investors?',
    summary: 'Serene Investors is where you can invest in Serene Heights: the Nathia Gali hotel and resort, and the Serene Heights Lahore tower.',
    bulletPoints: [site.disclaimer, company.model],
    actionLink: { label: 'See the projects', href: '/properties' },
  },
  {
    id: 'what-is-serene-heights-nathia-gali',
    category: 'Projects',
    question: 'What is Serene Heights Nathia Gali?',
    summary: ng.summary,
    bulletPoints: [
      `${ng.facts.join(' · ')}.`,
      `Location: ${contact.offices[0].address}.`,
      `Status: ${ng.status.toLowerCase()}, ${ng.since.toLowerCase()}.`,
      'One, two and three bedroom hotel apartments, all fully furnished, plus the Smart Property Unit.',
    ],
    actionLink: { label: 'Serene Heights Nathia Gali', href: '/properties/nathia-gali' },
  },
  {
    id: 'what-is-serene-heights-lahore',
    category: 'Projects',
    question: 'What is Serene Heights Lahore?',
    summary: lahore.tagline,
    bulletPoints: [lahore.configuration, 'The project is LDA approved and carries a 2-year delivery timeline.', lahore.parking],
    actionLink: { label: 'Serene Heights Lahore', href: '/properties/lahore' },
  },
  {
    id: 'completed-projects',
    category: 'Projects',
    question: 'Has the group completed a project before?',
    summary: `Yes. ${company.completed[0].name} on ${company.completed[0].place} is a ${company.completed[0].note.toLowerCase()}.`,
    bulletPoints: [`Serene Heights Group was founded in ${company.founded}.`, `Its chief executive is ${company.ceo.name}.`],
    actionLink: { label: 'About the group', href: '/about' },
  },
  {
    id: 'delivery',
    category: 'Projects',
    question: 'When will the projects be delivered?',
    summary: 'Serene Heights Lahore has a 2-year delivery timeline. Serene Heights Nathia Gali has been under construction since 2021.',
    bulletPoints: [
      'A completion date for Nathia Gali is not published on this site; ask the team for the current schedule.',
      `Site-visit videos of Nathia Gali run from ${firstUpdate.date} to ${latestUpdate.date}, so you can see how far construction has come.`,
      'Construction projects can be delayed. Read the risk notice before you invest.',
    ],
    actionLink: { label: 'Construction progress', href: '/progress' },
  },

  /* ---------------------------------------------------------------- smart property */
  {
    id: 'what-is-smart-property-unit',
    category: 'Smart Property',
    badge: 'Core idea',
    question: 'What is a Smart Property Unit?',
    summary: smartUnit.what,
    bulletPoints: smartUnit.why.map((item) => `${item.title}: ${item.body}`),
    actionLink: { label: 'Smart Property', href: '/smart-property' },
  },
  {
    id: 'smart-property-cost',
    category: 'Smart Property',
    question: 'How much does a Smart Property Unit cost?',
    summary: `One ${smartUnit.sqft} sq ft unit in Nathia Gali costs ${pkr(smartUnit.value)}.`,
    bulletPoints: [
      `Down payment: ${pkr(smartUnit.down)} (${downPct}).`,
      `Then ${pricing.months} monthly instalments of ${pkr(smartUnit.monthly)}.`,
      'Rental income is shared according to the number of units you hold.',
    ],
    actionLink: { label: 'Payment plans', href: '/calculator' },
  },
  {
    id: 'smart-property-lahore',
    category: 'Smart Property',
    question: 'Can I buy smart property in Serene Heights Lahore?',
    summary: 'Yes. In Lahore you can invest with as little as PKR 2 million through smart property units and become a part-owner of the tower.',
    bulletPoints: [
      'The Lahore payment plan is not published on this site; the team will share it on request.',
      `Lahore enquiries: ${contact.emails.lahore}, or ${contact.lahorePhones[0].numbers[0]} (${contact.lahorePhones[0].label.toLowerCase()}).`,
    ],
    actionLink: { label: 'Ask about Lahore', href: '/contact' },
  },
  {
    id: 'smart-property-return',
    category: 'Smart Property',
    badge: 'Projection',
    question: 'What return can I expect?',
    summary: 'Serene Heights publishes a projection for one Smart Property Unit. It is not a guarantee.',
    bulletPoints: [...smartUnit.projection.map((row) => `${row.label}: ${row.value}.`), smartUnit.projectionNote],
    actionLink: { label: 'Read the risk notice', href: '/legal/risks' },
  },
  {
    id: 'how-to-buy',
    category: 'Smart Property',
    question: 'How do I buy a Smart Property Unit?',
    summary: 'Five steps, from the booking form to managed ownership.',
    bulletPoints: smartUnit.steps.map((step, index) => `${index + 1}. ${step.title}: ${step.body}`),
    actionLink: { label: 'Start an enquiry', href: '/contact' },
  },

  /* ---------------------------------------------------------------- payments */
  {
    id: 'payment-plans',
    category: 'Payments',
    question: 'Which payment plans are available?',
    summary: `Every published Nathia Gali plan is ${downPct} down, then ${pricing.months} monthly instalments.`,
    bulletPoints: plans.map((plan) => `${plan.kind}, ${plan.area} sq ft: ${pkr(plan.total)} total, ${pkr(plan.down)} down, ${pkr(plan.monthly)} a month.`),
    actionLink: { label: 'Payment plans', href: '/calculator' },
  },
  {
    id: 'apartment-price',
    category: 'Payments',
    question: 'How is the price of an apartment worked out?',
    summary: `Nathia Gali apartments are priced at ${pkr(pricing.perSqft)} per sq ft. The ${smartUnit.sqft} sq ft Smart Property Unit is priced separately at ${pkr(smartUnit.value)}.`,
    bulletPoints: [`For example, a ${plans[1].area} sq ft 1 BHK is ${plans[1].area} × ${pkr(pricing.perSqft)} = ${pkr(plans[1].total)}.`],
    actionLink: { label: 'Payment plans', href: '/calculator' },
  },
  {
    id: 'maintenance-fees',
    category: 'Payments',
    question: 'Are there maintenance fees?',
    summary: 'No. Operating costs are covered by the hotel.',
    bulletPoints: [company.philosophy[1].body],
  },

  /* ---------------------------------------------------------------- ownership */
  {
    id: 'owner-benefits',
    category: 'Ownership',
    question: 'What do owners get?',
    summary: 'Owner benefits in Nathia Gali:',
    bulletPoints: ownerBenefits.map((benefit) => `${benefit.title}: ${benefit.body}`),
    actionLink: { label: 'Owner benefits', href: '/owner-benefits' },
  },
  {
    id: 'rental-income',
    category: 'Ownership',
    question: 'How is rental income shared?',
    summary: 'On completion, DM Consortium lets the apartment and distributes rental income according to your units.',
    bulletPoints: ['Smart Property owners in Nathia Gali share in hotel revenue every quarter.', smartUnit.projectionNote],
  },
  {
    id: 'management',
    category: 'Ownership',
    question: 'Who manages the property?',
    summary: company.management,
    bulletPoints: [
      'Rentals, upkeep and returns are run in-house, with no unions and no third-party operators.',
      'In Lahore, operations, maintenance and facilities are run by in-house professional management.',
    ],
  },
  {
    id: 'transfer',
    category: 'Ownership',
    question: 'Can I sell or transfer my unit?',
    summary: 'Yes. Smart Property Units are transferable: you can sell or transfer your ownership at any time.',
    bulletPoints: ['A sale depends on finding a buyer, and the price depends on the market at the time.'],
  },
  {
    id: 'shariah',
    category: 'Ownership',
    question: 'Is the investment Shariah-compliant?',
    summary: 'Yes. Every transaction is structured to be Shariah-compliant and legally secure.',
    bulletPoints: ['Every unit is protected by legal agreements.'],
  },

  /* ---------------------------------------------------------------- visiting & contact */
  {
    id: 'site-visit',
    category: 'Visiting & contact',
    question: 'Can I visit the site?',
    summary: 'Yes. Ask for a site visit and the team will arrange it.',
    bulletPoints: [
      `Serene Heights Nathia Gali: ${contact.offices[0].address}.`,
      islamabad ? `It is ${islamabad.dist} from Islamabad, about a ${islamabad.time}.` : '',
      `Book by WhatsApp on ${contact.whatsapp} or call ${contact.uan}.`,
    ].filter(Boolean),
    actionLink: { label: 'Book a visit', href: '/contact' },
  },
  {
    id: 'progress',
    category: 'Visiting & contact',
    question: 'How can I follow construction progress?',
    summary: `Serene Heights posts site-visit videos on its YouTube channel. The latest is from ${latestUpdate.date}.`,
    bulletPoints: [`There are ${progressUpdates.length} videos, from ${firstUpdate.date} onwards.`],
    actionLink: { label: 'Construction progress', href: '/progress' },
  },
  {
    id: 'offices',
    category: 'Visiting & contact',
    question: 'Where are your offices?',
    summary: `The head office is ${contact.headOffice}.`,
    bulletPoints: contact.offices.map((office) => `${office.name} (${office.label.toLowerCase()}): ${office.address}.`),
    actionLink: { label: 'Offices and map', href: '/contact' },
  },
  {
    id: 'contact',
    category: 'Visiting & contact',
    question: 'How do I contact Serene Heights?',
    summary: `Call the UAN on ${contact.uan} or message ${contact.whatsapp} on WhatsApp.`,
    bulletPoints: [
      `Nathia Gali: ${contact.emails.nathiagali}.`,
      `Lahore: ${contact.emails.lahore}.`,
      ...contact.lahorePhones.map((line) => `Lahore, ${line.label.toLowerCase()}: ${line.numbers.join(', ')}.`),
    ],
    actionLink: { label: 'Contact us', href: '/contact' },
  },
]

export const faqCategories: { id: 'All' | FaqCategory; label: string; icon: LucideIcon }[] = [
  { id: 'All', label: 'All questions', icon: HelpCircle },
  { id: 'Projects', label: 'The projects', icon: Building2 },
  { id: 'Smart Property', label: 'Smart Property', icon: Sparkles },
  { id: 'Payments', label: 'Payments', icon: Wallet },
  { id: 'Ownership', label: 'Ownership', icon: ShieldCheck },
  { id: 'Visiting & contact', label: 'Visiting & contact', icon: MapPin },
]

/** Quick searches under the search field: `label` is shown, `query` is what gets searched. */
export const popularSearches = [
  { label: 'Smart Property Unit', query: 'smart property unit' },
  { label: 'Payment plan', query: 'instalment' },
  { label: 'Free nights', query: 'free nights' },
  { label: 'Delivery', query: 'deliver' },
  { label: 'Site visit', query: 'visit' },
]
