import { Category } from 'src/entities/category.entity'

export interface GetCategoriesResponseType {
  data: Category[]
  total: number
}

export interface CreateCategoryResponseType {
  id: string
  title: string
  createdAt: Date
  updatedAt: Date
  deleted: boolean
}

export interface UpdateCategoryResponseType {
  id: string
  title: string
  createdAt: Date
  updatedAt: Date
  deleted: boolean
}
