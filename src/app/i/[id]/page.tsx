import Category from '@/components/category'
import { Owner, OwnerDescription, OwnerDetails, OwnerName } from '@/components/owner'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Images } from '@/lib/api'
import { DownloadCloud, ExternalLink, Eye, ImageDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ImagePageProps {
  params: {
    id: string
  }
}

export default async function Page({ params }: ImagePageProps) {
  const image = await Images.getById(params.id)

  if (!image) return notFound()

  return (
    <>
      <Owner className='my-5'>
        <Avatar>
          <AvatarImage src={image.user.profile_image.medium} />
        </Avatar>
        <OwnerDetails>
          <OwnerName>{image.user.username}</OwnerName>
          {image.user.portfolio_url ? (
            <OwnerDescription>
              <Link
                className='text-indigo-500 truncate text-sm hover:underline inline-flex gap-1'
                href={image.user.portfolio_url}
                target='_blank'
              >
                {image.user.portfolio_url} <ExternalLink size={10} />
              </Link>
            </OwnerDescription>
          ) : null}
        </OwnerDetails>
      </Owner>
      <div className='flex flex-col gap-2'>
        <Image
          src={image.urls.regular}
          alt={image.alt_description}
          width={700}
          height={700}
          objectFit='cover'
          className='rounded-lg aspect-square object-cover z-20 mx-auto outline outline-offset-2 outline-1 outline-muted-foreground/30'
        />
        <div className='flex gap-2 items-center text-muted-foreground'>
          <div className='flex text-sm items-center gap-1'>
            <Eye size={12} />
            {image.views}
          </div>

          <div className='flex text-sm items-center gap-1'>
            <ImageDown size={12} />
            {image.downloads}
          </div>
        </div>
      </div>
    </>
  )
}
