export type Variant = {
  id: number
  label: string
  price: number
  regularPrice: number
  onSale: boolean
  stockStatus: string
  description: string
  image?: string | null
}