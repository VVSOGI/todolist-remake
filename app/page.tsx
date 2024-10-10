import { Home } from '@/app/ui'
import { customFetch } from './utils/customFetch'
import { Category } from './types'

export default async function page() {
  const response = await customFetch<{ data: Category[] }>('/api/category', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  const { data } = await response.json()

  return (
    <div>
      <Home data={data} />
    </div>
  )
}
