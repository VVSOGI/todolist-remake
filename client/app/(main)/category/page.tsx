import { Title } from '@/app/components'
import { CategoryDisplay, CategorySection, CreateCategory } from '@/app/(main)/category/components'
import { newFetchToBackend } from '@/app/utils'
import { GetResponseCategories } from '@/app/types'

export default async function page() {
  const { response } = await newFetchToBackend<GetResponseCategories>('/category?deleted=false', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  const { data } = response

  return (
    <CategorySection>
      <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
      <CreateCategory />
      {data && <CategoryDisplay categories={data} />}
    </CategorySection>
  )
}
