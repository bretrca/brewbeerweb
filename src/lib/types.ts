export interface Product {
  slug: string
  name: string
  style: string
  abv: number
  ibu: number
  price: number
  image?: string
  shortDescription: string
  description: string[]
  tags: string[]
}

export interface Post {
  slug: string
  title: string
  image?: string
  excerpt: string
  category: string
  date: string
  readingMinutes: number
  content: string[]
}

export interface Faq {
  q: string
  a: string
}

export interface Plan {
  id: string
  name: string
  period: string
  price: number
  highlight: string
  physicalPerks: string[]
  digitalPerks: string[]
}
