// The three legal pages. Privacy is Serene Heights' own published policy (privacyPolicy in
// src/global/data/serene.ts, with its updated date). Terms and risks are short plain notes for
// Serene Investors; they name no legal entities, licences or regulators that are not in serene.ts.

import { company, contact, pricing, privacyPolicy, smartUnit } from '@/global/data/serene'

export type LegalLinkPart = { to: string; label: string }
export type LegalParagraph = string | { parts: Array<string | LegalLinkPart> }

export type LegalSection = {
  id: string
  title: string
  paragraphs: LegalParagraph[]
  list?: string[]
}

export type LegalSlug = 'privacy' | 'terms' | 'risks'

export type LegalDoc = {
  slug: LegalSlug
  title: string
  intro: string
  updated?: string
  sections: LegalSection[]
}

export const legalIndex: { slug: LegalSlug; title: string; href: string }[] = [
  { slug: 'privacy', title: 'Privacy policy', href: '/legal/privacy' },
  { slug: 'terms', title: 'Terms of use', href: '/legal/terms' },
  { slug: 'risks', title: 'Risk notice', href: '/legal/risks' },
]

export const legalSlugs = legalIndex.map((item) => item.slug)

export const legalFrame = {
  label: company.name,
  backLabel: 'Back to Serene Investors',
  backHref: '/',
  relatedHeading: 'Other legal pages',
} as const

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const privacy: LegalDoc = {
  slug: 'privacy',
  title: 'Privacy policy',
  intro: 'How Serene Heights collects, uses and protects your information when you visit the website or send an enquiry.',
  updated: privacyPolicy.updated,
  sections: privacyPolicy.sections.map((section) => ({
    id: slugify(section.h),
    title: section.h,
    paragraphs: section.p ?? [],
    list: section.list,
  })),
}

const terms: LegalDoc = {
  slug: 'terms',
  title: 'Terms of use',
  intro: 'The basic terms for using the Serene Investors website. Please read them with the privacy policy and the risk notice.',
  sections: [
    {
      id: 'about-these-terms',
      title: 'About these terms',
      paragraphs: [
        `This website is Serene Investors, part of ${company.name}, developed by ${company.developer}. By using it, you accept these terms.`,
      ],
    },
    {
      id: 'information-on-this-site',
      title: 'Information on this site',
      paragraphs: [
        'Project details, payment plans, owner benefits and projections are shown as Serene Heights publishes them. We work to keep them accurate, but they can change. What applies to you is what is set out in your booking form, your agreement and the payment plan you sign.',
        'Renders and illustrations show the intended design. The finished buildings may differ.',
      ],
    },
    {
      id: 'not-advice-or-an-offer',
      title: 'Not advice or a binding offer',
      paragraphs: [
        'Nothing on this site is financial, legal or tax advice, and nothing on it is a binding offer. Ask the team any question you have, read the documents before you sign, and take independent advice if you need it.',
        { parts: ['Property investment carries risk. Read the ', { to: '/legal/risks', label: 'risk notice' }, ' before you invest.'] },
      ],
    },
    {
      id: 'enquiries',
      title: 'Enquiries',
      paragraphs: [
        {
          parts: [
            'The ',
            { to: '/contact', label: 'contact form' },
            ' does not send anything by itself. It opens WhatsApp or your email app with your enquiry filled in, and nothing is sent until you press send there. How we handle your details is set out in the ',
            { to: '/legal/privacy', label: 'privacy policy' },
            '.',
          ],
        },
      ],
    },
    {
      id: 'other-sites',
      title: 'Links to other sites',
      paragraphs: [
        'Some links lead to the Serene Heights project websites, YouTube, social media, WhatsApp and Google Maps. Those sites have their own terms and privacy policies.',
      ],
    },
    {
      id: 'content',
      title: 'Text, images and video',
      paragraphs: ['The text, images and video on this site come from Serene Heights. Please do not reuse them without permission.'],
    },
    {
      id: 'contact',
      title: 'Changes and contact',
      paragraphs: [
        'We may update these terms from time to time; changes are posted on this page.',
        `Questions about these terms: call ${contact.uan}, WhatsApp ${contact.whatsapp}, or email ${contact.emails.nathiagali}.`,
      ],
    },
  ],
}

const projection = smartUnit.projection.map((row) => `${row.label}: ${row.value}`).join('; ')

const risks: LegalDoc = {
  slug: 'risks',
  title: 'Risk notice',
  intro: 'Buying property that is still being built carries risk. Please read this before you invest.',
  sections: [
    {
      id: 'construction-and-delivery',
      title: 'Construction and delivery',
      paragraphs: [
        {
          parts: [
            'Serene Heights Nathia Gali has been under construction since 2021, and Serene Heights Lahore has a 2-year delivery timeline. Building projects can be delayed, for example by approvals, costs, materials, weather or access, and the finished building can differ from the renders. You can follow site visits on the ',
            { to: '/progress', label: 'construction progress' },
            ' page.',
          ],
        },
        'Rental income and owner stays start only once a building is complete and operating.',
      ],
    },
    {
      id: 'projections',
      title: 'Projections are not guaranteed',
      paragraphs: [
        `Serene Heights publishes a projection for one Smart Property Unit (${projection}). ${smartUnit.projectionNote}`,
        'Rental income depends on how many nights are booked, the rates guests pay and the cost of running the hotel. It can be lower than projected, and in some periods there may be none.',
      ],
    },
    {
      id: 'resale-and-transfer',
      title: 'Selling or transferring your unit',
      paragraphs: [
        'Smart Property Units are transferable, but a sale depends on finding a buyer. There is no guarantee of how quickly you can sell or at what price, and you may get back less than you paid.',
      ],
    },
    {
      id: 'market-risk',
      title: 'Market risk',
      paragraphs: [
        'Property values, tourism and demand for office and retail space can fall as well as rise, with the economy, inflation, interest rates and local conditions. Past growth in an area does not mean it will continue.',
      ],
    },
    {
      id: 'payments',
      title: 'Your payment commitments',
      paragraphs: [
        `Payment plans run over ${pricing.months} monthly instalments after the down payment. Make sure you can meet every instalment, and read what your agreement says about late or missed payments before you sign.`,
      ],
    },
    {
      id: 'before-you-invest',
      title: 'Before you invest',
      paragraphs: [
        {
          parts: [
            'Only invest money you can leave in place for several years. Read your booking form and agreement carefully, ask the team anything that is unclear through the ',
            { to: '/contact', label: 'contact page' },
            ', and take independent advice if you need it.',
          ],
        },
      ],
    },
  ],
}

export const legalDocs: LegalDoc[] = [privacy, terms, risks]

export function getLegalDoc(slug: string) {
  return legalDocs.find((doc) => doc.slug === slug)
}
