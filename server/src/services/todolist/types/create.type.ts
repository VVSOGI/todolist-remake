import { tags } from 'typia'

export interface CreateTodolistDto {
  title: string
  categoryId: string & tags.Format<'uuid'>
}

export interface createTodolist extends CreateTodolistDto {
  id: string
  checked: boolean
  createdAt: Date
  updatedAt: Date
}
