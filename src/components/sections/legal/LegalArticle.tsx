import { Link } from 'react-router-dom'
import type { LegalLinkPart, LegalParagraph, LegalSection } from '@/types/legal'

function isLinkPart(part: string | LegalLinkPart): part is LegalLinkPart {
  return typeof part !== 'string'
}

function LegalParagraphView({ value }: { value: LegalParagraph }) {
  if (typeof value === 'string') {
    return <p>{value}</p>
  }

  return (
    <p>
      {value.parts.map((part, index) =>
        isLinkPart(part) ? (
          <Link key={`${part.to}-${index}`} to={part.to}>
            {part.label}
          </Link>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  )
}

type Props = {
  sections: LegalSection[]
}

export function LegalArticle({ sections }: Props) {
  return (
    <div className="legal-article">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="legal-section" aria-labelledby={`${section.id}-heading`}>
          <h2 id={`${section.id}-heading`}>{section.title}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <LegalParagraphView key={index} value={paragraph} />
          ))}
        </section>
      ))}
    </div>
  )
}
