import type { Metadata } from 'next'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import {
  projectsIntroContent,
  projectsContent,
  projectsCtaContent,
} from '@/content/pages'

export const metadata: Metadata = {
  title: 'Projects & Tools | Kinjo LLC',
  description:
    'Kinjo LLC develops experimental systems, internal tools, and analytical frameworks through the AI Studio.',
}

export default function ProjectsPage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                Projects & Tools
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {projectsIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-body-lg text-muted leading-relaxed mb-4">
                {projectsIntroContent.subheadline}
              </p>
              <p className="text-base text-muted/80 leading-relaxed">
                {projectsIntroContent.body}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Project cards ───────────────────────────────────────────────────── */}
      <Section className="bg-background">
        <Container>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsContent.items.map((item, i) => (
              <AnimateItem key={item.title}>
                <div className="p-6 rounded-lg border border-border/70 bg-surface/50 hover:border-border transition-colors duration-200 h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-caption font-mono tracking-caption uppercase text-accent/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.65rem] font-mono tracking-wide border border-accent/25 text-accent/70 bg-accent/5">
                      {item.status}
                    </span>
                  </div>
                  <h3 className="text-h5 font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateItem>
            ))}
          </AnimateStagger>
        </Container>
      </Section>

      {/* ── Note ────────────────────────────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <AnimateIn className="max-w-2xl mx-auto text-center">
            <div className="card-glass rounded-lg p-8">
              <p className="text-caption font-mono tracking-caption uppercase text-accent/70 mb-4">
                Confidentiality
              </p>
              <p className="text-base text-muted leading-relaxed">
                Client-specific work, sensitive operational tools, and proprietary systems are not described in public-facing documentation. The projects listed here represent general categories of internal development activity.
              </p>
            </div>
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
              {projectsCtaContent.headline}
            </p>
            <Button href={projectsCtaContent.primaryButton.href} size="lg">
              {projectsCtaContent.primaryButton.label}
            </Button>
          </AnimateIn>
        </Container>
      </section>

    </main>
  )
}
