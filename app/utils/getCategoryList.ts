import { customFetch } from '@/app/utils/customFetch'
import { GetResponseCategories } from '@/app/types'

export async function getCategoryList() {
  const response = await customFetch<GetResponseCategories>('/api/category', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  return response.json()
}
