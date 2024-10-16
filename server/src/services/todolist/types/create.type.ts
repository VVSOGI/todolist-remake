export interface CreateTodolistDto {
  title: string
  categoryId: string
  description: string
}

export interface createTodolist extends CreateTodolistDto {
  id: string
  checked: boolean
  createdAt: Date
  updatedAt: Date
}
