import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'

interface OwnerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Owner = ({ children, className, ...props }: OwnerProps) => {
  return (
    <div className={cn('flex gap-2', className)} {...props}>
      {children}
    </div>
  )
}

export const OwnerDetails = ({ children }: PropsWithChildren) => {
  return <div className='space-y-2'>{children}</div>
}

export const OwnerName = ({ children }: PropsWithChildren) => {
  return <p className='font-semibold'>{children}</p>
}

export const OwnerDescription = ({ children }: PropsWithChildren) => {
  return <span className='text-muted'>{children}</span>
}
