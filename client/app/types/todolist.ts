import { UUID } from '.'

export interface Todo {
  id: UUID
  categoryId: UUID
  title: string
  description: string
  checked: boolean
  createdAt: Date
  updatedAt: Date
}

export interface UpdateTodoDTO {
  id: UUID
  title: string
  description: string
  checked: boolean
}

export interface CreateTodoDto {
  title: string
  categoryId: string
  description: string
}

export type GetResponseTodolist = {
  data: Todo[]
}
