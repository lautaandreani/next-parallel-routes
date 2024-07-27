import { ImageContextProvider } from '@/contexts/images.context'
import React, { PropsWithChildren } from 'react'

const Providers = ({ children }: PropsWithChildren) => {
  return <ImageContextProvider>{children}</ImageContextProvider>
}

export default Providers
