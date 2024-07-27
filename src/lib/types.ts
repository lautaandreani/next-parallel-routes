export interface ImageUrl {
  raw: string
  full: string
  regular: string
  small: string
}

export interface ImageUser {
  id: string
  username: string
  profile_image: {
    small: string
    medium: string
  }
  portfolio_url: string
}

export interface Image {
  id: string
  alt_description: string
  width: number
  height: number
  urls: ImageUrl
  user: ImageUser
  views: number
  downloads: number
}
