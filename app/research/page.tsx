import type { Metadata } from 'next'
import { Cpu, Map, Workflow, Telescope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import {
  researchIntroContent,
  researchAreasContent,
  researchApproachContent,
  researchCtaContent,
} from '@/content/pages'

export const metadata: Metadata = {
  title: 'Research & Development | Kinjo LLC',
  description:
    'Kinjo LLC explores AI-enabled analysis, geospatial analytics, analytical automation, and emerging technology applications for intelligence and mission support.',
}

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Map,
  Workflow,
  Telescope,
}

export default function ResearchPage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                Research & Development
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {researchIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-body-lg text-muted leading-relaxed mb-4">
                {researchIntroContent.subheadline}
              </p>
              <p className="text-base text-muted/80 leading-relaxed">
                {researchIntroContent.body}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Focus Areas ─────────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <AnimateIn className="max-w-2xl mb-12">
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-4">
              {researchAreasContent.heading}
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreasContent.items.map((item, i) => {
              const Icon = iconMap[item.icon]
              return (
                <AnimateItem key={item.title}>
                  <div className="flex items-start gap-5 p-6 rounded-lg border border-border/70 bg-surface/50 hover:border-border transition-colors duration-200 h-full">
                    {Icon && (
                      <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                    )}
                    <div>
                      <span className="block text-caption font-mono tracking-caption uppercase text-accent/60 mb-1.5">
                        Area 0{i + 1}
                      </span>
                      <h3 className="text-h5 font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </AnimateItem>
              )
            })}
          </AnimateStagger>
        </Container>
      </Section>

      {/* ── Research Philosophy ─────────────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-6">
                {researchApproachContent.heading}
              </h2>
              <p className="text-body-lg text-muted leading-relaxed">
                {researchApproachContent.body}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.12}>
              <div className="card-glass rounded-lg p-8">
                <p className="text-caption font-mono tracking-caption uppercase text-accent/70 mb-6">
                  Research Cycle
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    { step: '01', label: 'Identify operational need' },
                    { step: '02', label: 'Build minimal experiment' },
                    { step: '03', label: 'Document findings' },
                    { step: '04', label: 'Assess mission relevance' },
                    { step: '05', label: 'Integrate or archive' },
                  ].map((row) => (
                    <div key={row.step} className="flex items-center gap-4">
                      <span className="text-caption font-mono text-accent/50 shrink-0 w-6">{row.step}</span>
                      <div className="h-px flex-1 bg-border/40" />
                      <span className="text-sm text-muted/80">{row.label}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              {researchCtaContent.headline}
            </p>
            <Button href={researchCtaContent.primaryButton.href} size="lg">
              {researchCtaContent.primaryButton.label}
            </Button>
          </AnimateIn>
        </Container>
      </section>

    </main>
  )
}
