export interface CreateCategoryDto {
  title: string
}

export interface CreateCategory extends CreateCategoryDto {
  id: string
  createdAt: Date
  updatedAt: Date
}
