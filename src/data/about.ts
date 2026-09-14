import { fundStageAssets } from './fund-stage-assets'
import { funds } from './funds'
import { howItWorksIntro } from './how-it-works'
import { properties } from './properties'
import { footerIntro, site } from './site'
import { storyAssets } from './story-assets'
import { trustIntro, trustItems } from './trust'

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

const courtyard = requireProperty('courtyard-residences')
const cedarCourt = requireProperty('cedar-court')
const urbanLiving = requireFund('urban-living-fund')

export const aboutIntro = {
  label: 'Fictional demonstration',
  heading: 'This is Serene Investors.',
  body: 'A catalogue-style study of property investing, presented with clarity. Named residences, diversified fictional funds, and a sample portfolio experience sit on one platform. Every figure is sample data.',
  image: howItWorksIntro.image,
} as const

export const aboutIdea = {
  statement: site.tagline,
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
  heading: trustIntro.heading,
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
      body: trustItems.find((item) => item.id === 'information')?.body
        ?? 'Show sample property details, costs, status, and investment information in a consistent format.',
    },
    {
      id: 'claims',
      title: 'No hidden investment claims',
      body: 'Every figure on this site is sample data, not an offer to invest and not a performance claim.',
    },
    {
      id: 'fiction',
      title: 'A fictional demonstration',
      body: site.disclaimer,
    },
  ],
} as const

export const aboutExperience = {
  heading: 'How the platform connects.',
  body: 'A short path from the catalogue to a sample journey, using the routes already on this site.',
  steps: [
    {
      id: 'explore',
      number: '01',
      title: 'Explore',
      body: 'Browse named residential buildings in the sample catalogue, or open a diversified fictional fund.',
      href: '/properties',
      cta: 'Explore properties',
      image: {
        src: courtyard.image,
        alt: courtyard.imageAlt,
      },
    },
    {
      id: 'understand',
      number: '02',
      title: 'Understand',
      body: 'Read the demonstration notes: how a sample holding is chosen, how figures are labelled, and how property and fund listings differ.',
      href: '/learn',
      cta: 'Open Learn',
      image: storyAssets.marble,
    },
    {
      id: 'review',
      number: '03',
      title: 'Review',
      body: 'Open a listing snapshot. Sample yield, sample minimum, location, and status sit beside the building, marked as illustrative.',
      href: `/properties/${cedarCourt.id}`,
      cta: 'Review a property',
      image: {
        src: cedarCourt.image,
        alt: cedarCourt.imageAlt,
      },
    },
    {
      id: 'journey',
      number: '04',
      title: 'Sample journey',
      body: 'Walk a short demonstration allocation. The get-started flow does not create an account, collect funds, or place an investment.',
      href: '/get-started',
      cta: 'Start a sample journey',
      image: storyAssets.choose,
    },
  ],
} as const

export const aboutClose = {
  heading: footerIntro.description,
  body: 'SERENE INVESTORS is a fictional demonstration product. Sample information is not an offer, a solicitation, or a guarantee. When you are ready to look at named listings, open the catalogue or the Learn notes.',
} as const

export const aboutContact = {
  heading: 'A sample inquiry.',
  body: 'This form is a sample inquiry. Submitting it does not send a message.',
  confirmHeading: 'Demo inquiry recorded locally.',
  confirmBody: 'Nothing was sent. This is a sample interaction for the demonstration platform.',
} as const
