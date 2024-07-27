'use client'

import { useImageContext } from '@/contexts/images.context'
import { Image as TImage } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'

interface ImageListProps {
  initialImages: TImage[]
}

const ImageList = ({ initialImages }: ImageListProps) => {
  const { onSetImages, images } = useImageContext()

  useEffect(() => {
    onSetImages(initialImages)
  }, [])

  if (!images) return <Skeleton items={20} className='block w-[480px] h-[320px] border' />

  return images.map(({ id, alt_description, urls }) => {
    return (
      <Link key={id} href={`/i/${id}`} className='w-full h-full'>
        <Image
          width={480}
          height={321}
          alt={alt_description}
          src={urls.regular}
          objectFit='cover'
          priority
          className='w-full max-h-[320px] object-cover h-full rounded-md brightness-90 hover:brightness-100 hover:cursor-zoom-in transition border'
        />
      </Link>
    )
  })
}

export default ImageList
