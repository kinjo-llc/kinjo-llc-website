'use client'

import { useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { serviceInterestOptions } from '@/content/site-config'
import { contactFormContent } from '@/content/pages'

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  name: string
  email: string
  organization: string
  service_interest: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  service_interest?: string
  message?: string
}

const MESSAGE_MAX = 3000

// ─── Client-side validation ────────────────────────────────────────────────────

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {}
  if (!form.name.trim() || form.name.trim().length < 2)
    errors.name = 'Name must be at least 2 characters.'
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = 'A valid email address is required.'
  if (!form.service_interest)
    errors.service_interest = 'Please select an area of interest.'
  if (!form.message.trim() || form.message.trim().length < 20)
    errors.message = 'Message must be at least 20 characters.'
  return errors
}

// ─── Shared style helpers ──────────────────────────────────────────────────────

function fieldClass(hasError: boolean) {
  return cn(
    'w-full px-4 py-3 rounded-lg bg-surface border text-foreground text-sm',
    'placeholder:text-muted/35 transition-all duration-150',
    'focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/25',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    hasError ? 'border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20' : 'border-border hover:border-border/80'
  )
}

const errorClass = 'text-xs text-red-400 mt-1.5 block'
const labelClass = 'block text-sm font-medium text-foreground mb-1.5'

// ─── Success state ─────────────────────────────────────────────────────────────

function SuccessCard() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="max-w-xl mx-auto text-center py-10">
          <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-accent" aria-hidden="true" />
          </div>
          <h2 className="text-h3 font-bold text-foreground mb-4">Message sent</h2>
          <p className="text-body-lg text-muted leading-relaxed mb-8">
            Thank you for reaching out. Kinjo LLC will review your message and respond within 1–2 business days.
          </p>
          <Button href="/" variant="secondary">Return to Home</Button>
        </div>
      </Container>
    </Section>
  )
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    service_interest: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const fieldErrors = validateForm(form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')
    setServerError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          organization: form.organization.trim() || undefined,
          service_interest: form.service_interest,
          message: form.message.trim(),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setServerError(data.error ?? 'Something went wrong. Please try again.')
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setServerError('Unable to send message. Please check your connection and try again.')
    }
  }

  if (status === 'success') return <SuccessCard />

  const isLoading = status === 'loading'
  const msgLen = form.message.length
  const msgPct = Math.min((msgLen / MESSAGE_MAX) * 100, 100)

  return (
    <Section className="bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* ── Form ──────────────────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <h2 className="text-h3 font-bold text-foreground mb-2">
              {contactFormContent.headline}
            </h2>
            <p className="text-base text-muted mb-8 leading-relaxed">
              {contactFormContent.body}
            </p>

            {/* Server error banner */}
            {status === 'error' && serverError && (
              <div
                role="alert"
                className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30 mb-6"
              >
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-red-400">{serverError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClass(!!errors.name)}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span id="name-error" className={errorClass}>{errors.name}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email <span className="text-accent" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass(!!errors.email)}
                    placeholder="you@organization.com"
                  />
                  {errors.email && (
                    <span id="email-error" className={errorClass}>{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className={labelClass}>
                  Organization{' '}
                  <span className="text-muted text-xs font-normal">(optional)</span>
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={handleChange}
                  disabled={isLoading}
                  className={fieldClass(false)}
                  placeholder="Agency, company, or project name"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label htmlFor="service_interest" className={labelClass}>
                  Area of Interest <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <select
                  id="service_interest"
                  name="service_interest"
                  value={form.service_interest}
                  onChange={handleChange}
                  disabled={isLoading}
                  aria-invalid={!!errors.service_interest}
                  aria-describedby={errors.service_interest ? 'service-error' : undefined}
                  className={fieldClass(!!errors.service_interest)}
                >
                  <option value="">Select an option…</option>
                  {serviceInterestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.service_interest && (
                  <span id="service-error" className={errorClass}>{errors.service_interest}</span>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Message <span className="text-accent" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : 'message-count'}
                  className={cn(fieldClass(!!errors.message), 'resize-none')}
                  placeholder="Describe the type of support you need, any relevant context, and your timeline…"
                />
                {errors.message && (
                  <span id="message-error" className={errorClass}>{errors.message}</span>
                )}
                {/* Character count + progress bar */}
                <div className="mt-2" id="message-count">
                  {/* Progress bar */}
                  <div className="h-0.5 w-full bg-border/60 rounded-full overflow-hidden mb-1.5" aria-hidden="true">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-200',
                        msgPct > 90 ? 'bg-warning' : 'bg-accent/40'
                      )}
                      style={{ width: `${msgPct}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted/70">
                    <span aria-live="polite">{msgLen}</span> / {MESSAGE_MAX} characters
                  </p>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    'inline-flex items-center gap-2 px-7 py-3 rounded-full',
                    'bg-accent text-background font-semibold text-base',
                    'transition-all duration-200',
                    'hover:bg-accent-light hover:-translate-y-px hover:shadow-btn-accent',
                    'active:translate-y-0 active:bg-accent-dark',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    'disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none'
                  )}
                >
                  {isLoading && (
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  )}
                  {isLoading ? 'Sending…' : 'Send Message'}
                </button>
              </div>

            </form>
          </div>

          {/* ── Sidebar ───────────────────────────────────────────────────── */}
          <aside className="lg:col-span-1">
            <div className="card-glass rounded-lg p-6 sticky top-28">
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-4">
                {contactFormContent.sidebarTitle}
              </p>
              <ul className="flex flex-col gap-3">
                {contactFormContent.sidebarPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
                    <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-accent" aria-hidden="true" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border/40">
                <p className="text-caption font-mono tracking-caption uppercase text-muted mb-2">
                  Direct contact
                </p>
                <a
                  href="mailto:hello@kinjollc.com"
                  className="text-sm text-accent hover:text-accent-light transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  hello@kinjollc.com
                </a>
                <p className="text-xs text-muted mt-1.5">
                  Response within 1–2 business days
                </p>
              </div>
            </div>
          </aside>

        </div>
      </Container>
    </Section>
  )
}
