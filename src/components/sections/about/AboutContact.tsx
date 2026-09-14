import { useRef, useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '@/components/ui/Button'
import { aboutContact } from '@/data'
import { useSectionReveal } from '@/hooks/useSectionReveal'

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
      className="about-contact"
      aria-labelledby="contact-heading"
    >
      <div className="about-contact__layout mx-auto max-w-[var(--container-wide)]">
        <div>
          <h2
            data-reveal-heading
            id="contact-heading"
            className="max-w-[12ch] text-[clamp(2.1rem,3.8vw,3.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-balance"
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

        <div data-reveal-item>
          {submitted ? (
            <div className="demo-confirm" role="status">
              <p className="font-medium tracking-tight">{aboutContact.confirmHeading}</p>
              <p className="mt-2 text-sm text-muted">{aboutContact.confirmBody}</p>
              <div className="page-actions">
                <ButtonLink to="/get-started" className="min-h-11">
                  Get started
                </ButtonLink>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <label className="demo-field">
                <span>Name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label className="demo-field">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label className="demo-field">
                <span>Message</span>
                <textarea name="message" required />
              </label>
              <p className="demo-note">Sample interaction only.</p>
              <div className="page-actions">
                <Button type="submit" className="min-h-11">
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
