import { Category } from 'src/entities/category.entity'

export interface GetCategoriesResponseType {
  data: Category[]
  total: number
}
