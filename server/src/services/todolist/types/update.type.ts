export interface UpdateTodolistDto {
  id: string
  title: string
  checked: boolean
}

export interface UpdateTodolistOrderDto {
  id: string
  categoryId: string
  title: string
  checked: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}
