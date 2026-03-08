import { Globe, Eye, Code2, Shield, Map } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Card from '@/components/ui/card'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import { capabilities } from '@/content/site-config'
import { capabilitiesOverviewContent } from '@/content/pages'

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Eye,
  Code2,
  Shield,
  Map,
}

export default function CapabilitiesOverview() {
  return (
    <Section className="bg-surface">
      <Container>
        {/* Header row */}
        <AnimateIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-caption font-mono tracking-caption uppercase text-accent/80 mb-3">
              Core Capabilities
            </p>
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-3">
              {capabilitiesOverviewContent.headline}
            </h2>
            <p className="text-body-lg text-muted leading-relaxed">
              {capabilitiesOverviewContent.subheadline}
            </p>
          </div>
          <Button
            href={capabilitiesOverviewContent.ctaLink.href}
            variant="ghost"
            className="shrink-0 self-start sm:self-auto"
          >
            {capabilitiesOverviewContent.ctaLink.label} →
          </Button>
        </AnimateIn>

        {/* Capability cards — 1 → 2 → 3 col */}
        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => {
            const Icon = iconMap[cap.icon]
            return (
              <AnimateItem key={cap.id}>
                <Card className="h-full">
                  {Icon && (
                    <div className="w-9 h-9 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                    </div>
                  )}
                  <h3 className="text-h5 font-semibold text-foreground mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {cap.body}
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
