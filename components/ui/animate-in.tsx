'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

// ─── AnimateIn ───────────────────────────────────────────────────────────────
// Scroll-triggered entrance for a single element.

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'none'
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-72px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === 'up' ? 22 : 0, x: direction === 'left' ? -22 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

// ─── AnimateStagger ──────────────────────────────────────────────────────────
// Parent that triggers staggered entrance for AnimateItem children.

interface AnimateStaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  baseDelay?: number
}

export function AnimateStagger({
  children,
  className,
  staggerDelay = 0.09,
  baseDelay = 0,
}: AnimateStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: baseDelay },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

// ─── AnimateItem ─────────────────────────────────────────────────────────────
// Direct child of AnimateStagger — inherits stagger timing.

interface AnimateItemProps {
  children: React.ReactNode
  className?: string
}

export function AnimateItem({ children, className }: AnimateItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
