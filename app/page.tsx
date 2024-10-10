import { Home } from '@/app/ui'
import { customFetch } from './utils/customFetch'
import { GetResponseCategories } from './types'

export default async function page() {
  const response = await customFetch<GetResponseCategories>('/api/category', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  const { data } = await response.json()

  return (
    <div>
      <Home categories={data} />
    </div>
  )
}
