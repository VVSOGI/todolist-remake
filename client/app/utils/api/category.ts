import { fetchToWebServer } from '@/app/utils/customFetch'
import { Category, GetResponseCategories, UUID } from '@/app/types'

export async function getCategoryList() {
  const response = await fetchToWebServer<GetResponseCategories>('/api/category', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  return response
}

export async function getCategoryById(categoryId: UUID) {
  const response = await fetchToWebServer<Category>(`/api/category/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  return response
}
