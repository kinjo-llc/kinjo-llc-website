import { Shield, ClipboardList, Code2, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import Card from '@/components/ui/card'
import Button from '@/components/ui/button'
import AnimateIn from '@/components/ui/animate-in'
import { AnimateStagger, AnimateItem } from '@/components/ui/animate-in'
import { services } from '@/content/site-config'
import { servicesOverviewContent } from '@/content/pages'

const iconMap: Record<string, LucideIcon> = {
  Shield,
  ClipboardList,
  Code2,
  Zap,
}

export default function ServicesOverview() {
  return (
    <Section className="bg-background">
      <Container>
        {/* Header row */}
        <AnimateIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="text-caption font-mono tracking-caption uppercase text-accent/80 mb-3">
              What We Do
            </p>
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-3">
              {servicesOverviewContent.headline}
            </h2>
            <p className="text-body-lg text-muted leading-relaxed">
              {servicesOverviewContent.subheadline}
            </p>
          </div>
          <Button
            href={servicesOverviewContent.ctaLink.href}
            variant="ghost"
            className="shrink-0 self-start sm:self-auto"
          >
            {servicesOverviewContent.ctaLink.label} →
          </Button>
        </AnimateIn>

        {/* Service cards — 2-col on sm+ */}
        <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
