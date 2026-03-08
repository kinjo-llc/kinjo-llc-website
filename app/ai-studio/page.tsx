import type { Metadata } from 'next'
import { Layers, Search, Target, Code2, FileText, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import {
  aiStudioIntroContent,
  aiStudioModelContent,
  aiStudioRolesContent,
  aiStudioPrinciplesContent,
  aiStudioCtaContent,
} from '@/content/pages'

export const metadata: Metadata = {
  title: 'AI Studio | Kinjo LLC',
  description:
    'The Kinjo AI Studio — a structured human-directed AI collaboration model for intelligence, analysis, engineering, and documentation.',
}

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Search,
  Target,
  Code2,
  FileText,
  CheckCircle2,
}

export default function AiStudioPage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                AI Studio
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {aiStudioIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-body-lg text-muted leading-relaxed mb-4">
                {aiStudioIntroContent.subheadline}
              </p>
              <p className="text-base text-muted/80 leading-relaxed">
                {aiStudioIntroContent.body}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── How the Studio Works ────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-6">
                {aiStudioModelContent.heading}
              </h2>
              <p className="text-body-lg text-muted leading-relaxed">
                {aiStudioModelContent.body}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              {/* Org hierarchy visual */}
              <div className="card-glass rounded-lg p-8 font-mono text-sm">
                <p className="text-caption tracking-caption uppercase text-accent/70 mb-6">
                  Structure
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Founder / Director', tier: 0, accent: true },
                    { label: 'Executive AI Layer', tier: 1 },
                    { label: 'Research  ·  Analysis  ·  Engineering', tier: 2 },
                    { label: 'Documentation  ·  Review', tier: 2 },
                    { label: 'Outputs & Deliverables', tier: 3 },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                      style={{ paddingLeft: `${row.tier * 1.25}rem` }}
                    >
                      {row.tier > 0 && (
                        <span className="text-accent/30 select-none">↓</span>
                      )}
                      <span className={row.accent ? 'text-accent font-semibold' : 'text-muted/80'}>
                        {row.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Studio Architecture — roles ─────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <AnimateIn className="max-w-2xl mb-12">
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-4">
              {aiStudioRolesContent.heading}
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiStudioRolesContent.items.map((item) => {
              const Icon = iconMap[item.icon]
              return (
                <AnimateItem key={item.role}>
                  <div className="p-6 rounded-lg border border-border/70 bg-primary/30 hover:border-border transition-colors duration-200 h-full">
                    {Icon && (
                      <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                    )}
                    <h3 className="text-h5 font-semibold text-foreground mb-2">
                      {item.role}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimateItem>
              )
            })}
          </AnimateStagger>
        </Container>
      </Section>

      {/* ── Governing Principles ────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <AnimateIn className="max-w-2xl mb-12">
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-4">
              {aiStudioPrinciplesContent.heading}
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiStudioPrinciplesContent.items.map((item, i) => (
              <AnimateItem key={item.title}>
                <div className="p-6 rounded-lg border border-border/70 bg-surface/50 hover:border-border transition-colors duration-200 h-full">
                  <span className="block text-caption font-mono tracking-caption uppercase text-accent/60 mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="text-h5 font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
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
              {aiStudioCtaContent.headline}
            </p>
            <Button href={aiStudioCtaContent.primaryButton.href} size="lg">
              {aiStudioCtaContent.primaryButton.label}
            </Button>
          </AnimateIn>
        </Container>
      </section>

    </main>
  )
}
