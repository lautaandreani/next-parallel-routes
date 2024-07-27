import { Image } from './types'

const BASE_URL = 'https://api.unsplash.com'
const DEFAULT_RESULT_PER_PAGE = '22'

const baseFetch = async (url: string) => {
  const fetchURL = new URL(url)
  fetchURL.searchParams.set('per_page', DEFAULT_RESULT_PER_PAGE)

  return await fetch(fetchURL.toString(), {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_API_KEY}}`,
    },
  })
}

export const Images = {
  get: async (page = 1) => {
    try {
      const response = await baseFetch(`${BASE_URL}/photos?page=${page}&per_page=22`)
      const images: Promise<Image[]> = await response.json()
      return images
    } catch (error) {
      console.error('Error fetching images', error)
      return []
    }
  },

  getByQuery: async (query: string) => {
    try {
      const response = await baseFetch(`${BASE_URL}/search/photos?query=${query}`)
      const imageByQuery = await response.json()
      return imageByQuery.results
    } catch (error) {
      console.error('Error fetching image by query', error)
      return [{ results: [] }]
    }
  },

  getById: async (id: string) => {
    try {
      const response = await baseFetch(`${BASE_URL}/photos/${id}`)
      const image: Promise<Image> = await response.json()
      return image
    } catch (error) {
      console.error('Error fetching image by Id', error)
      return
    }
  },
}
