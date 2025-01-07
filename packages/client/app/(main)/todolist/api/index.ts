import { fetchToBackend } from '@/app/utils'
import { CreateTodoDto, GetResponseTodolist, GetResponseTodolistByDates, Todo, UUID, UpdateTodoDTO } from '@/app/types'

export async function createTodolist(createTodo: CreateTodoDto) {
  const response = await fetchToBackend(`/todolist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createTodo)
  })

  return response
}

export async function getTodolistByCategoryId(categoryId: UUID) {
  const response = await fetchToBackend<GetResponseTodolist>(`/todolist/${categoryId}?checked=false`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  return response
}

export async function getTodolistByDates(categoryId: UUID) {
  const response = await fetchToBackend<GetResponseTodolistByDates>(`/todolist/dates/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  return response
}

export async function updateTodolist(updated: UpdateTodoDTO) {
  const response = await fetchToBackend(`/todolist`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updated)
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

  const response = await fetchToBackend(`/todolist/order`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(saveList)
  })

  return response
}
