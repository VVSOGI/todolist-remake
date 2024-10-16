import { UUID } from '@/app/types'
import { fetchToWebServer } from '..'

export async function getTodolistByCategoryId(categoryId: UUID) {
  const response = await fetchToWebServer(`/api/todolist/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  return response.json()
}
