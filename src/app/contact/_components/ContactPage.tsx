'use client'

import { CalendarClock, Mail, MapPin } from 'lucide-react'
import { PageHeader } from '@/global/components/page/PageHeader'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { CONTACT_EMAIL } from '../_lib/contact'
import { ContactForm } from './ContactForm'

// Contact (Pattern B in docs/INNER-PAGE-PATTERNS.md): header → split card (photo panel + form) →
// office card on a tinted panel. There is no backend: the form opens a prefilled email.
export function ContactPage() {
  usePageMeta(
    'Serene Investors | Contact',
    'Questions about a listing, a fund or a guide? Write to the Serene Investors team.',
  )

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch with us."
        highlight="in touch"
        body="Questions about a listing, a fund, the Golden Visa route or anything in the guides? Send us a note."
      />

      <section aria-labelledby="contact-form-heading" className="px-4 sm:px-8">
        <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[20px] bg-white md:grid-cols-2">
          <div className="relative min-h-[280px] overflow-hidden bg-sx-ink md:min-h-[640px]">
            <img
              src={withBase('/images/journey/burj-al-arab.jpg')}
              alt="The Dubai coastline at sunset"
              width={1200}
              height={1400}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-sx-ink/90 via-sx-ink/40 to-sx-ink/10" />
            <p className="absolute inset-x-0 bottom-0 max-w-md p-6 font-heading text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-white sm:p-10 sm:text-[2rem]">
              A question about a building is a good place to start.
            </p>
          </div>
          <div className="p-6 sm:p-10 lg:p-12">
            <h2 id="contact-form-heading" className="font-heading text-2xl font-bold tracking-[-0.02em] text-sx-ink sm:text-[1.75rem]">
              Send us a message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-sx-ink/60">
              Fields marked * are required. Sending opens your own email app with the message ready to go.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-office-heading" className="px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-6 rounded-[20px] bg-sx-tint p-3 sm:p-4 md:grid-cols-[1fr_minmax(0,420px)] md:items-center">
          <div className="flex flex-col gap-3 p-5 sm:p-8">
            <h2 id="contact-office-heading" className="font-heading text-3xl font-bold tracking-[-0.025em] text-sx-ink sm:text-[2.2rem]">
              Our office
            </h2>
            <p className="max-w-md text-base leading-relaxed text-sx-ink/65">
              We are based in Dubai. Meetings are by appointment, so write to us first and we will arrange a time.
            </p>
          </div>
          <address className="flex flex-col gap-5 rounded-[16px] bg-white p-6 not-italic text-sx-ink sm:p-8">
            <p className="font-heading text-xl font-bold tracking-[-0.015em]">Serene Investors</p>
            <p className="flex items-start gap-3 text-sm text-sx-ink/70">
              <MapPin size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
              Dubai, United Arab Emirates
            </p>
            <p className="flex items-start gap-3 text-sm text-sx-ink/70">
              <CalendarClock size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
              Visits by appointment only
            </p>
            <p className="flex items-start gap-3 text-sm">
              <Mail size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-sx-forest underline underline-offset-4 hover:text-sx-brand"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </address>
        </div>
      </section>
    </>
  )
}
