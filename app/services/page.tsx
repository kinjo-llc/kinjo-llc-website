import type { Metadata } from 'next'
import {
  Shield, ClipboardList, FileCheck,
  Code2, Zap, MonitorSmartphone,
  Target, Users, Compass,
  Rocket, Layers, Share2,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Card from '@/components/ui/card'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import {
  servicesIntroContent,
  federalServicesContent,
  technicalServicesContent,
  strategicAdvisoryContent,
  missionProgramContent,
  integratedCapabilityContent,
  servicesCtaContent,
} from '@/content/pages'

export const metadata: Metadata = {
  title: 'Services | Kinjo LLC',
  description:
    'Kinjo LLC provides support across federal contracting, operational execution, technical implementation, and strategic advisory.',
}

const iconMap: Record<string, LucideIcon> = {
  Shield, ClipboardList, FileCheck,
  Code2, Zap, MonitorSmartphone,
  Target, Users, Compass,
  Rocket, Layers, Share2,
}

// ─── ServiceGroup ─────────────────────────────────────────────────────────────

function ServiceGroup({
  sectionTitle,
  services,
  bg,
}: {
  sectionTitle: string
  services: { id: string; title: string; summary: string; icon: string }[]
  bg: 'background' | 'surface'
}) {
  return (
    <Section className={bg === 'surface' ? 'bg-surface' : 'bg-background'}>
      <Container>
        <AnimateIn className="mb-10">
          <h2 className="text-h3 font-bold text-foreground tracking-h3">
            {sectionTitle}
          </h2>
        </AnimateIn>
        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <AnimateItem key={service.id}>
                <Card className="h-full">
                  {Icon && (
                    <div className="w-10 h-10 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                  )}
                  <h3 className="text-h5 font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {service.summary}
                  </p>
                </Card>
              </AnimateItem>
            )
          })}
        </AnimateStagger>
      </Container>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                Our Services
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {servicesIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-body-lg text-muted leading-relaxed mb-4">
                {servicesIntroContent.subheadline}
              </p>
              <p className="text-base text-muted/80 leading-relaxed">
                {servicesIntroContent.body}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Service groups ───────────────────────────────────────────────────── */}
      <ServiceGroup
        sectionTitle={federalServicesContent.sectionTitle}
        services={federalServicesContent.services}
        bg="background"
      />

      <ServiceGroup
        sectionTitle={technicalServicesContent.sectionTitle}
        services={technicalServicesContent.services}
        bg="surface"
      />

      <ServiceGroup
        sectionTitle={strategicAdvisoryContent.sectionTitle}
        services={strategicAdvisoryContent.services}
        bg="background"
      />

      <ServiceGroup
        sectionTitle={missionProgramContent.sectionTitle}
        services={missionProgramContent.services}
        bg="surface"
      />

      {/* ── Integrated Capability ───────────────────────────────────────────── */}
      <Section className="bg-background" tight>
        <Container>
          <AnimateIn className="max-w-3xl mx-auto text-center">
            <p className="text-caption font-mono tracking-caption uppercase text-accent mb-4">
              {integratedCapabilityContent.sectionTitle}
            </p>
            <p className="text-body-lg text-muted leading-relaxed">
              {integratedCapabilityContent.body}
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-hero-glow border-t border-border/40 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(6,182,212,0.07) 0%, transparent 60%)' }}
        />
        <Container className="relative z-10 py-20 md:py-24">
          <AnimateIn className="max-w-xl mx-auto text-center">
            <p className="text-h4 font-semibold text-foreground text-balance mb-8">
              {servicesCtaContent.headline}
            </p>
            <Button href={servicesCtaContent.primaryButton.href} size="lg">
              {servicesCtaContent.primaryButton.label}
            </Button>
          </AnimateIn>
        </Container>
      </section>

    </main>
  )
}
