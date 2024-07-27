'use client'

import { Image } from '@/lib/types'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface ImageContextProps {
  images: Image[] | null
  onSetImages: (images: Image[]) => void
}

const ImageContext = createContext<ImageContextProps | null>(null)

export const ImageContextProvider = ({ children }: PropsWithChildren) => {
  const [images, setImages] = useState<Image[] | null>(null)

  const onSetImages = (images: Image[]) => {
    setImages(images)
  }

  return <ImageContext.Provider value={{ images, onSetImages }}>{children}</ImageContext.Provider>
}

export const useImageContext = () => {
  const imageContext = useContext(ImageContext)
  if (!imageContext) {
    throw new Error('imageContext must be used within a ImageContextProvider')
  }

  return imageContext
}
