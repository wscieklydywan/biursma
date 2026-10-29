'use server'

export type ContactState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'phone' | 'message' | 'consent', string>>
  values?: Record<'name' | 'email' | 'phone' | 'message' | 'topic' | 'company', string>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+\d][\d\s-]{7,16}$/

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  if (String(formData.get('website') ?? '').length > 0) {
    return { status: 'success', message: 'Dziękujemy! Odezwiemy się wkrótce.' }
  }

  const name = String(formData.get('name') ?? '').trim().slice(0, 120)
  const email = String(formData.get('email') ?? '').trim().slice(0, 160)
  const phone = String(formData.get('phone') ?? '').trim().slice(0, 20)
  const message = String(formData.get('message') ?? '').trim().slice(0, 3000)
  const consent = formData.get('consent') === 'on'

  const errors: ContactState['errors'] = {}
  if (name.length < 2) errors.name = 'Podaj imię i nazwisko.'
  if (!EMAIL_RE.test(email)) errors.email = 'Podaj poprawny adres e-mail.'
  if (phone && !PHONE_RE.test(phone)) errors.phone = 'Podaj poprawny numer telefonu.'
  if (message.length < 10) errors.message = 'Wiadomość powinna mieć co najmniej 10 znaków.'
  if (!consent) errors.consent = 'Zgoda jest wymagana, abyśmy mogli odpowiedzieć.'

  if (Object.keys(errors).length > 0) {
    return {
      status: 'error',
      message: 'Popraw zaznaczone pola.',
      errors,
      values: { name, email, phone, message, topic: String(formData.get('topic') ?? ''), company: String(formData.get('company') ?? '').slice(0, 160) },
    }
  }

  // TODO: podłączyć wysyłkę e-mail (np. Resend) lub zapis do bazy danych.
  console.log('[contact] Nowe zapytanie:', {
    name,
    email,
    phone,
    topic: String(formData.get('topic') ?? ''),
    length: message.length,
  })

  return {
    status: 'success',
    message: 'Dziękujemy! Odpowiemy najszybciej, jak to możliwe – zwykle w ciągu jednego dnia roboczego.',
  }
}
