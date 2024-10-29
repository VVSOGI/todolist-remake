import { CreateTodoDto, GetResponseTodolist, UUID, UpdateTodoDTO } from '@/app/types'
import { fetchToWebServer } from '..'

export async function getTodolistByCategoryId(categoryId: UUID) {
  const response = await fetchToWebServer<GetResponseTodolist>(`/api/todolist/${categoryId}?checked=false`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  return response
}

export async function createTodolist(createTodo: CreateTodoDto) {
  const response = await fetchToWebServer(`/api/todolist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createTodo)
  })

  return response
}

export async function updateTodolist(updatedTodo: UpdateTodoDTO) {
  const response = await fetchToWebServer(`/api/todolist`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTodo)
  })

  return response
}
