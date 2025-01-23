// import { Title } from '@/app/components'
import { CategoryDisplay, CategorySection } from '@/app/(main)/category/components'
import { CreateCategory, Title } from '@todolist/ui-components/app'
import { createCategory, deleteCategory, getCategoryList, updateCategory } from '@/app/(main)/category/api'

export default async function page() {
  const { response } = await getCategoryList()
  const { data } = response

  return (
    <CategorySection>
      <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
      <CreateCategory createCategory={createCategory} />
      {data && <CategoryDisplay categories={data} updateCategory={updateCategory} deleteCategory={deleteCategory} />}
    </CategorySection>
  )
}
