import Hero from '@/components/sections/hero'
import CredibilityBand from '@/components/sections/credibility-band'
import MissionStatement from '@/components/sections/mission-statement'
import CapabilitiesOverview from '@/components/sections/capabilities-overview'
import FounderTeaser from '@/components/sections/founder-teaser'
import TrustSection from '@/components/sections/trust-section'
import FinalCta from '@/components/sections/final-cta'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilityBand />
      <MissionStatement />
      <CapabilitiesOverview />
      <FounderTeaser />
      <TrustSection />
      <FinalCta />
    </main>
  )
}
