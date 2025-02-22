export interface Category {
  id: number
  name: string
  icon: string
  slug: string
}

export interface Author {
  id: number
  name: string
  photo: string
  occupation: string
  slug: string
}

export interface TemplateCV {
  id: number
  name: string
  thumbnail: string
  about: string
  author_id: number
  category_id: number
  slug: string
  price: number
  rating: number
}
