import { UUID } from '.'

export interface Todo {
  id: UUID
  categoryId: UUID
  title: string
  checked: boolean
  createdAt: Date
  updatedAt: Date
  order: number
}

export interface UpdateTodoDTO {
  id: UUID
  title: string
  checked: boolean
}

export interface CreateTodoDto {
  title: string
  categoryId: string
}

export type GetResponseTodolist = {
  data: Todo[]
}

export type TodolistsBySortedDates = { date: string; todolists: Todo[] }[]

export type GetResponseTodolistByDates = {
  data: TodolistsBySortedDates
}
