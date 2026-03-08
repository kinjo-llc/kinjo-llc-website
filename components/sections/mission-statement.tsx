import Section from '@/components/ui/section'
import Container from '@/components/ui/container'
import AnimateIn from '@/components/ui/animate-in'
import { missionStatementContent } from '@/content/pages'

export default function MissionStatement() {
  return (
    <>
      <div className="section-divider" aria-hidden="true" />
      <Section className="bg-surface">
        <Container>
          <AnimateIn className="max-w-3xl mx-auto text-center">
            <p className="text-caption font-mono tracking-caption uppercase text-accent mb-5">
              {missionStatementContent.eyebrow}
            </p>
            <h2 className="text-h2 font-bold text-foreground tracking-h2 text-balance mb-6">
              {missionStatementContent.headline}
            </h2>
            <p className="text-body-lg text-muted leading-relaxed">
              {missionStatementContent.body}
            </p>
          </AnimateIn>
        </Container>
      </Section>
    </>
  )
}
