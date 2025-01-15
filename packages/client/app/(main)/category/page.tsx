import { Title } from '@/app/components'
import { CategoryDisplay, CategorySection, CreateCategory } from '@/app/(main)/category/components'
import { createCategory, getCategoryList } from '@/app/(main)/category/api'

export default async function page() {
  const { response } = await getCategoryList()
  const { data } = response

  const create = async (title: string) => {
    'use server'
    try {
      return await createCategory({ title })
    } catch (e: any) {
      throw e
    }
  }

  return (
    <CategorySection>
      <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
      <CreateCategory createCategory={create} />
      {data && <CategoryDisplay categories={data} />}
    </CategorySection>
  )
}
