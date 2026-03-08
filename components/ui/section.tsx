import { cn } from '@/lib/utils'

type SectionTag = 'section' | 'div' | 'article' | 'aside'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: SectionTag
  /** Reduced vertical padding for compact sections */
  tight?: boolean
}

export default function Section({
  children,
  className,
  id,
  as: Tag = 'section',
  tight = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(tight ? 'py-12 md:py-16' : 'py-16 md:py-24 xl:py-32', className)}
    >
      {children}
    </Tag>
  )
}
