import { fundStageAssets } from '@/global/data/fund-stage-assets'
import { funds } from '@/global/data/funds'
import { properties } from '@/global/data/properties'
import { storyAssets } from '@/global/data/story-assets'

function requireProperty(id: string) {
  const match = properties.find((item) => item.id === id)
  if (!match) throw new Error(`Missing sample record: ${id}`)
  return match
}

function requireFund(id: string) {
  const match = funds.find((item) => item.id === id)
  if (!match) throw new Error(`Missing sample record: ${id}`)
  return match
}

const cedarCourt = requireProperty('cedar-court')
const urbanLiving = requireFund('urban-living-fund')

export const aboutIntro = {
  label: 'Fictional demonstration',
  heading: 'This is Serene Investors.',
  body: 'A catalogue-style study of property investing, presented with clarity. Named residences, diversified fictional funds, and a sample portfolio experience sit on one platform. Every figure is sample data.',
} as const

export const aboutIdea = {
  label: 'Our mission',
  statement: 'Property investing should be as clear as the building itself: a measured share, plainly labelled, with nothing hidden.',
  attribution: 'The Serene Investors team',
  body: 'The demonstration is built around a simple idea: own a measured share of a building. Direct properties are reviewed one residence at a time. Diversified funds gather several sample properties under one theme. A sample portfolio experience shows how those holdings could sit together. This is a design study, not a live product.',
  image: storyAssets.valueWalk,
} as const

export const aboutPaths = {
  heading: 'Two ways to browse the demonstration.',
  body: 'Select individual properties for more direct exposure, or explore diversified fictional funds built around a broader property theme.',
  direct: {
    label: 'Direct properties',
    title: 'A single building, held with care.',
    body: 'Explore individual properties. Review property-level information beside the residence. Sample investment figures stay labelled as sample data.',
    points: ['Explore individual properties', 'Property-level information', 'Sample investment figures'],
    href: '/properties',
    cta: 'Explore properties',
    image: {
      src: '/images/story/direct-cedar-court.png',
      alt: 'A pale contemporary residence with a planted courtyard in soft morning light',
    },
    listing: cedarCourt,
  },
  funds: {
    label: 'Diversified funds',
    title: 'A broader property theme, in one allocation.',
    body: 'Explore grouped property strategies. Review fund-level information for a fictional portfolio. Sample investment figures use the same catalogue rules as a single building.',
    points: ['Explore grouped property strategies', 'Fund-level information', 'Sample investment figures'],
    href: '/funds',
    cta: 'Explore funds',
    image: fundStageAssets.field,
    listing: urbanLiving,
  },
} as const

export const aboutClarity = {
  heading: 'Property information, presented clearly.',
  body: 'Serene Investors presents property information, sample figures, and portfolio details in one place so a visitor knows what they are reviewing before taking the next step. Nothing is hidden behind a live yield promise.',
  points: [
    {
      id: 'labelled',
      title: 'Sample figures are labelled',
      body: 'Yields, minima, and distributions appear as illustrative sample data. They are not live prices, paid income, or expected returns.',
    },
    {
      id: 'format',
      title: 'Information in one format',
      body: 'Sample property details, costs, status and investment information appear in the same format on every listing.',
    },
    {
      id: 'claims',
      title: 'No hidden investment claims',
      body: 'Every figure on this site is sample data, not an offer to invest and not a performance claim.',
    },
  ],
} as const

export const aboutClose = {
  heading: 'Questions before you start? Talk to us.',
  body: 'Send a note about the platform, a listing or the guides. Sample information on this site is not an offer, a solicitation, or a guarantee.',
} as const
