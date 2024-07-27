import { cn } from '@/lib/utils'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  items: number
}

function Skeleton({ className, items = 1, ...props }: SkeletonProps) {
  return Array.from({ length: items }).map((_, i) => {
    return (
      <div
        key={i}
        style={{ animationDelay: `${2 + i}` }}
        className={cn('animate-pulse rounded-md bg-primary/10', className)}
        {...props}
      />
    )
  })
}

export { Skeleton }
