import type { Metadata } from 'next'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import ContactForm from '@/components/sections/contact-form'
import AnimateIn from '@/components/ui/animate-in'
import { contactIntroContent } from '@/content/pages'

export const metadata: Metadata = {
  title: 'Contact KINJO',
  description:
    'Contact KINJO — mission-focused consulting and technology. Available for government contracting, U.S.–Japan operational support, commercial partnerships, and mission-aligned opportunities.',
}

export default function ContactPage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-2xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                Get in Touch
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {contactIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-h5 font-medium text-foreground/90 mb-4">
                {contactIntroContent.subheadline}
              </p>
              <p className="text-body-lg text-muted leading-relaxed">
                {contactIntroContent.body}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Contact form ────────────────────────────────────────────────────── */}
      <ContactForm />

    </main>
  )
}
