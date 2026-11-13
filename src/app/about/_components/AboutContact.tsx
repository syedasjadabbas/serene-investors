import { useState, type FormEvent } from 'react'
import { PageSection, SectionHeading } from '@/global/components/page/PageSection'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { PillLink } from '@/global/components/ui/PillLink'
import { aboutContact } from '../_lib/about'

const FIELD =
  'mt-2 block w-full rounded-[14px] border border-sx-ink/10 bg-sx-paper px-4 py-3 text-base text-sx-ink outline-none transition-colors placeholder:text-sx-ink/40 focus-visible:border-sx-brand focus-visible:ring-2 focus-visible:ring-sx-brand/30'

export function AboutContact() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageSection id="contact" labelledBy="contact-heading" className="scroll-mt-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <SectionHeading id="contact-heading" eyebrow="Contact" title={aboutContact.heading} body={aboutContact.body} />

        <div className="rounded-[20px] bg-white p-6 sm:p-8">
          {submitted ? (
            <div role="status" className="flex flex-col gap-3">
              <p className="font-heading text-xl font-semibold tracking-[-0.015em] text-sx-ink">{aboutContact.confirmHeading}</p>
              <p className="text-base text-sx-ink/65">{aboutContact.confirmBody}</p>
              <div className="mt-3">
                <PillLink href="/get-started">Get started</PillLink>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <label className="block text-sm font-semibold text-sx-ink">
                Name
                <input type="text" name="name" autoComplete="name" required className={FIELD} />
              </label>
              <label className="block text-sm font-semibold text-sx-ink">
                Email
                <input type="email" name="email" autoComplete="email" required className={FIELD} />
              </label>
              <label className="block text-sm font-semibold text-sx-ink">
                Message
                <textarea name="message" required rows={4} className={FIELD} />
              </label>
              <p className="text-xs text-sx-ink/50">Sample interaction only.</p>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-between gap-5 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest sm:w-fit sm:text-base"
              >
                Send demo inquiry
                <ArrowCircle tone="mint" size="sm" />
              </button>
            </form>
          )}
        </div>
      </div>
    </PageSection>
  )
}
