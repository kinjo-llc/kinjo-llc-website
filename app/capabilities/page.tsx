import type { Metadata } from 'next'
import { Check, Shield, Map, Code2, Globe, Radio } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import {
  capabilitiesIntroContent,
  languageCapContent,
  sigintCapContent,
  nationalSecurityCapContent,
  technologyAiCapContent,
  usJapanCapContent,
  howWeWorkContent,
  capabilitiesCtaContent,
} from '@/content/pages'

export const metadata: Metadata = {
  title: 'Capabilities | KINJO',
  description:
    'Kinjo LLC capabilities: language & cultural support, SIGINT support, mission advisory, software & AI development, and U.S.–Japan operational support.',
}

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Map,
  Code2,
  Globe,
  Radio,
}

// ─── CapabilityArea ────────────────────────────────────────────────────────────

function CapabilityArea({
  sectionTitle,
  body,
  items,
  icon,
  bg,
  featured,
}: {
  sectionTitle: string
  body: string
  items: string[]
  icon: string
  bg: 'background' | 'surface'
  featured?: boolean
}) {
  const Icon = iconMap[icon]
  return (
    <Section className={bg === 'surface' ? 'bg-surface' : 'bg-background'}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* Left — section header */}
          <AnimateIn direction="left" className="lg:col-span-1">
            {Icon && (
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${featured ? 'bg-accent/15 border border-accent/30' : 'bg-accent/10 border border-accent/20'}`}>
                <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
            )}
            {featured && (
              <span className="inline-block text-caption font-mono tracking-caption uppercase text-accent/70 mb-3 px-2 py-0.5 rounded border border-accent/20 bg-accent/5">
                Major Capability
              </span>
            )}
            <h2 className="text-h3 font-bold text-foreground tracking-h3 text-balance mb-4">
              {sectionTitle}
            </h2>
            <p className="text-base text-muted leading-relaxed">
              {body}
            </p>
          </AnimateIn>

          {/* Right — checklist grid */}
          <AnimateStagger className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((item) => (
                <AnimateItem key={item}>
                  <div className="flex items-center gap-3 px-5 py-4 rounded-lg border border-border/70 bg-primary/30 hover:border-border transition-colors duration-200 h-full">
                    <div className="w-6 h-6 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-foreground leading-snug">{item}</p>
                  </div>
                </AnimateItem>
              ))}
            </div>
          </AnimateStagger>

        </div>
      </Container>
    </Section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CapabilitiesPage() {
  return (
    <main>

      {/* ── Page intro ──────────────────────────────────────────────────────── */}
      <Section className="bg-hero-glow">
        <Container>
          <div className="max-w-3xl">
            <AnimateIn delay={0}>
              <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
                Capabilities
              </p>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <h1 className="text-h1 font-extrabold text-foreground tracking-h1 leading-none text-balance mb-6">
                {capabilitiesIntroContent.headline}
              </h1>
            </AnimateIn>
            <AnimateIn delay={0.18}>
              <p className="text-body-lg text-muted leading-relaxed">
                {capabilitiesIntroContent.subheadline}
              </p>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ── Pillar 1: Language & Cultural Support ───────────────────────────── */}
      <CapabilityArea
        sectionTitle={languageCapContent.sectionTitle}
        body={languageCapContent.body}
        items={languageCapContent.items}
        icon={languageCapContent.icon}
        bg="background"
      />

      {/* ── Pillar 2: SIGINT Support ─────────────────────────────────────────── */}
      <CapabilityArea
        sectionTitle={sigintCapContent.sectionTitle}
        body={sigintCapContent.body}
        items={sigintCapContent.items}
        icon={sigintCapContent.icon}
        bg="surface"
      />

      {/* ── Pillar 3: Mission Support & Advisory ────────────────────────────── */}
      <CapabilityArea
        sectionTitle={nationalSecurityCapContent.sectionTitle}
        body={nationalSecurityCapContent.body}
        items={nationalSecurityCapContent.items}
        icon={nationalSecurityCapContent.icon}
        bg="background"
      />

      {/* ── Pillar 4: Software & AI Development ─────────────────────────────── */}
      <CapabilityArea
        sectionTitle={technologyAiCapContent.sectionTitle}
        body={technologyAiCapContent.body}
        items={technologyAiCapContent.items}
        icon={technologyAiCapContent.icon}
        bg="surface"
      />

      {/* ── Pillar 5: U.S.–Japan Operational Support (featured) ─────────────── */}
      <CapabilityArea
        sectionTitle={usJapanCapContent.sectionTitle}
        body={usJapanCapContent.body}
        items={usJapanCapContent.items}
        icon={usJapanCapContent.icon}
        bg="background"
        featured
      />

      {/* ── How We Work ─────────────────────────────────────────────────────── */}
      <Section className="bg-surface">
        <Container>
          <AnimateIn className="mb-10">
            <h2 className="text-h3 font-bold text-foreground tracking-h3">
              {howWeWorkContent.sectionTitle}
            </h2>
          </AnimateIn>
          <AnimateStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeWorkContent.items.map((item, i) => (
              <AnimateItem key={item.title}>
                <div className="p-6 rounded-lg border border-border/70 bg-background/60 hover:border-border transition-colors duration-200 h-full">
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
          <AnimateIn className="max-w-2xl mx-auto text-center">
            <p className="text-h4 font-semibold text-foreground text-balance mb-8">
              {capabilitiesCtaContent.headline}
            </p>
            <Button href={capabilitiesCtaContent.primaryButton.href} size="lg">
              {capabilitiesCtaContent.primaryButton.label}
            </Button>
          </AnimateIn>
        </Container>
      </section>

    </main>
  )
}
