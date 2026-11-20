// Plain definitions of the terms used across Serene Heights. Every figure comes from
// src/global/data/serene.ts; definitions without a figure are general meanings of the word.

import { company, contact, lahore, nathiagali, pkr, plans, pricing, smartUnit } from '@/global/data/serene'

export type GlossaryCategory = 'Ownership' | 'Payments' | 'Projects' | 'Company'

export type GlossaryItem = {
  id: string
  term: string
  category: GlossaryCategory
  /** One-line plain definition. */
  definition: string
  /** How it works at Serene Heights, with real figures. */
  atSerene?: string
  tags: string[]
}

const downPct = `${Math.round(pricing.downShare * 100)}%`
const apartments = plans.filter((plan) => plan.id !== 'spu')
const apartmentSizes = apartments.map((plan) => `${plan.area}`).join(', ')
const altitude = nathiagali.figures.find((figure) => figure.label === 'Altitude')?.value ?? ''
const kanals = nathiagali.figures.find((figure) => figure.label === 'Kanals of land')?.value ?? ''
const projectedReturn = smartUnit.projection.find((row) => row.label === 'Projected return')?.value ?? ''
const rentalIncome = smartUnit.projection.find((row) => row.label === 'Expected annual rental income')?.value ?? ''

export const glossaryTerms: GlossaryItem[] = [
  {
    id: 'smart-property-unit',
    term: 'Smart Property Unit',
    category: 'Ownership',
    definition: 'A standard share of a Serene Heights hotel apartment, so you can own part of a premium apartment without buying the whole of it.',
    atSerene: `Each unit is ${smartUnit.sqft} sq ft and costs ${pkr(smartUnit.value)}: ${pkr(smartUnit.down)} down, then ${pkr(smartUnit.monthly)} a month. On completion DM Consortium lets the apartment and shares rental income according to your units. In Lahore, smart property starts from PKR 2 million.`,
    tags: ['SPU', 'fractional', 'co-own', '50 sq ft'],
  },
  {
    id: 'co-ownership',
    term: 'Co-ownership',
    category: 'Ownership',
    definition: 'Several people owning one property together, each holding a defined share of it.',
    atSerene: `Smart Property Units are co-ownership in fixed ${smartUnit.sqft} sq ft units, so every owner’s share is clear and the same size. Every unit is protected by legal agreements.`,
    tags: ['shared ownership', 'fractional', 'units'],
  },
  {
    id: 'down-payment',
    term: 'Down payment',
    category: 'Payments',
    definition: 'The first part of the price, paid when you book. The rest is paid over time in instalments.',
    atSerene: `Serene Heights Nathia Gali asks for ${downPct} down. For a Smart Property Unit that is ${pkr(smartUnit.down)}.`,
    tags: ['booking', 'deposit', '30%'],
  },
  {
    id: 'monthly-instalment',
    term: 'Monthly instalment',
    category: 'Payments',
    definition: 'A fixed amount paid every month until the full price is cleared.',
    atSerene: `After the down payment, the balance is spread over ${pricing.months} monthly instalments: ${pkr(smartUnit.monthly)} a month for a Smart Property Unit.`,
    tags: ['installment', '36 months', 'monthly'],
  },
  {
    id: 'payment-plan',
    term: 'Payment plan',
    category: 'Payments',
    definition: 'The schedule that sets out the total price, the down payment and each instalment.',
    atSerene: `Published Nathia Gali plans: the Smart Property Unit at ${pkr(smartUnit.value)}, and 1 BHK apartments of ${apartmentSizes} sq ft from ${pkr(apartments[0].total)}. Every plan is ${downPct} down and ${pricing.months} monthly instalments.`,
    tags: ['plan', 'schedule', 'price'],
  },
  {
    id: 'bhk',
    term: 'BHK',
    category: 'Projects',
    definition: 'Bedroom, Hall, Kitchen. “1 BHK” is an apartment with one bedroom, a living room and a kitchen.',
    atSerene: `The published 1 BHK hotel apartments in Nathia Gali are ${apartmentSizes} sq ft. One, two and three bedroom apartments are offered, all fully furnished.`,
    tags: ['1 BHK', 'bedroom', 'apartment size'],
  },
  {
    id: 'hotel-apartment',
    term: 'Hotel apartment',
    category: 'Projects',
    definition: 'A furnished apartment inside a managed hotel: you own it, and the hotel runs bookings, housekeeping and maintenance.',
    atSerene: `Serene Heights Nathia Gali is a resort of ${nathiagali.figures.find((f) => f.label === 'Apartments')?.value ?? ''} fully furnished hotel apartments. Serene Heights Lahore has 2 floors of serviced hotel apartments under the same in-house management as the tower.`,
    tags: ['serviced apartment', 'furnished', 'hotel'],
  },
  {
    id: 'sq-ft',
    term: 'Sq ft (square foot)',
    category: 'Projects',
    definition: 'The unit used to measure the floor area of an apartment or a share of one.',
    atSerene: `Nathia Gali apartments are priced at ${pkr(pricing.perSqft)} per sq ft. A Smart Property Unit is ${smartUnit.sqft} sq ft and priced separately at ${pkr(smartUnit.value)}.`,
    tags: ['square feet', 'area', 'price per sq ft'],
  },
  {
    id: 'kanal',
    term: 'Kanal',
    category: 'Projects',
    definition: 'A traditional unit of land area used in Pakistan, often used to describe the size of a plot or a site.',
    atSerene: `Serene Heights Nathia Gali is built on ${kanals} kanals of land at ${altitude}.`,
    tags: ['land', 'plot', 'site area'],
  },
  {
    id: 'profit-share',
    term: 'Profit share',
    category: 'Ownership',
    definition: 'An owner’s portion of the income a managed property earns, paid out at set intervals.',
    atSerene: 'Smart Property owners in Nathia Gali share in hotel revenue every quarter.',
    tags: ['quarterly', 'rental income', 'returns'],
  },
  {
    id: 'projected-return',
    term: 'Projected return',
    category: 'Ownership',
    definition: 'An estimate of what an investment may earn each year from rent and rising value. It is a projection, not a promise.',
    atSerene: `Serene Heights publishes a projection for a ${pkr(smartUnit.value)} Smart Property Unit: expected annual rental income of ${rentalIncome} and a projected return of ${projectedReturn}. ${smartUnit.projectionNote}`,
    tags: ['projection', 'yield', 'ROI', 'not guaranteed'],
  },
  {
    id: 'owner-stays',
    term: 'Owner stays',
    category: 'Ownership',
    definition: 'Nights an owner can spend in the hotel they own a share of.',
    atSerene: 'Nathia Gali owners stay free for 28 nights every year, and owners and family get a discount on longer stays.',
    tags: ['free nights', '28 nights', 'holiday'],
  },
  {
    id: 'extended-stay-discount',
    term: 'Extended-stay discount',
    category: 'Ownership',
    definition: 'A lower rate for owners who stay longer than their free nights.',
    atSerene: 'Serene Heights gives owners and their family a discount on longer stays.',
    tags: ['discount', 'family', 'owner benefit'],
  },
  {
    id: 'zero-maintenance-fees',
    term: 'Zero maintenance fees',
    category: 'Ownership',
    definition: 'No separate yearly charge to the owner for upkeep of the building.',
    atSerene: 'Operating costs are covered by the hotel. Serene Heights was built around a simple promise: zero maintenance charges, zero hidden costs.',
    tags: ['service charge', 'no hidden costs', 'upkeep'],
  },
  {
    id: 'transferable-units',
    term: 'Transferable units',
    category: 'Ownership',
    definition: 'Ownership you can sell or pass to someone else.',
    atSerene: 'Smart Property Units can be sold or transferred at any time. A sale depends on finding a buyer.',
    tags: ['resale', 'transfer', 'exit'],
  },
  {
    id: 'shariah-compliant',
    term: 'Shariah-compliant',
    category: 'Ownership',
    definition: 'Structured in line with Islamic finance principles.',
    atSerene: 'Every Serene Heights transaction is structured to be Shariah-compliant and legally secure.',
    tags: ['Islamic', 'halal', 'legal'],
  },
  {
    id: 'booking-form',
    term: 'Booking form',
    category: 'Payments',
    definition: 'The application you fill in to reserve a unit, with a few personal and financial details.',
    atSerene: 'Filling in the booking form is the first step; you then choose a payment plan, and ownership is confirmed once payments are complete.',
    tags: ['apply', 'reserve', 'first step'],
  },
  {
    id: 'lda-approval',
    term: 'LDA approval',
    category: 'Projects',
    definition: 'Approval from the Lahore Development Authority, the body that approves building plans in Lahore.',
    atSerene: `Serene Heights Lahore is LDA approved and carries a 2-year delivery commitment.`,
    tags: ['Lahore Development Authority', 'approval', 'permits'],
  },
  {
    id: 'mixed-use-tower',
    term: 'Mixed-use tower',
    category: 'Projects',
    definition: 'One building that combines several uses, such as shops, offices, parking and apartments.',
    atSerene: lahore.configuration,
    tags: ['21 storeys', 'Lahore', 'commercial'],
  },
  {
    id: 'co-working-floor',
    term: 'Co-working floor',
    category: 'Projects',
    definition: 'Shared, flexible office space that people and teams can use without a long-term lease.',
    atSerene: 'Serene Heights Lahore has 2 co-working floors, for startups, freelancers and established teams seeking a premium address without long-term commitment.',
    tags: ['shared office', 'Lahore', 'workspace'],
  },
  {
    id: 'cbd',
    term: 'CBD',
    category: 'Projects',
    definition: 'Central Business District: the main commercial and office area of a city.',
    atSerene: 'Serene Heights Lahore stands on Gulberg Main Boulevard, within walking distance of Lahore’s Central Business District.',
    tags: ['Central Business District', 'Gulberg', 'Lahore'],
  },
  {
    id: 'galiyat',
    term: 'Galiyat',
    category: 'Projects',
    definition: 'The hill-station area of Khyber Pakhtunkhwa that includes Nathia Gali.',
    atSerene: `Serene Heights Nathia Gali sits at ${altitude} on Kala Bagh Air Base Road, about a 2-hour drive (80 km) from Islamabad.`,
    tags: ['Nathia Gali', 'KPK', 'mountains'],
  },
  {
    id: 'dm-consortium',
    term: 'DM Consortium',
    category: 'Company',
    definition: 'The developer and manager behind Serene Heights Group’s projects.',
    atSerene: `${company.management} Head office: ${contact.headOffice}.`,
    tags: ['developer', 'management', 'Serene Heights Group'],
  },
  {
    id: 'uan',
    term: 'UAN',
    category: 'Company',
    definition: 'Universal Access Number: one phone number that reaches a company from anywhere in the country.',
    atSerene: `The Serene Heights UAN is ${contact.uan}.`,
    tags: ['phone', 'helpline', 'contact'],
  },
]

export const glossaryCategories: ('All' | GlossaryCategory)[] = ['All', 'Ownership', 'Payments', 'Projects', 'Company']
