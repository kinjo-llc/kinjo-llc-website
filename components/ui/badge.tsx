import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'muted' | 'success'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-accent/12 text-[#D4B66A]',
  muted:   'bg-white/[0.08] text-[#CBD5E1]',
  success: 'bg-success/14 text-[#86EFAC]',
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-2',
        'text-caption font-mono tracking-caption uppercase',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
