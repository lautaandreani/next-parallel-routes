'use client'
import { onSearchImage } from '@/lib/actions'
import Search from './search'
import { useImageContext } from '@/contexts/images.context'

const CATEGORY = ['animals', 'tech', 'family', 'job']

const SearchCategory = () => {
  const { onSetImages } = useImageContext()

  const onSubmitValue = async (formData: FormData) => {
    const newImages = await onSearchImage(formData)
    onSetImages(newImages)
  }

  return (
    <>
      <Search action={onSubmitValue} />

      <div className='flex gap-2 mt-1 justify-start'>
        <p className='text-left' aria-label='illustrations with emojis'>
          📸🤳📱🎨
        </p>
      </div>
    </>
  )
}

export default SearchCategory
