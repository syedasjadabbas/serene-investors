'use client'

import { useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { ArrowCircle } from '@/global/components/ui/ArrowCircle'
import { cn } from '@/global/lib/cn'
import { CONTACT_EMAIL, contactMailto, validateContact, type ContactErrors, type ContactValues } from '../_lib/contact'

const INITIAL: ContactValues = { name: '', email: '', dialCode: '+971', phone: '', message: '', consent: false }

const FIELD =
  'block w-full rounded-[14px] border bg-sx-paper px-4 py-3 text-base text-sx-ink outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sx-brand/40'

function fieldClass(invalid: boolean, spaced = true) {
  return cn(FIELD, spaced && 'mt-2', invalid ? 'border-sx-ink/60' : 'border-transparent focus-visible:border-sx-brand')
}

function FieldError({ id, children }: { id: string; children?: ReactNode }) {
  if (!children) return null
  return (
    <p id={id} className="mt-1.5 text-sm font-medium text-sx-forest">
      {children}
    </p>
  )
}

type Status = { kind: 'idle' } | { kind: 'error'; count: number } | { kind: 'opened' }

/**
 * Name, email, phone (with a dial-code field), message and consent. There is no backend, so a
 * valid form opens the visitor's email app with the message filled in, and says so.
 */
export function ContactForm() {
  const id = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [values, setValues] = useState<ContactValues>(INITIAL)
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
    window.location.href = contactMailto(values)
    setStatus({ kind: 'opened' })
  }

  const describedBy = (name: keyof ContactValues) => (errors[name] ? eid(name) : undefined)

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

      <fieldset>
        <legend className="text-sm font-semibold text-sx-ink">
          Phone <span className="font-normal text-sx-ink/60">(optional)</span>
        </legend>
        <div className="mt-2 grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3">
          <div>
            <label htmlFor={fid('dialCode')} className="sr-only">
              Country code
            </label>
            <input
              id={fid('dialCode')}
              type="text"
              inputMode="tel"
              autoComplete="tel-country-code"
              value={values.dialCode}
              onChange={(event) => update('dialCode', event.target.value)}
              aria-invalid={Boolean(errors.dialCode)}
              aria-describedby={describedBy('dialCode')}
              className={cn(fieldClass(Boolean(errors.dialCode), false), 'text-center')}
            />
          </div>
          <div>
            <label htmlFor={fid('phone')} className="sr-only">
              Phone number
            </label>
            <input
              id={fid('phone')}
              type="tel"
              autoComplete="tel-national"
              value={values.phone}
              onChange={(event) => update('phone', event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={describedBy('phone')}
              className={fieldClass(Boolean(errors.phone), false)}
            />
          </div>
        </div>
        <FieldError id={eid('dialCode')}>{errors.dialCode}</FieldError>
        <FieldError id={eid('phone')}>{errors.phone}</FieldError>
      </fieldset>

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
            I agree that Serene Investors may use these details to reply to my message. *
          </label>
        </div>
        <FieldError id={eid('consent')}>{errors.consent}</FieldError>
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-between gap-5 rounded-full bg-sx-ink py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-sx-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sx-brand sm:w-fit sm:text-base"
      >
        Write the email
        <ArrowCircle tone="mint" size="sm" />
      </button>

      <p role="status" className="min-h-[1.5rem] text-sm leading-relaxed text-sx-ink/70">
        {status.kind === 'error' &&
          `Please check the ${status.count === 1 ? 'highlighted field' : `${status.count} highlighted fields`}.`}
        {status.kind === 'opened' && (
          <>
            Your email app should now open with the message addressed to {CONTACT_EMAIL}. Nothing is sent until you press send
            there. If nothing opened, write to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-sx-forest underline underline-offset-4 hover:text-sx-brand">
              {CONTACT_EMAIL}
            </a>{' '}
            directly.
          </>
        )}
      </p>
    </form>
  )
}
