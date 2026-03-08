import type { Metadata } from 'next'
import { Shield, Globe, Code2, Map, Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import {
  experienceIntroContent,
  experienceAreasContent,
  experienceFounderContent,
  experienceUsJapanContent,
  experienceCtaContent,
} from '@/content/pages'

export const metadata: Metadata = {
  title: 'Experience | KINJO',
  description:
    'Over 20 years of defense, intelligence, U.S.–Japan operations, and language mission experience — the operational foundation of KINJO.',
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Globe,
  Code2,
  Map,
}

export default function ExperiencePage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                Experience
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {experienceIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-body-lg text-muted leading-relaxed mb-4">
                {experienceIntroContent.subheadline}
              </p>
              <p className="text-base text-muted/80 leading-relaxed">
                {experienceIntroContent.body}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Experience areas ─────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceAreasContent.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <AnimateItem key={item.title}>
                  <div className="p-7 rounded-lg border border-border/70 bg-surface/50 hover:border-border transition-colors duration-200 h-full">
                    {Icon && (
                      <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                    )}
                    <h2 className="text-h4 font-bold text-foreground mb-3">
                      {item.title}
                    </h2>
                    <p className="text-base text-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </AnimateItem>
              )
            })}
          </AnimateStagger>
        </Container>
      </Section>

      {/* ── Founder detail ───────────────────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — founder narrative */}
            <AnimateIn direction="left">
              <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-6">
                {experienceFounderContent.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {experienceFounderContent.paragraphs.map((para, i) => (
                  <p key={i} className="text-base text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </AnimateIn>

            {/* Right — credentials */}
            <AnimateIn delay={0.12}>
              <div className="card-glass rounded-lg p-8">
                <p className="text-caption font-mono tracking-caption uppercase text-accent/70 mb-6">
                  Credentials
                </p>
                <AnimateStagger className="flex flex-col gap-3">
                  {experienceFounderContent.credentials.map((cred) => (
                    <AnimateItem key={cred}>
                      <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border/70 bg-primary/40 hover:border-border transition-colors duration-200">
                        <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-medium text-foreground leading-snug">{cred}</p>
                      </div>
                    </AnimateItem>
                  ))}
                </AnimateStagger>
              </div>
            </AnimateIn>

          </div>
        </Container>
      </Section>

      {/* ── U.S.–Japan Focus ─────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Map className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h2 className="text-h3 font-bold text-foreground tracking-h3">
                  {experienceUsJapanContent.heading}
                </h2>
              </div>
              <p className="text-body-lg text-muted leading-relaxed pl-[52px]">
                {experienceUsJapanContent.body}
              </p>
            </AnimateIn>
          </div>
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
              {experienceCtaContent.headline}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button href={experienceCtaContent.primaryButton.href} size="lg">
                {experienceCtaContent.primaryButton.label}
              </Button>
              <Button href={experienceCtaContent.secondaryButton.href} variant="secondary" size="lg">
                {experienceCtaContent.secondaryButton.label}
              </Button>
            </div>
          </AnimateIn>
        </Container>
      </section>

    </main>
  )
}
