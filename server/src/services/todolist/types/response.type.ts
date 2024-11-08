import { Todolist } from 'src/entities'

export interface GetTodolistsResponseType {
  data: Todolist[]
  total: number
}

export interface GetTodolistsByDatesResponseType {
  data: { date: string; todolists: Todolist[] }[]
  total: number
}

export interface UpdateTodolistsOrderResponseType {
  data: string
}
