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

export type GetResponseTodolist = {
  data: Todo[]
}
