/** The public inbox shown in the footer. The contact form opens a draft to it. */
export const CONTACT_EMAIL = 'hello@sereneinvestors.com'

export type ContactValues = {
  name: string
  email: string
  dialCode: string
  phone: string
  message: string
  consent: boolean
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter an email address like name@example.com.'
  if (!/^\+\d{1,4}$/.test(values.dialCode.trim())) errors.dialCode = 'Use a code like +971.'
  const digits = values.phone.replace(/[\s()-]/g, '')
  if (digits && !/^\d{6,14}$/.test(digits)) errors.phone = 'Enter 6 to 14 digits, or leave it blank.'
  if (values.message.trim().length < 10) errors.message = 'Write a message of at least 10 characters.'
  if (!values.consent) errors.consent = 'Tick the box so we can reply to you.'
  return errors
}

/** A mailto: link with the subject and body filled in from the form. */
export function contactMailto(values: ContactValues) {
  const phone = values.phone.trim() ? `${values.dialCode.trim()} ${values.phone.trim()}` : 'not given'
  const body = [values.message.trim(), '', '—', `Name: ${values.name.trim()}`, `Email: ${values.email.trim()}`, `Phone: ${phone}`].join('\n')
  const subject = `Website enquiry from ${values.name.trim()}`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
