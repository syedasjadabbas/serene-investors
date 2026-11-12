import { useRef, useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '@/global/components/ui/Button'
import { aboutContact } from '../_lib/about'
import { useSectionReveal } from '@/global/hooks/useSectionReveal'

export function AboutContact() {
  const rootRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  useSectionReveal(rootRef)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      ref={rootRef}
      id="contact"
      className="about-contact py-20 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="about-contact__layout max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2
            data-reveal-heading
            id="contact-heading"
            className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance text-ink"
          >
            {aboutContact.heading}
          </h2>
          <p
            data-reveal-heading
            className="mt-5 max-w-[40ch] text-[1.05rem] leading-relaxed text-muted text-pretty"
          >
            {aboutContact.body}
          </p>
        </div>

        <div data-reveal-item className="p-8 rounded-2xl bg-surface border border-line shadow-sm max-w-xl w-full">
          {submitted ? (
            <div className="demo-confirm" role="status">
              <p className="font-semibold text-lg tracking-tight text-ink">{aboutContact.confirmHeading}</p>
              <p className="mt-2 text-sm text-muted">{aboutContact.confirmBody}</p>
              <div className="page-actions mt-6">
                <ButtonLink href="/get-started" className="min-h-11">
                  Get started
                </ButtonLink>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <label className="block text-sm font-medium text-ink">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  className="mt-1.5 block w-full px-4 py-2.5 rounded-xl border border-line bg-bg text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="mt-1.5 block w-full px-4 py-2.5 rounded-xl border border-line bg-bg text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <label className="block text-sm font-medium text-ink">
                <span>Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5 block w-full px-4 py-2.5 rounded-xl border border-line bg-bg text-ink focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>
              <p className="text-xs text-muted">Sample interaction only.</p>
              <div className="page-actions pt-2">
                <Button type="submit" className="min-h-11 w-full sm:w-auto">
                  Send demo inquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
