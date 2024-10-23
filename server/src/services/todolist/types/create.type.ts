export interface CreateTodolistDto {
  title: string
  categoryId: string
}

export interface createTodolist extends CreateTodolistDto {
  id: string
  checked: boolean
  createdAt: Date
  updatedAt: Date
}
