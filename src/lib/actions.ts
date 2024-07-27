'use server'

import { Images } from './api'

export const onSearchImage = async (formData: FormData) => {
  const value = formData.get('search')

  const imagesByQuery = await Images.getByQuery(value as string)

  return imagesByQuery
}
