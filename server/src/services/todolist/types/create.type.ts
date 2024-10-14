export interface CreateTodolistDto {
  title: string
  categoryId: string
  description: string
}

export interface createTodolist extends CreateTodolistDto {
  id: string
  createdAt: Date
  updatedAt: Date
}
