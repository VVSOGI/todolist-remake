import { CategoryDisplay } from '@/app/(main)/category/components'
import { CreateCategory } from '@vvsogi/ui-components/app'
import { createCategory, deleteCategory, getCategoryList, updateCategory } from '@/app/(main)/category/api'

export default async function page() {
  const { response } = await getCategoryList()
  const { data } = response

  return (
    <>
      <CreateCategory createCategory={createCategory} />
      {data && <CategoryDisplay categories={data} updateCategory={updateCategory} deleteCategory={deleteCategory} />}
    </>
  )
}
