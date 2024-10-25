import { GetResponseTodolist, UUID } from '@/app/types'
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
