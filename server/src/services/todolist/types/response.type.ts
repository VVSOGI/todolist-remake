import { Todolist } from 'src/entities'

export interface GetTodolistsResponseType {
  data: Todolist[]
  total: number
}
