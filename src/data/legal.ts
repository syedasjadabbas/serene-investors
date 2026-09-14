import type { LegalDoc } from '@/types/legal'
import { site } from './site'

export const legalIndex = [
  { slug: 'privacy' as const, title: 'Privacy', href: '/legal/privacy' },
  { slug: 'terms' as const, title: 'Terms', href: '/legal/terms' },
  { slug: 'risks' as const, title: 'Key risks', href: '/legal/risks' },
]

export const legalFrame = {
  label: 'Fictional demonstration product',
  backLabel: 'Back to Serene Investors',
  backHref: '/',
  relatedHeading: 'Other sample notes',
} as const

const privacy: LegalDoc = {
  slug: 'privacy',
  title: 'Privacy',
  navLabel: 'Privacy',
  intro:
    'A sample privacy note for this demonstration website. It explains how the demo is meant to be used. It is not a live production privacy policy.',
  sections: [
    {
      id: 'what-this-is',
      title: 'What this page is',
      paragraphs: [
        'This page belongs to SERENE INVESTORS, a fictional product used for a design study. It describes the demonstration you are looking at. It does not describe a live company, a live account system, or a live data-handling service.',
        'Nothing on this page should be read as a real privacy notice, a registration, or a promise about how a production platform would handle information.',
      ],
    },
    {
      id: 'not-a-live-service',
      title: 'This is not a live service',
      paragraphs: [
        'The site is a catalogue-style demonstration. You can browse sample listings, read sample notes, and try sample forms. It is not a production investment service and it is not set up to run live accounts.',
        site.disclaimer,
      ],
    },
    {
      id: 'do-not-submit-sensitive-information',
      title: 'Do not submit real personal information',
      paragraphs: [
        'Please do not enter real sensitive personal information anywhere on this demonstration. That includes real identification numbers, real financial details, real passwords you use elsewhere, or private contact details you would not want in a design study.',
        'If you try a sample form, treat every field as fictional. Use details you would be comfortable seeing in a local demo only.',
      ],
    },
    {
      id: 'demo-forms',
      title: 'How the sample forms work',
      paragraphs: [
        {
          parts: [
            'The ',
            { to: '/login', label: 'login' },
            ', ',
            { to: '/get-started', label: 'get started' },
            ', and ',
            { to: '/about#contact', label: 'contact' },
            ' forms are local demo interactions. Submitting them does not send a message, create an account, store a password, or open a live record.',
          ],
        },
        'Those forms exist so a visitor can see how a journey might be presented. They are not a request for personal data, and they are not connected to a production database in this demonstration.',
      ],
    },
    {
      id: 'what-you-see-in-the-browser',
      title: 'What you see in the browser',
      paragraphs: [
        'This demonstration is a website you view in your browser. Sample listings, sample figures, and sample copy are published as part of the design study. They are not a collection of visitor profiles.',
        'This page does not describe cookies, analytics vendors, or a production data store, because this is not a live service and those claims would be invented.',
      ],
    },
    {
      id: 'other-notes',
      title: 'Other sample notes',
      paragraphs: [
        {
          parts: [
            'For the fictional nature of the product, read the ',
            { to: '/legal/terms', label: 'sample terms' },
            '. For sample figures and the possibility of loss, read the ',
            { to: '/legal/risks', label: 'key risks' },
            ' note.',
          ],
        },
      ],
    },
  ],
}

const terms: LegalDoc = {
  slug: 'terms',
  title: 'Terms',
  navLabel: 'Terms',
  intro:
    'Sample terms for this demonstration website. They describe how to read the demo. They are not a legal agreement and they do not create rights, duties, or an offer to invest.',
  sections: [
    {
      id: 'fictional-demonstration',
      title: 'A fictional demonstration',
      paragraphs: [
        'SERENE INVESTORS is a fictional product used for a design study. The buildings, funds, figures, and journeys on this site are demonstration content. They are not a live marketplace and they are not an invitation to send funds.',
        'These sample terms do not form a contract with a live legal entity. They exist so the demonstration can say, in plain language, what the site is and is not.',
      ],
    },
    {
      id: 'sample-information',
      title: 'Sample information',
      paragraphs: [
        'Every yield, minimum, portfolio value, distribution, status, and property count on this site is sample data. Labels such as “sample yield” and “illustrative sample” are part of the demonstration. They are not live prices and they are not a record of performance.',
        {
          parts: [
            'If you want a short reading of how those figures are presented, open ',
            { to: '/learn', label: 'Learn' },
            ' or ',
            { to: '/how-it-works', label: 'How it works' },
            '.',
          ],
        },
      ],
    },
    {
      id: 'no-real-transaction',
      title: 'No real investment transaction',
      paragraphs: [
        {
          parts: [
            'Nothing on this site processes a real investment. ',
            { to: '/login', label: 'Login' },
            ' and ',
            { to: '/get-started', label: 'get started' },
            ' are sample journeys. They do not collect funds, open an account, or place an order.',
          ],
        },
        'Browsing a listing, choosing a sample amount, or submitting a demo form does not create a holding and does not move money.',
      ],
    },
    {
      id: 'no-guarantee-of-returns',
      title: 'No guarantee of returns',
      paragraphs: [
        'Sample yields and sample distributions are invented for the layout. They do not guarantee a return, an income, or a recovery of capital. Returns are not promised, and past or sample figures are not a guide to any future result.',
        {
          parts: [
            'The ',
            { to: '/legal/risks', label: 'key risks' },
            ' note repeats this in one place.',
          ],
        },
      ],
    },
    {
      id: 'informational-purpose',
      title: 'Informational and educational purpose',
      paragraphs: [
        'The demonstration is here to show how property investing might be presented with clarity: named buildings, diversified fictional funds, and a sample portfolio experience. It is informational and educational. It is not investment advice, not a recommendation, and not an offer to buy or sell anything.',
        {
          parts: [
            'For the product idea in plain language, see ',
            { to: '/about', label: 'About' },
            '.',
          ],
        },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable use',
      paragraphs: [
        'Use this site as a demonstration. Do not present it as a live regulated platform. Do not submit other people’s real personal information into the sample forms. Do not treat sample listings as live offers or as a place to send funds.',
        'If a page asks for a name, email, or password, it is asking for fictional demo details only.',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'The SERENE INVESTORS name, the layout, the sample copy, and the sample listings are part of this design study. They are shown so a visitor can understand the demonstration. They are not a live product identity to be treated as a real investment brand in the market.',
        'Do not copy sample figures out of context and present them as actual performance.',
      ],
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of liability',
      paragraphs: [
        'This demonstration is provided as a design study, as it stands. It does not create a live service, a duty to process information, or a duty to complete an investment. You should not rely on it for financial decisions.',
        'Because the product is fictional, these sample terms do not attempt to name a legal person, a jurisdiction, or a regulator. Those details would be invented.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to the demonstration',
      paragraphs: [
        'The demonstration may change as the design study changes. Sample listings, sample figures, and these notes can be updated, replaced, or removed. A change to the demo is not a change to a live product, because there is no live product here.',
      ],
    },
  ],
}

const risks: LegalDoc = {
  slug: 'risks',
  title: 'Key risks',
  navLabel: 'Risk disclosure',
  intro:
    'A sample risk note for this demonstration website. Property investing involves risk, including the possible loss of capital. Every figure here is invented sample data.',
  sections: [
    {
      id: 'what-this-is',
      title: 'What this page is',
      paragraphs: [
        'This is a plain-language caution for the SERENE INVESTORS demonstration. It is not a complete legal disclosure, not investment advice, and not a document from a regulator.',
        site.disclaimer,
      ],
    },
    {
      id: 'sample-figures',
      title: 'Sample figures are illustrative',
      paragraphs: [
        'Yields, minima, portfolio values, rent notices, and distributions on this site are labelled as sample or illustrative. They are invented for the demonstration. They are not live prices, not paid income, and not a track record.',
        {
          parts: [
            'The catalogues on ',
            { to: '/properties', label: 'Properties' },
            ' and ',
            { to: '/funds', label: 'Funds' },
            ' use the same rule: if a number is shown, it is sample data.',
          ],
        },
      ],
    },
    {
      id: 'values-and-income-can-change',
      title: 'Property values and income can change',
      paragraphs: [
        'In real property investing, values can go down as well as up. Rental income can fall, pause, or stop. Occupancy, costs, and the condition of a building can change. This demonstration does not model those outcomes, and it does not predict them.',
        'A sample yield on a listing is not a forecast. A sample rent notice is not money received.',
      ],
    },
    {
      id: 'investment-involves-risk',
      title: 'Investment products can involve risk',
      paragraphs: [
        'Property investing involves risk, including the possible loss of capital. A person can get back less than they put in. That sentence is part of this demonstration’s caution. It is not a full description of every risk that can attach to a real product.',
        'Because SERENE INVESTORS is fictional, this page does not list licences, structures, or a live fund document. Those would be invented.',
      ],
    },
    {
      id: 'no-future-results',
      title: 'Sample figures do not guarantee future results',
      paragraphs: [
        'Past performance is not a guide to future results. Sample performance is not past performance either. A labelled sample yield, sample distribution, or sample portfolio value does not mean a similar figure would appear later, in this demo or anywhere else.',
        'Nothing on this site should be read as a guarantee of return, income, or capital.',
      ],
    },
    {
      id: 'not-an-offer',
      title: 'Not an offer or investment advice',
      paragraphs: [
        'This demonstration does not constitute an offer to invest, a solicitation, or an invitation to send funds. It does not constitute investment, tax, or legal advice. Named buildings and funds are demonstration listings only.',
        {
          parts: [
            'If you want the product idea without the catalogues, read ',
            { to: '/about', label: 'About' },
            '.',
          ],
        },
      ],
    },
    {
      id: 'no-real-investment',
      title: 'No real investment is processed',
      paragraphs: [
        {
          parts: [
            'No real investment is processed through this demo. Sample journeys on ',
            { to: '/get-started', label: 'Get started' },
            ' and ',
            { to: '/login', label: 'Login' },
            ' stay in the browser as local interactions. They do not collect funds or create a holding.',
          ],
        },
        {
          parts: [
            'For how the four-step demonstration is shown, see ',
            { to: '/how-it-works', label: 'How it works' },
            '. For a short note on risk in the Learn collection, see ',
            { to: '/learn/understanding-risk', label: 'Understanding risk' },
            '.',
          ],
        },
      ],
    },
  ],
}

export const legalDocs: LegalDoc[] = [privacy, terms, risks]

export function getLegalDoc(slug: string) {
  return legalDocs.find((item) => item.slug === slug)
}
