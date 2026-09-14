export type LegalLinkPart = {
  to: string
  label: string
}

export type LegalParagraph =
  | string
  | {
      parts: Array<string | LegalLinkPart>
    }

export type LegalSection = {
  id: string
  title: string
  paragraphs: LegalParagraph[]
}

export type LegalDoc = {
  slug: 'privacy' | 'terms' | 'risks'
  title: string
  navLabel: string
  intro: string
  sections: LegalSection[]
}
