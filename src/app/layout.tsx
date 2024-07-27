import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Providers from '@/components/provider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'NextJs Images',
  description: 'NextJs Images',
}

export default function RootLayout({
  children,
  i,
}: Readonly<{
  children: React.ReactNode
  i: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>
          {i}
          {children}
        </Providers>
      </body>
    </html>
  )
}
