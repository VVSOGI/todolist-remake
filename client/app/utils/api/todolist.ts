import { CreateTodoDto, GetResponseTodolist, GetResponseTodolistByDates, Todo, UUID, UpdateTodoDTO } from '@/app/types'
import { fetchToWebServer } from '@/app/utils'

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

export async function getTodolistByDates(categoryId: UUID) {
  const response = await fetchToWebServer<GetResponseTodolistByDates>(`/api/todolist/dates/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
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

export async function saveTodolistOrder(todolist: Todo[]) {
  const saveList = todolist.map((item, index) => {
    item.order = index
    return {
      id: item.id,
      order: item.order
    }
  })

  const response = await fetchToWebServer(`/api/todolist/order`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(saveList)
  })

  return response
}
