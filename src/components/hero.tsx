import { Image as LucideImage } from 'lucide-react'
import SearchCategory from './search-category'

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-full flex-col gap-2 p-2 max-w-[70%] mx-auto'>
      <LucideImage color='black' />
      <h1 className='text-3xl font-semibold text-black'>NextJs Image</h1>
      <p className='text-balance text-sm text-center text-black/60'>
        The internet’s source for visuals. Powered by creators everywhere.
      </p>

      <SearchCategory />
    </div>
  )
}

export default Hero
