export interface Category {
  id: string
  title: string
  createdAt: Date
  updatedAt: Date
}

export type GetResponseCategories = {
  data: Category[]
}
