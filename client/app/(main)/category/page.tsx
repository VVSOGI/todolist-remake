import { Title } from '@/app/components'
import { CategoryDisplay, CategorySection, CreateCategory } from '@/app/(main)/category/components'
import { getCategoryList } from '@/app/(main)/category/api'

export default async function page() {
  const { data } = await getCategoryList()

  return (
    <CategorySection>
      <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
      <CreateCategory />
      {data && <CategoryDisplay categories={data} />}
    </CategorySection>
  )
}
