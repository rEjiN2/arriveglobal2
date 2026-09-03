export interface City {
  name: string
  code: string
  isHQ?: boolean
}

export interface NavigationItem {
  label: string
  href: string
}

export interface ServiceItem {
  id: number
  slug: string
  title: string
  description: string
  tag: string
  featured?: boolean
  image: string
  imageAlt: string
}

export interface VehicleCard {
  id: number
  slug: string
  name: string
  category: string
  description: string
  price: number
  unit: string
  rating: number
  image: string
  featured?: boolean
}

export interface NewsletterPayload {
  email: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
}
