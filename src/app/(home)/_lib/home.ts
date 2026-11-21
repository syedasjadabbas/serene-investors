// Home page content. Every fact and figure comes from src/global/data/serene.ts; only the
// connecting sentences, headings and labels are written here.

import {
  company,
  contact,
  investorReasons,
  nathiagali,
  ownerBenefits,
  pkr,
  pkrShort,
  plans,
  projects,
  smartUnit,
  progressUpdates,
} from '@/global/data/serene'

const [ngProject, lahoreProject] = projects
const apartmentPlans = plans.filter((plan) => plan.id !== 'spu')
const lowestApartment = Math.min(...apartmentPlans.map((plan) => plan.total))
const galleryImage = (tag: string) => nathiagali.gallery.find((item) => item.tag === tag) ?? nathiagali.gallery[0]

export type HeroMode = {
  id: 'smart' | 'apartment'
  label: string
  heading: [string, string]
  body: string
}

export const heroModes: HeroMode[] = [
  {
    id: 'smart',
    label: 'Smart Property Unit',
    heading: ['Own a share of Serene Heights,', 'from PKR 2 million.'],
    body: `Co-own a fully furnished hotel apartment in Nathia Gali in standard ${smartUnit.sqft} sq ft units: ${pkr(smartUnit.value)}, 30% down, then 36 monthly instalments of ${pkr(smartUnit.monthly)}. DM Consortium runs the hotel for you.`,
  },
  {
    id: 'apartment',
    label: 'Hotel apartment',
    heading: ['A whole hotel apartment,', 'in the pines at 7,906 ft.'],
    body: `1 BHK hotel apartments at ${ngProject.name} from ${pkr(lowestApartment)}, fully furnished and managed as one hotel, with 28 free owner nights a year and zero maintenance fees.`,
  },
]

export const heroBar = {
  place: 'Nathia Gali & Lahore',
  from: 'From PKR 2M',
  actions: [
    { label: 'Projects', href: '/properties', variant: 'secondary' as const },
    { label: 'Smart Property', href: '/smart-property', variant: 'primary' as const },
  ],
  // Fly-through of the Serene Heights Nathia Gali tower; the poster is its first frame.
  video: '/videos/hero.mp4',
  videoPoster: '/videos/hero-poster.jpg',
}

export const intro = {
  tag: 'Serene basics',
  heading: 'What is a Smart Property Unit?',
  paragraphs: [smartUnit.what, company.management],
  cta: { label: 'How Smart Property works', href: '/smart-property' },
  image: projects[0].gallery[3],
  imageAlt: 'Balconied terraces on the Serene Heights Nathia Gali tower',
}

export type ProductCardId = 'smart' | 'apartment' | 'lahore'

export const products = {
  heading: ['A 50 sq ft share, a whole apartment, or a part of a city tower.', 'Every Serene Heights investment starts here.'],
  cards: [
    {
      id: 'smart' as const,
      title: 'Smart Property Unit',
      body: `Co-own a Nathia Gali hotel apartment in ${smartUnit.sqft} sq ft units for ${pkrShort(smartUnit.value)}, with 30% down.`,
      href: '/smart-property',
    },
    {
      id: 'apartment' as const,
      title: '1 BHK hotel apartments',
      body: `Fully furnished hotel apartments in Nathia Gali from ${pkrShort(lowestApartment)}, run as one hotel.`,
      href: '/properties/nathia-gali',
    },
    {
      id: 'lahore' as const,
      title: 'Serene Heights Lahore',
      body: 'A 21-storey LDA-approved tower on Gulberg Main Boulevard, with smart property from PKR 2 million.',
      href: '/properties/lahore',
    },
  ],
  note: 'Prices and instalments as published in the Serene Heights payment plans.',
  // Smart Property Unit card: the published plan, line by line.
  smartRows: [
    { label: 'Unit size', value: `${smartUnit.sqft} sq ft` },
    { label: 'Down payment (30%)', value: pkr(smartUnit.down) },
    { label: '36 monthly instalments', value: pkr(smartUnit.monthly) },
  ],
  // Apartment card: the three published 1 BHK plans.
  apartmentTiles: apartmentPlans.map((plan) => ({
    id: plan.id,
    area: `${plan.area} sq ft`,
    total: pkrShort(plan.total),
    monthly: `${pkr(plan.monthly)} / month`,
  })),
  // Lahore card: the tower's published floor mix.
  lahore: {
    name: lahoreProject.name,
    from: 'From PKR 2 million',
    image: lahoreProject.image,
    rows: [
      { name: 'Commercial', value: 'LG + 6 floors' },
      { name: 'Parking', value: '5 floors' },
      { name: 'Offices', value: '7 floors' },
      { name: 'Co-working', value: '2 floors' },
      { name: 'Hotel apartments', value: '2 floors' },
    ],
  },
}

export type EcoMedia = 'video' | 'plans' | 'units' | 'photo'

export const ecosystem = {
  heading: 'Everything Serene Heights, in one place',
  body: 'Both projects, the ways to own them and the progress on site.',
  cards: [
    { title: 'Projects', meta: 'Nathia Gali and Lahore', href: '/properties', media: 'video' as EcoMedia, image: ngProject.image },
    { title: 'Smart Property', meta: `Co-own from ${smartUnit.sqft} sq ft`, href: '/smart-property', media: 'units' as EcoMedia, image: ngProject.gallery[4] },
    { title: 'Payment plans', meta: '30% down, 36 months', href: '/calculator', media: 'plans' as EcoMedia, image: ngProject.gallery[1] },
    { title: 'The resort', meta: '50+ amenities', href: '/resort', media: 'photo' as EcoMedia, image: nathiagali.resortImages[0].src },
    { title: 'Construction progress', meta: `Site videos since ${progressUpdates[progressUpdates.length - 1].date.split(' ').pop()}`, href: '/progress', media: 'photo' as EcoMedia, image: galleryImage('Arrival').src },
    { title: 'Journal', meta: 'Guides to the Galiyat', href: '/learn', media: 'photo' as EcoMedia, image: galleryImage('Galiyat').src },
  ],
  // Mini plan cards shown on the payment plans card.
  plans: plans.map((plan, index) => ({
    id: plan.id,
    name: `${plan.kind}, ${plan.area} sq ft`,
    price: pkr(plan.total),
    down: `30% down ${pkrShort(plan.down)}`,
    image: ngProject.gallery[index % ngProject.gallery.length],
  })),
}

export const mission = {
  label: 'Our model',
  quote: company.model,
  attribution: `${company.developer} · ${company.name}`,
}

const statFigure = (label: string) => nathiagali.figures.find((item) => item.label === label) ?? nathiagali.figures[0]

export const stats = {
  caption: `${ngProject.name} in numbers`,
  items: [statFigure('Altitude'), statFigure('Kanals of land'), statFigure('Apartments'), statFigure('Amenities')].map((item) => ({
    value: item.value,
    label: item.label.toLowerCase(),
  })),
}

export const locations = {
  caption: 'Where Serene Heights is building',
  items: [
    'Nathia Gali',
    'Galiyat',
    `Islamabad · ${nathiagali.route[0].time.replace(' drive', '')}`,
    'Abbottabad',
    'Kala Bagh Air Base Road',
    'Gulberg Main Boulevard',
    'Lahore CBD',
    'Gulberg III',
  ],
}

const ownerStays = ownerBenefits.find((item) => item.title.includes('free nights'))
const lowEntry = investorReasons.find((item) => item.title === 'Low entry')

export const story = [
  {
    id: 'what',
    tag: 'What we do',
    heading: 'We build hotels you can own a share of.',
    body: `${company.name}, developed by ${company.developer} since ${company.founded}, is building ${ngProject.name}, a hotel and resort in the Galiyat, and ${lahoreProject.name}, a 21-storey mixed-use tower on Gulberg Main Boulevard.`,
    tone: 'forest' as const,
    tiles: [ngProject.gallery[0], ngProject.gallery[1], lahoreProject.image, ngProject.gallery[4]],
  },
  {
    id: 'why',
    tag: 'Why we do it',
    heading: 'Because real estate in Pakistan should be easier to own.',
    body: `${lowEntry?.body ?? ''} ${company.philosophy[1].body}`.trim(),
    tone: 'light' as const,
    image: ngProject.gallery[1],
    imageAlt: 'The heated infinity pool at Serene Heights Nathia Gali, seen from above',
    badge: ownerStays?.title ?? 'Zero maintenance fees',
  },
  {
    id: 'how',
    tag: 'How we do it',
    heading: 'Managed as one hotel, from booking to returns.',
    body: `Fill the booking form, choose a payment plan and confirm ownership once payments are complete. ${smartUnit.steps[3].body} ${smartUnit.steps[4].body}`,
    tone: 'dark' as const,
    image: ngProject.gallery[4],
    imageAlt: 'The rooftop restaurant terrace at Serene Heights Nathia Gali',
    badge: 'Quarterly profit share',
  },
]

const projection = (label: string) => smartUnit.projection.find((row) => row.label === label)?.value ?? ''

export const homeFaq = {
  heading: 'FAQs',
  body: 'Common questions',
  more: { label: 'See all FAQs', href: '/faq' },
  items: [
    {
      q: 'What is Serene Investors?',
      a: `The investor site of ${company.name}, developed by ${company.developer}. It brings together ${ngProject.name} and ${lahoreProject.name}, and the ways to own a part of them.`,
    },
    { q: 'What is a Smart Property Unit?', a: smartUnit.what },
    {
      q: 'How much does a Smart Property Unit cost?',
      a: `${pkr(smartUnit.value)} for a ${smartUnit.sqft} sq ft unit: 30% down (${pkr(smartUnit.down)}), then 36 monthly instalments of ${pkr(smartUnit.monthly)}.`,
    },
    {
      q: 'What do the hotel apartments in Nathia Gali cost?',
      a: `The published 1 BHK plans are ${apartmentPlans.map((plan) => `${plan.area} sq ft for ${pkr(plan.total)}`).join(', ')}. Each is 30% down with the rest over 36 monthly instalments.`,
    },
    {
      q: 'What do owners get?',
      a: `${ownerBenefits.map((item) => item.title).join(', ')}. ${ownerBenefits.find((item) => item.title === 'Quarterly profit share')?.body ?? ''}`,
    },
    { q: 'Who manages the property?', a: company.management },
    { q: 'Can I sell or transfer my units?', a: `Yes. ${smartUnit.steps[4].body}` },
    {
      q: 'What returns does Serene Heights project?',
      a: `For a ${projection('Investment amount')} Smart Property Unit, Serene Heights projects ${projection('Expected annual rental income')} in expected annual rental income, a ${projection('Annual capital gain on investment')} annual capital gain and a projected return of ${projection('Projected return')}. ${smartUnit.projectionNote}`,
    },
    {
      q: 'Is it Shariah-compliant?',
      a: `${smartUnit.why[3].body} ${smartUnit.why[2].body}`,
    },
    {
      q: 'Where are the projects?',
      a: `${ngProject.name} is at ${contact.offices[0].address}, about ${nathiagali.route[0].dist} (${nathiagali.route[0].time}) from Islamabad. ${lahoreProject.name} is a 21-storey tower on Gulberg Main Boulevard, within walking distance of Lahore's Central Business District.`,
    },
  ],
  moreNote: 'Still have questions?',
  moreBody: `Browse every answer, or call ${contact.uan} and we will help.`,
  contact: { label: 'Contact us', href: '/contact' },
}
