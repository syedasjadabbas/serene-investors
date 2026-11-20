'use client'

import type { ReactNode } from 'react'
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PageHeader } from '@/global/components/page/PageHeader'
import { contact, tel } from '@/global/data/serene'
import { usePageMeta } from '@/global/hooks/usePageMeta'
import { withBase } from '@/global/lib/asset'
import { ContactForm } from './ContactForm'

const LINK = 'font-semibold text-sx-forest underline decoration-sx-brand/40 underline-offset-4 hover:text-sx-brand'

function Channel({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex flex-col gap-3 rounded-[20px] bg-white p-6">
      <span className="flex size-11 items-center justify-center rounded-[12px] bg-sx-forest text-sx-mint">{icon}</span>
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-sx-ink/60">{label}</h3>
      <div className="flex flex-col gap-1 break-words text-base">{children}</div>
    </li>
  )
}

// Contact (Pattern B in docs/INNER-PAGE-PATTERNS.md): header → phone, WhatsApp and email cards →
// split card (photo panel + enquiry form) → offices and social links. The form has no backend: it
// opens WhatsApp or a prefilled email to the right project inbox.
export function ContactPage() {
  usePageMeta(
    'Serene Investors | Contact',
    `Call Serene Heights on ${contact.uan}, WhatsApp ${contact.whatsapp}, or email the Nathia Gali or Lahore team.`,
  )

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the Serene Heights team."
        highlight="Serene Heights"
        body="Questions about a Smart Property Unit, a hotel apartment, the Lahore tower or a site visit? Call, WhatsApp or write to us."
      />

      <section aria-labelledby="contact-channels-heading" className="px-4 pb-6 sm:px-8 sm:pb-8">
        <div className="mx-auto max-w-[1240px]">
          <h2 id="contact-channels-heading" className="sr-only">
            Phone, WhatsApp and email
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Channel icon={<Phone size={20} aria-hidden="true" />} label="UAN">
              <a href={contact.uanHref} className={LINK}>
                {contact.uan}
              </a>
              <span className="text-sm text-sx-ink/60">Serene Heights helpline</span>
            </Channel>
            <Channel icon={<MessageCircle size={20} aria-hidden="true" />} label="WhatsApp">
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className={LINK}>
                {contact.whatsapp}
                <span className="sr-only"> (opens WhatsApp in a new tab)</span>
              </a>
              <span className="text-sm text-sx-ink/60">Message the team</span>
            </Channel>
            <Channel icon={<Mail size={20} aria-hidden="true" />} label="Nathia Gali">
              <a href={`mailto:${contact.emails.nathiagali}`} className={LINK}>
                {contact.emails.nathiagali}
              </a>
              <span className="text-sm text-sx-ink/60">Serene Heights Nathia Gali</span>
            </Channel>
            <Channel icon={<Mail size={20} aria-hidden="true" />} label="Lahore">
              <a href={`mailto:${contact.emails.lahore}`} className={LINK}>
                {contact.emails.lahore}
              </a>
              <span className="text-sm text-sx-ink/60">Serene Heights Lahore</span>
            </Channel>
          </ul>

          <div className="mt-4 flex flex-col gap-4 rounded-[20px] bg-sx-tint p-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10">
            <h3 className="font-heading text-lg font-semibold text-sx-ink">Serene Heights Lahore lines</h3>
            {contact.lahorePhones.map((line) => (
              <p key={line.label} className="flex flex-col gap-1 text-sm text-sx-ink/70">
                <span>{line.label}</span>
                <span className="flex flex-wrap gap-x-4 gap-y-1">
                  {line.numbers.map((number) => (
                    <a key={number} href={tel(number)} className={`text-base ${LINK}`}>
                      {number}
                    </a>
                  ))}
                </span>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-form-heading" className="px-4 pt-10 sm:px-8 sm:pt-16">
        <div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[20px] bg-white md:grid-cols-2">
          <div className="relative min-h-[280px] overflow-hidden bg-sx-ink md:min-h-[640px]">
            <img
              src={withBase('/images/serene/nathiagali/approach-dusk.webp')}
              alt="The approach to Serene Heights Nathia Gali at dusk"
              width={1200}
              height={1400}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-sx-ink/90 via-sx-ink/40 to-sx-ink/10" />
            <p className="absolute inset-x-0 bottom-0 max-w-md p-6 font-heading text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-white sm:p-10 sm:text-[2rem]">
              Tell us what you are looking for, and the right team will reply.
            </p>
          </div>
          <div className="p-6 sm:p-10 lg:p-12">
            <h2 id="contact-form-heading" className="font-heading text-2xl font-bold tracking-[-0.02em] text-sx-ink sm:text-[1.75rem]">
              Send an enquiry
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-sx-ink/65">
              Fields marked * are required. WhatsApp opens a chat with {contact.whatsapp}; email opens your own email app, addressed
              to {contact.emails.lahore} for Lahore enquiries and {contact.emails.nathiagali} for everything else.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-office-heading" className="px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1240px] rounded-[20px] bg-sx-tint p-3 sm:p-4">
          <div className="flex flex-col gap-3 p-5 sm:p-8">
            <h2 id="contact-office-heading" className="font-heading text-3xl font-bold tracking-[-0.025em] text-sx-ink sm:text-[2.2rem]">
              Our offices
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-sx-ink/65">
              Please call {contact.uan} before you visit, so the team can arrange a time.
            </p>
          </div>
          <ul className="grid gap-3 md:grid-cols-3">
            {contact.offices.map((office) => (
              <li key={office.name} className="flex flex-col gap-4 rounded-[16px] bg-white p-6 sm:p-7">
                <span className="w-fit rounded-full bg-sx-mint px-3 py-1 text-xs font-semibold text-sx-ink">{office.label}</span>
                <h3 className="font-heading text-xl font-bold tracking-[-0.015em] text-sx-ink">{office.name}</h3>
                <address className="flex items-start gap-3 text-sm not-italic leading-relaxed text-sx-ink/70">
                  <MapPin size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-sx-brand" />
                  {office.address}
                </address>
                {office.name === 'Serene Heights Nathia Gali' && (
                  <a href={contact.nathiagaliMap} target="_blank" rel="noreferrer" className={`mt-auto inline-flex items-center gap-1.5 text-sm ${LINK}`}>
                    Open in Google Maps
                    <ExternalLink size={14} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-sx-ink/60">Follow Serene Heights</h3>
            <ul className="flex flex-wrap gap-2">
              {contact.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-sx-ink transition-colors hover:bg-sx-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
                  >
                    {item.label}
                    <ExternalLink size={13} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
