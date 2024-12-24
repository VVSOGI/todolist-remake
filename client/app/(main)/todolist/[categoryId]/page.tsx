import { TodolistHeader, TodolistDisplay, TodolistSection } from '@/app/(main)/todolist/components'
import { getCategoryById } from '@/app/(main)/category/api'
import { getTodolistByCategoryId } from '@/app/(main)/todolist/api'
import { UUID } from '@/app/types'

interface Props {
  params: { categoryId: UUID }
}

export default async function page({ params: { categoryId: categoryId } }: Props) {
  const responseCategory = await getCategoryById(categoryId)
  const responseTodolist = await getTodolistByCategoryId(categoryId)

  const { response: category } = responseCategory

  const getTodolist = async () => {
    'use server'
    const result = await getTodolistByCategoryId(categoryId)
    return result.data
  }

  return (
    <TodolistSection>
      <TodolistHeader category={category} />
      <TodolistDisplay categoryId={category.id} todolist={responseTodolist.data} getTodolist={getTodolist} />
    </TodolistSection>
  )
}
