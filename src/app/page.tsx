import Hero from '@/components/hero'
import ImageList from '@/components/image-list'
import { Drawer, DrawerContent } from '@/components/ui/drawer'
import { Images } from '@/lib/api'

export default async function Home() {
  const images = await Images.get()

  return (
    <main className='grid gap-3 grid-cols-[repeat(auto-fit,minmax(375px,1fr))] p-4'>
      <div className='block w-full min-h-[320px] bg-secondary rounded-md row-span-2 border'>
        <Hero />
      </div>

      <ImageList initialImages={images} />
    </main>
  )
}
