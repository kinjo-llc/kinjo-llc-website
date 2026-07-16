'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

// ─── Variant styles (from design system JSON) ────────────────────────────────

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-accent text-[#03131A] border border-transparent font-semibold',
    'hover:bg-accent-light hover:-translate-y-px hover:shadow-btn-accent',
    'active:bg-accent-dark active:translate-y-0',
    'disabled:bg-[#6B5820] disabled:text-white/45 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none',
  ].join(' '),

  secondary: [
    'bg-transparent text-foreground border border-secondary font-semibold',
    'hover:bg-white/[0.04] hover:border-[#475569] hover:-translate-y-px',
    'active:bg-white/[0.08] active:translate-y-0',
    'disabled:text-white/35 disabled:border-border disabled:cursor-not-allowed disabled:transform-none',
  ].join(' '),

  ghost: [
    'bg-transparent text-accent border border-transparent font-medium',
    'hover:bg-white/[0.05] hover:text-foreground',
    'active:bg-white/[0.08]',
    'disabled:text-white/35 disabled:cursor-not-allowed',
  ].join(' '),

  danger: [
    'bg-error text-white border border-transparent font-semibold',
    'hover:bg-[#DC2626] hover:-translate-y-px',
    'active:bg-[#B91C1C] active:translate-y-0',
    'disabled:bg-[#7F1D1D] disabled:text-white/45 disabled:cursor-not-allowed disabled:transform-none',
  ].join(' '),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-6 py-3.5 text-[0.95rem]',
  lg: 'px-8 py-4 text-base',
}

// ─── Props ───────────────────────────────────────────────────────────────────

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps & {
  href: string
  target?: string
  rel?: string
}

export type ButtonProps = ButtonAsButton | ButtonAsLink

// ─── Component ───────────────────────────────────────────────────────────────

export default function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props

  const classes = cn(
    'inline-flex items-center justify-center rounded-full',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (props.href !== undefined) {
    const { href, target, rel } = props as ButtonAsLink
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
