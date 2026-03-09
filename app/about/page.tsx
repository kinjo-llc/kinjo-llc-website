import type { Metadata } from 'next'
import Image from 'next/image'
import { Check } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import {
  aboutIntroContent,
  aboutFounderContent,
  missionApproachContent,
  aboutNameContent,
  operatingPrinciplesContent,
  certificationsContent,
  aboutPositioningContent,
  aboutCtaContent,
} from '@/content/pages'

export const metadata: Metadata = {
  title: 'About KINJO',
  description:
    'KINJO is a mission-focused consulting and technology firm — founded by a U.S. Air Force veteran with over 20 years of operational experience in national security, U.S.–Japan environments, and language-enabled mission support.',
}

export default function AboutPage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                About KINJO
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {aboutIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-body-lg text-muted leading-relaxed mb-4">
                {aboutIntroContent.subheadline}
              </p>
              <p className="text-base text-muted/80 leading-relaxed">
                {aboutIntroContent.body}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Founder Section ─────────────────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — founder copy */}
            <AnimateIn direction="left">
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-4">
                {aboutFounderContent.heading}
              </p>
              <h2 className="text-h3 font-bold text-foreground tracking-h3 text-balance mb-2">
                {aboutFounderContent.name}
              </h2>
              <p className="text-sm font-medium text-accent mb-5">
                {aboutFounderContent.title}
              </p>
              <p className="text-body-lg text-muted leading-relaxed mb-6">
                {aboutFounderContent.body}
              </p>
              <p className="text-base text-muted/80 leading-relaxed">
                {aboutFounderContent.vision}
              </p>
            </AnimateIn>

            {/* Right — credentials list */}
            <AnimateIn delay={0.12}>
              <div className="card-glass rounded-lg p-8">
                <p className="text-caption font-mono tracking-caption uppercase text-accent/70 mb-6">
                  Background
                </p>
                <AnimateStagger className="flex flex-col gap-3">
                  {aboutFounderContent.experience.map((item) => (
                    <AnimateItem key={item}>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border/70 bg-primary/40 hover:border-border transition-colors duration-200">
                        <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-medium text-foreground leading-snug">{item}</p>
                      </div>
                    </AnimateItem>
                  ))}
                </AnimateStagger>
              </div>
            </AnimateIn>

          </div>
        </Container>
      </Section>

      {/* ── Why Kinjo Exists ────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-6">
                {missionApproachContent.heading}
              </h2>
              <p className="text-body-lg text-muted leading-relaxed">
                {missionApproachContent.body}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              <div className="card-glass rounded-lg p-8 border-l-2 border-accent/40">
                <p className="text-caption font-mono tracking-caption uppercase text-accent mb-3">
                  Mission
                </p>
                <p className="text-h4 font-semibold text-foreground leading-snug text-balance">
                  Credible, mission-focused technology and consulting for organizations doing important work.
                </p>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── The Name and Identity ───────────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Emblem with gold glow */}
            <AnimateIn className="flex justify-center order-2 lg:order-1">
              <div style={{ filter: 'drop-shadow(0 0 48px rgba(201,168,76,0.10))' }}>
                <Image
                  src="/kinjo-emblem.png"
                  alt="Kinjo LLC emblem representing Shuri Castle — leadership, resilience, and mission stewardship."
                  width={280}
                  height={280}
                  className="object-contain opacity-90"
                />
              </div>
            </AnimateIn>

            {/* Copy */}
            <AnimateIn delay={0.1} className="order-1 lg:order-2">
              <h2 className="text-h3 font-bold text-foreground tracking-h3 text-balance mb-5">
                {aboutNameContent.heading}
              </h2>
              <p className="text-body-lg text-muted leading-relaxed mb-5">
                {aboutNameContent.body}
              </p>
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border border-accent/25 bg-accent/5">
                <span className="text-xl text-accent" aria-hidden="true">金城</span>
                <span className="text-sm text-muted">Kinjo — Golden Castle</span>
              </div>
            </AnimateIn>

          </div>
        </Container>
      </Section>

      {/* ── What We Bring ───────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <AnimateIn className="max-w-xl mb-10">
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-3">
              {operatingPrinciplesContent.headline}
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {operatingPrinciplesContent.items.map((item) => (
              <AnimateItem key={item.title}>
                <div className="flex items-start gap-3 p-5 rounded-lg border border-border/70 bg-primary/40 hover:border-border transition-colors duration-200 h-full">
                  <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  </div>
                  <p className="text-base font-medium text-foreground leading-snug">
                    {item.title}
                  </p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </Container>
      </Section>

      {/* ── Certifications ──────────────────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <AnimateIn className="max-w-2xl">
            <p className="text-caption font-mono tracking-caption uppercase text-accent mb-3">
              Company Status
            </p>
            <h2 className="text-h3 font-bold text-foreground tracking-h3 text-balance mb-2">
              {certificationsContent.heading}
            </h2>
            <p className="text-sm text-muted/70 mb-8">{certificationsContent.subheading}</p>
            <div className="flex flex-col gap-3">
              {certificationsContent.items.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center justify-between gap-4 px-5 py-4 rounded-lg border border-border/70 bg-primary/40"
                >
                  <p className="text-sm font-medium text-foreground leading-snug">{item.title}</p>
                  <span className="shrink-0 text-xs font-mono text-accent/80 px-2 py-0.5 rounded border border-accent/20 bg-accent/5">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ── Positioning statement ───────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <AnimateIn className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-6">
              {aboutPositioningContent.headline}
            </h2>
            <p className="text-body-lg text-muted leading-relaxed">
              {aboutPositioningContent.body}
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-hero-glow border-t border-border/40 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(201,168,76,0.05) 0%, transparent 60%)' }}
        />
        <Container className="relative z-10 py-20 md:py-24">
          <AnimateIn className="max-w-xl mx-auto text-center">
            <p className="text-h4 font-semibold text-foreground text-balance mb-8">
              {aboutCtaContent.headline}
            </p>
            <Button href={aboutCtaContent.primaryButton.href} size="lg">
              {aboutCtaContent.primaryButton.label}
            </Button>
          </AnimateIn>
        </Container>
      </section>

    </main>
  )
}
