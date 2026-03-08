'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import Container from '@/components/ui/container'
import Button from '@/components/ui/button'
import Badge from '@/components/ui/badge'
import HeroVisual from '@/components/ui/hero-visual'
import { heroContent } from '@/content/pages'

// Shared fade-up variant factory
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
})

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-hero-glow flex items-center overflow-hidden">

      {/* ── Watermark emblem ────────────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/kinjo-emblem.png"
          alt=""
          width={580}
          height={580}
          className="opacity-[0.05] blur-sm"
          priority={false}
        />
      </div>

      {/* Radial glow — subtle gold tint at top center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />

      <Container className="relative z-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: copy ────────────────────────────────────────────────────── */}
          <div className="max-w-xl">

            {/* Eyebrow badge */}
            <motion.div {...fadeUp(0)}>
              <Badge className="mb-6">
                {heroContent.eyebrow}
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-h1 font-extrabold tracking-h1 leading-none text-balance mb-6"
            >
              <span className="text-gradient-accent">{heroContent.headline}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.18)}
              className="text-body-lg text-muted leading-relaxed mb-10"
            >
              {heroContent.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.26)} className="flex flex-wrap gap-3 mb-10">
              <Button href={heroContent.primaryButton.href} size="lg">
                {heroContent.primaryButton.label}
              </Button>
              <Button href={heroContent.secondaryButton.href} variant="secondary" size="lg">
                {heroContent.secondaryButton.label}
              </Button>
            </motion.div>

            {/* Supporting points */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.36 } },
              }}
              className="flex flex-col gap-2.5"
            >
              {heroContent.supportingPoints.map((point) => (
                <motion.li
                  key={point}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
                  }}
                  className="flex items-center gap-2.5 text-sm text-muted"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* ── Right: abstract visual ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden lg:flex items-center justify-center"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </Container>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
