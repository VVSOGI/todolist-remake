import { TodolistHeader, TodolistDisplay, TodolistSection } from '@/app/(main)/todolist/components'
import { getCategoryById } from '@/app/(main)/category/api'
import { getTodolistByCategoryId } from '@/app/(main)/todolist/api'
import { UUID } from '@/app/types'

interface Props {
  params: { categoryId: UUID }
}

export default async function page({ params: { categoryId: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)
  const todolist = await getTodolistByCategoryId(categoryId)

  const getTodolist = async () => {
    'use server'
    const result = await getTodolistByCategoryId(categoryId)
    return result.data
  }

  return (
    <TodolistSection>
      <TodolistHeader category={category} />
      <TodolistDisplay categoryId={category.id} todolist={todolist.data} getTodolist={getTodolist} />
    </TodolistSection>
  )
}
