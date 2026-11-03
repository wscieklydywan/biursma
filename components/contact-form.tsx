'use client'

import { useActionState } from 'react'
import { ArrowRight, CircleCheck, LoaderCircle } from 'lucide-react'
import { sendContact, type ContactState } from '@/app/actions'
import { cn } from '@/lib/utils'

const topics = ['Księgowość firmy', 'Kadry i płace', 'Doradztwo podatkowe', 'Założenie firmy', 'Inne']

const initialState: ContactState = { status: 'idle' }

const inputClass =
  'peer block w-full rounded-xl border border-input bg-background px-4 pb-2.5 pt-6 text-[15px] text-foreground outline-none transition-[border-color,box-shadow] placeholder-transparent focus:border-primary focus:ring-4 focus:ring-primary/10 aria-[invalid=true]:border-destructive'

const labelClass =
  'pointer-events-none absolute left-4 top-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wide peer-focus:text-primary'

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-xs text-destructive">
      {message}
    </p>
  )
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState)
  const v = state.values
  const e = state.errors ?? {}

  if (state.status === 'success') {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-border bg-card p-8 text-center animate-in fade-in zoom-in-95 duration-300"
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-accent text-primary">
          <CircleCheck className="size-7" strokeWidth={1.6} aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-semibold">Wiadomość wysłana</h3>
        <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">{state.message}</p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      noValidate
      className="rounded-3xl border border-border bg-card p-5 shadow-sm md:p-8"
      aria-describedby={state.status === 'error' ? 'form-status' : undefined}
    >
      <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Napisz do nas</h3>
      <p className="mt-1 text-sm text-muted-foreground">Odpowiadamy zwykle w ciągu jednego dnia roboczego.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="relative">
          <input
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Imię i nazwisko"
            defaultValue={v?.name}
            aria-invalid={!!e.name}
            aria-describedby={e.name ? 'name-error' : undefined}
            className={inputClass}
            required
          />
          <label htmlFor="name" className={labelClass}>
            Imię i nazwisko *
          </label>
          <FieldError id="name-error" message={e.name} />
        </div>
        <div className="relative">
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Nazwa firmy"
            defaultValue={v?.company}
            className={inputClass}
          />
          <label htmlFor="company" className={labelClass}>
            Nazwa firmy
          </label>
        </div>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="E-mail"
            defaultValue={v?.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? 'email-error' : undefined}
            className={inputClass}
            required
          />
          <label htmlFor="email" className={labelClass}>
            E-mail *
          </label>
          <FieldError id="email-error" message={e.email} />
        </div>
        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Telefon"
            defaultValue={v?.phone}
            aria-invalid={!!e.phone}
            aria-describedby={e.phone ? 'phone-error' : undefined}
            className={inputClass}
          />
          <label htmlFor="phone" className={labelClass}>
            Telefon
          </label>
          <FieldError id="phone-error" message={e.phone} />
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-foreground">Czego dotyczy zapytanie?</legend>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {topics.map((t, i) => (
            <label key={t} className="cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={t}
                defaultChecked={v ? v.topic === t : i === 0}
                className="peer sr-only"
              />
              <span className="inline-flex h-9 items-center rounded-full border border-input px-3.5 text-[13px] text-foreground/80 transition-colors peer-checked:border-primary-deep peer-checked:bg-primary-deep peer-checked:text-primary-foreground peer-focus-visible:ring-4 peer-focus-visible:ring-primary/20 hover:border-primary/50">
                {t}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="relative mt-5">
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Wiadomość"
          defaultValue={v?.message}
          aria-invalid={!!e.message}
          aria-describedby={e.message ? 'message-error' : undefined}
          className={cn(inputClass, 'resize-none')}
          required
        />
        <label htmlFor="message" className={labelClass}>
          Wiadomość *
        </label>
        <FieldError id="message-error" message={e.message} />
      </div>

      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Strona www</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-4">
        <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={!!e.consent}
            className="mt-0.5 size-4 shrink-0 accent-[var(--primary-deep)]"
          />
          <span>
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez Biuro Rachunkowe Sigma w celu udzielenia
            odpowiedzi na zapytanie. *
          </span>
        </label>
        <FieldError id="consent-error" message={e.consent} />
      </div>

      {state.status === 'error' && (
        <p id="form-status" role="alert" className="mt-4 text-sm font-medium text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group mt-6 inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-primary-deep px-6 text-sm font-semibold text-primary-foreground transition-[transform,opacity] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-70 sm:w-auto md:h-14 md:text-base"
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Wysyłanie…
          </>
        ) : (
          <>
            Wyślij wiadomość
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </>
        )}
      </button>
    </form>
  )
}
