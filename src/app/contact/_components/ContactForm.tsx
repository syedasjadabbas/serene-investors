'use client'

import { useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { contact } from '@/global/data/serene'
import { cn } from '@/global/lib/cn'
import {
  INITIAL_CONTACT,
  enquiryLink,
  interestOptions,
  projectEmail,
  validateContact,
  type ContactChannel,
  type ContactErrors,
  type ContactValues,
} from '../_lib/contact'

const FIELD_BASE =
  'w-full rounded-[14px] border bg-sx-paper py-3 text-base text-sx-ink outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sx-brand/40'

function fieldClass(invalid: boolean, kind: 'input' | 'select' = 'input') {
  return cn(
    FIELD_BASE,
    kind === 'select' ? 'sx-select appearance-none truncate pl-4 pr-10' : 'mt-2 block px-4',
    invalid ? 'border-sx-ink/60' : 'border-transparent focus-visible:border-sx-brand',
  )
}

function FieldError({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-sx-forest">
      {children}
    </p>
  )
}

const CHANNELS: { id: ContactChannel; label: string; hint: string }[] = [
  { id: 'whatsapp', label: 'WhatsApp', hint: `Opens a chat with ${contact.whatsapp}` },
  { id: 'email', label: 'Email', hint: 'Opens your email app, addressed to the project’s inbox' },
]

type Status = { kind: 'idle' } | { kind: 'error'; count: number } | { kind: 'opened'; channel: ContactChannel; to: string }

/**
 * Name, email, phone, interest, message, how to send, and consent. There is no backend: a valid form
 * opens WhatsApp or the visitor's email app with the enquiry filled in, and says so. Nothing is sent
 * until the visitor presses send there.
 */
export function ContactForm() {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [values, setValues] = useState<ContactValues>(INITIAL_CONTACT)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const fid = (name: keyof ContactValues) => `${id}-${name}`
  const eid = (name: keyof ContactValues) => `${id}-${name}-error`

  function update<K extends keyof ContactValues>(name: K, value: ContactValues[K]) {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const found = validateContact(values)
    setErrors(found)
    const keys = Object.keys(found) as (keyof ContactValues)[]
    if (keys.length > 0) {
      setStatus({ kind: 'error', count: keys.length })
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fid(keys[0]))}`)?.focus()
      return
    }
    const link = enquiryLink(values)
    if (values.channel === 'whatsapp') {
      const opened = window.open(link, '_blank', 'noopener,noreferrer')
      if (!opened) window.location.href = link
      setStatus({ kind: 'opened', channel: 'whatsapp', to: contact.whatsapp })
    } else {
      window.location.href = link
      setStatus({ kind: 'opened', channel: 'email', to: projectEmail(values.interest) })
    }
  }

  const describedBy = (name: keyof ContactValues) => (errors[name] ? eid(name) : undefined)
  const sendTo = values.channel === 'whatsapp' ? contact.whatsapp : projectEmail(values.interest)

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fid('name')} className="block text-sm font-semibold text-sx-ink">
            Name *
          </label>
          <input
            id={fid('name')}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={fieldClass(Boolean(errors.name))}
          />
          <FieldError id={eid('name')}>{errors.name}</FieldError>
        </div>
        <div>
          <label htmlFor={fid('email')} className="block text-sm font-semibold text-sx-ink">
            Email *
          </label>
          <input
            id={fid('email')}
            type="email"
            autoComplete="email"
            inputMode="email"
            value={values.email}
            onChange={(event) => update('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            className={fieldClass(Boolean(errors.email))}
          />
          <FieldError id={eid('email')}>{errors.email}</FieldError>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={fid('phone')} className="block text-sm font-semibold text-sx-ink">
            Phone <span className="font-normal text-sx-ink/60">(optional)</span>
          </label>
          <input
            id={fid('phone')}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => update('phone', event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            className={fieldClass(Boolean(errors.phone))}
          />
          <FieldError id={eid('phone')}>{errors.phone}</FieldError>
        </div>
        <div>
          <label htmlFor={fid('interest')} className="block text-sm font-semibold text-sx-ink">
            I’m interested in *
          </label>
          <div className="relative mt-2">
            <select
              id={fid('interest')}
              value={values.interest}
              onChange={(event) => update('interest', event.target.value as ContactValues['interest'])}
              aria-invalid={Boolean(errors.interest)}
              aria-describedby={describedBy('interest')}
              className={fieldClass(Boolean(errors.interest), 'select')}
            >
              <option value="">Choose one</option>
              {interestOptions.map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <ChevronDown size={18} aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-sx-ink/60" />
          </div>
          <FieldError id={eid('interest')}>{errors.interest}</FieldError>
        </div>
      </div>

      <div>
        <label htmlFor={fid('message')} className="block text-sm font-semibold text-sx-ink">
          Message *
        </label>
        <textarea
          id={fid('message')}
          rows={5}
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy('message')}
          className={cn(fieldClass(Boolean(errors.message)), 'resize-y')}
        />
        <FieldError id={eid('message')}>{errors.message}</FieldError>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-sx-ink">Send it by</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {CHANNELS.map((channel) => {
            const checked = values.channel === channel.id
            return (
              <label
                key={channel.id}
                className={cn(
                  'flex cursor-pointer items-start gap-3 rounded-[14px] border p-4 transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-sx-brand/40',
                  checked ? 'border-sx-brand bg-sx-tint' : 'border-transparent bg-sx-paper hover:bg-sx-sand',
                )}
              >
                <input
                  type="radio"
                  name={`${id}-channel`}
                  value={channel.id}
                  checked={checked}
                  onChange={() => update('channel', channel.id)}
                  className="mt-1 size-4 shrink-0 accent-sx-brand"
                />
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-sx-ink">{channel.label}</span>
                  <span className="text-xs leading-relaxed text-sx-ink/65">{channel.hint}</span>
                </span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div>
        <div className="flex items-start gap-3">
          <input
            id={fid('consent')}
            type="checkbox"
            checked={values.consent}
            onChange={(event) => update('consent', event.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={describedBy('consent')}
            className="mt-0.5 size-5 shrink-0 accent-sx-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand"
          />
          <label htmlFor={fid('consent')} className="text-sm leading-relaxed text-sx-ink/70">
            I agree that Serene Heights may use these details to reply to my enquiry. *
          </label>
        </div>
        <FieldError id={eid('consent')}>{errors.consent}</FieldError>
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-between gap-5 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand sm:w-fit sm:text-base"
      >
        {values.channel === 'whatsapp' ? 'Continue on WhatsApp' : 'Write the email'}
        <ArrowCircle tone="mint" size="sm" />
      </button>
      <p className="-mt-2 text-xs leading-relaxed text-sx-ink/60">
        Goes to {sendTo}. Nothing is sent until you press send in {values.channel === 'whatsapp' ? 'WhatsApp' : 'your email app'}.
      </p>

      <p role="status" className="min-h-[1.5rem] text-sm leading-relaxed text-sx-ink/70">
        {status.kind === 'error' &&
          `Please check the ${status.count === 1 ? 'highlighted field' : `${status.count} highlighted fields`}.`}
        {status.kind === 'opened' && status.channel === 'whatsapp' && (
          <>
            WhatsApp should now open with your enquiry to {status.to}. If nothing opened, message{' '}
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-sx-forest underline underline-offset-4 hover:text-sx-brand"
            >
              {status.to}
            </a>{' '}
            directly.
          </>
        )}
        {status.kind === 'opened' && status.channel === 'email' && (
          <>
            Your email app should now open with the enquiry addressed to {status.to}. If nothing opened, write to{' '}
            <a href={`mailto:${status.to}`} className="font-semibold text-sx-forest underline underline-offset-4 hover:text-sx-brand">
              {status.to}
            </a>{' '}
            directly.
          </>
        )}
      </p>
    </form>
  )
}
