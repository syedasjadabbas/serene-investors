import type { LearnGuide } from '@/types/learn'
import { fundStageAssets } from './fund-stage-assets'
import { storyAssets } from './story-assets'

export const learnIntro = {
  heading: 'Learn before you invest.',
  body: 'Short guides to the demonstration: how a sample holding is chosen, how figures are labelled, and how property and fund listings differ. Everything here is illustrative.',
} as const

export const learnDisclaimer = {
  heading: 'A fictional demonstration.',
  body: 'Serene Investors is a fictional demonstration product. Sample figures are illustrative and do not represent actual investment performance, returns, or an offer to invest.',
} as const

export const learnCta = {
  heading: 'Explore the platform.',
  body: 'When you are ready to look at named sample listings, open the property catalogue or the fund collection.',
} as const

export const learnGuides: LearnGuide[] = [
  {
    id: 'how-property-investing-works',
    slug: 'how-property-investing-works',
    category: 'The basics',
    title: 'How property investing works',
    description:
      'The demonstration follows four steps: choose a holding, allocate a sample amount, track it, and view sample distributions.',
    image: storyAssets.choose.src,
    imageAlt: storyAssets.choose.alt,
    anchor: 'property-guide',
    related: ['direct-property-vs-funds', 'reading-a-property-snapshot', 'understanding-risk'],
    cta: { label: 'See the four steps', href: '/how-it-works' },
    paragraphs: [
      'SERENE INVESTORS is built around a simple idea: own a measured share of a building. On this demonstration site, that idea is shown as a short sequence rather than a live account.',
      'The published flow has four beats. First you choose a sample property or a diversified fund from the catalogue. Then you select a sample amount to allocate. You can follow the fictional holding from a demonstration account, and you can view sample distributions posted against it.',
      'Those steps are the same demonstration used on the How it works page. Figures attached to each step — yields, minima, portfolio values, and rent notices — are sample data. They are not an offer to invest and they do not describe a live product.',
      'If you want to walk the sequence on the page, open How it works. If you want to look at a named building first, open the property catalogue.',
    ],
  },
  {
    id: 'what-is-a-diversified-fund',
    slug: 'what-is-a-diversified-fund',
    category: 'Funds',
    title: 'What is a diversified fund?',
    description:
      'Fictional funds on this platform gather several sample properties under one theme, with a sample minimum and a clear next step.',
    image: fundStageAssets.field.src,
    imageAlt: fundStageAssets.field.alt,
    related: ['direct-property-vs-funds', 'how-property-investing-works', 'understanding-sample-rental-income'],
    cta: { label: 'Explore sample funds', href: '/funds' },
    paragraphs: [
      'A diversified fund on SERENE INVESTORS is a fictional portfolio. It gathers several sample properties under one idea — a residential theme, a mixed portfolio, or a regional setting — so a visitor can review a broader allocation than a single building.',
      'Each sample fund shows a name, a market or theme, a sample property count, a sample yield, and a sample minimum. Those fields are the same demonstration data used on the funds catalogue. They are not live fund documents.',
      'The demonstration treats a fund the way it treats a property: you can open the listing, continue into the sample get-started flow, and return to the collection. Nothing in that path opens an account or places an investment.',
      'Direct property remains the other path on the site: one named building at a time, with its own sample yield and sample minimum shown beside the residence.',
    ],
  },
  {
    id: 'understanding-sample-rental-income',
    slug: 'understanding-sample-rental-income',
    category: 'Sample figures',
    title: 'Understanding sample rental income',
    description:
      'Rent notices on this site are labelled sample distributions. They are invented for the demonstration and are not paid income.',
    image: storyAssets.receive.src,
    imageAlt: storyAssets.receive.alt,
    related: ['reading-a-property-snapshot', 'how-property-investing-works', 'understanding-risk'],
    cta: { label: 'See sample distributions', href: '/how-it-works' },
    paragraphs: [
      'When the demonstration shows rent, it is labelled as a sample distribution. A receipt-style card may read “Rent posted” against a named sample holding. That figure is invented for the layout. It is not money received, and it is not a forecast.',
      'The same caution applies wherever rental income appears in a breakdown. Components such as sample rental income and sample value movement are marked as illustrative. Returns are not guaranteed, and the numbers do not represent actual SERENE INVESTORS performance.',
      'The Receive step in How it works exists to show how a distribution could be presented, not to report a payment. If a listing also shows a sample yield, that yield is a labelled catalogue figure for the same demonstration.',
      'Nothing on this page should be read as a rental history, occupancy record, or income guarantee.',
    ],
  },
  {
    id: 'reading-a-property-snapshot',
    slug: 'reading-a-property-snapshot',
    category: 'The basics',
    title: 'Reading a property investment snapshot',
    description:
      'Each sample listing shows a building, a neighbourhood, a sample yield, and a sample minimum. Those fields are illustrative.',
    image: storyAssets.marble.src,
    imageAlt: storyAssets.marble.alt,
    anchor: 'investment-basics',
    related: ['how-property-investing-works', 'understanding-sample-rental-income', 'direct-property-vs-funds'],
    cta: { label: 'Open the catalogue', href: '/properties' },
    paragraphs: [
      'A sample property page is arranged so a visitor can read the building first, then the figures. The snapshot typically includes sample yield, sample minimum, property type, location, and a sample status. Other lines may note a sample completion date or a demonstration property record.',
      'Those labels matter. Yield is written as sample yield. The ticket is written as sample minimum. Status values such as open, funding, or exited describe the demonstration listing, not a live raise.',
      'The listing also carries a short description and an illustrative breakdown. Overview copy, galleries, and documents on the page are demonstration content. They are not a prospectus and they are not an offer to invest.',
      'Use the snapshot to compare how sample holdings are presented. When you want the building itself, return to the property collection.',
    ],
  },
  {
    id: 'direct-property-vs-funds',
    slug: 'direct-property-vs-funds',
    category: 'Ways to invest',
    title: 'Direct property vs funds',
    description:
      'Choose a single fictional residence, or a fund that gathers several sample properties under one theme.',
    image: '/images/story/direct-cedar-court.png',
    imageAlt: 'A pale contemporary residence with a planted courtyard in soft morning light',
    related: ['what-is-a-diversified-fund', 'how-property-investing-works', 'reading-a-property-snapshot'],
    cta: { label: 'Browse properties', href: '/properties' },
    paragraphs: [
      'The platform offers two demonstration paths. Direct property is one named building, reviewed with sample yield, minimum, and location beside the residence. A diversified fund gathers several sample properties under a broader theme, with a sample minimum and a sample property count.',
      'Choose the first path if you want to look at a specific fictional address. Choose the second if you want to see how a wider allocation could be presented as one listing. Both paths use the same catalogue rules: every figure is sample data.',
      'The two catalogues sit side by side in the site navigation. Nothing about the split implies a recommendation, a live product, or a difference in actual return. It is a way to browse the demonstration.',
      'You can move from either listing into the sample get-started flow. That flow does not create an account or place an investment.',
    ],
  },
  {
    id: 'understanding-risk',
    slug: 'understanding-risk',
    category: 'Risk',
    title: 'Understanding risk',
    description:
      'Property investing involves risk, including the possible loss of capital. Every figure here is invented sample data.',
    image: storyAssets.valueWalk.src,
    imageAlt: storyAssets.valueWalk.alt,
    related: ['how-property-investing-works', 'understanding-sample-rental-income', 'reading-a-property-snapshot'],
    cta: { label: 'Read sample risks', href: '/legal/risks' },
    paragraphs: [
      'The sample key-risks note on this site is plain: property investing involves risk, including the possible loss of capital. That sentence is part of the demonstration’s caution, not a complete legal disclosure.',
      'Every figure you meet — sample yield, sample minimum, sample distribution, sample portfolio value — is invented for design. It is not a performance claim, not a track record, and not a guarantee of any outcome.',
      'SERENE INVESTORS is a fictional product used for a design study. Sample information is not an offer, a solicitation, or an invitation to send funds. Login and get-started are local demo interactions. They do not store information.',
      'Read the sample risk page if you want the short disclosure in one place. Then return to the catalogues knowing that the buildings and funds are demonstration listings only.',
    ],
  },
]

export const featuredLearnGuide = learnGuides[0] as LearnGuide

export function getLearnGuide(slug: string) {
  return learnGuides.find((item) => item.slug === slug)
}

for (const guide of learnGuides) {
  for (const relatedSlug of guide.related) {
    if (!getLearnGuide(relatedSlug)) {
      throw new Error(`Missing related Learn guide: ${relatedSlug}`)
    }
  }
}
