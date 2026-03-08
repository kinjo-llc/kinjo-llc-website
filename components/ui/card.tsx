import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  /** Enable lift + accent border on hover (default: true) */
  hover?: boolean
  as?: React.ElementType
  id?: string
}

export default function Card({
  children,
  className,
  hover = true,
  as: Tag = 'div',
  id,
}: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        // Base glass card surface (from design system JSON)
        'card-glass rounded-lg shadow-card p-6',
        // Hover state
        hover && [
          'transition-all duration-300',
          'hover:-translate-y-1 hover:border-accent/35 hover:shadow-card-hover',
        ],
        className
      )}
    >
      {children}
    </Tag>
  )
}
