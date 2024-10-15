import { UUID } from '@/app/types'
import { customFetch } from '..'

export async function getTodolistByCategoryId(categoryId: UUID) {
  const response = await customFetch(`/api/todolist/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  return response.json()
}
