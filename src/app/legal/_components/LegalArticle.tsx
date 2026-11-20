import Link from 'next/link'
import type { LegalLinkPart, LegalParagraph, LegalSection } from '../_lib/legal'

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
          <Link
            key={`${part.to}-${index}`}
            href={part.to}
            className="font-semibold text-sx-forest underline underline-offset-4 hover:text-sx-brand"
          >
            {part.label}
          </Link>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  )
}

/** The document body: one white card, sections separated by hairlines, capped at a comfortable line length. */
export function LegalArticle({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="rounded-[20px] bg-white px-5 py-4 sm:px-10 sm:py-6 lg:px-14 lg:py-8">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="max-w-[68ch] scroll-mt-28 border-b border-sx-ink/10 py-8 last:border-b-0"
        >
          <h2 id={`${section.id}-heading`} className="font-heading text-2xl font-bold tracking-[-0.02em] text-sx-ink sm:text-[1.75rem]">
            {section.title}
          </h2>
          <div className="mt-4 flex flex-col gap-4 break-words text-base leading-relaxed text-sx-ink/70 sm:text-[1.0625rem]">
            {section.paragraphs.map((paragraph, index) => (
              <LegalParagraphView key={index} value={paragraph} />
            ))}
            {section.list && (
              <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-sx-brand">
                {section.list.map((item) => (
                  <li key={item} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
