import type { ElementType, ReactNode } from 'react'

export function Reveal({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}) {
  return <Tag className={className}>{children}</Tag>
}
