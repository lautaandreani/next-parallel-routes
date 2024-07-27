import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ImageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='w-full h-screen bg-slate-300/40 py-4'>
      <div className='max-w-screen-sm mx-auto'>
        <header className='flex flex-col justify-between'>
          <Link href='/'>
            <ArrowLeft className='text-primary' />
          </Link>
        </header>
        {children}
      </div>
    </main>
  )
}
