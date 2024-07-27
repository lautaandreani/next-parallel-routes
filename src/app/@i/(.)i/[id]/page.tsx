import { Drawer, DrawerContent } from '@/components/ui/drawer'
import ImagePage from '@/app/i/[id]/page'

export default function Page({ params }: { params: { id: string } }) {
  return (
    <Drawer open>
      <DrawerContent>
        <div className='px-20 mx-auto pb-4'>
          <ImagePage params={params} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
