export type LearnGuide = {
  id: string
  slug: string
  category: string
  title: string
  description: string
  image: string
  imageAlt: string
  anchor?: string
  related: string[]
  cta: {
    label: string
    href: string
  }
  paragraphs: string[]
}
