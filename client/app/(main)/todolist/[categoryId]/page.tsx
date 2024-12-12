import { TodolistHeader, TodolistDisplay, TodolistSection } from '@/app/ui'
import { getCategoryById, getTodolistByCategoryId } from '@/app/utils'
import { UUID } from '@/app/types'

interface Props {
  params: { categoryId: UUID }
}

export default async function page({ params: { categoryId: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)
  const todolist = await getTodolistByCategoryId(categoryId)

  const getTodolist = async () => {
    'use server'
    const getTodolist = await getTodolistByCategoryId(categoryId)
    return getTodolist.data
  }

  return (
    <TodolistSection>
      <TodolistHeader category={category} />
      <TodolistDisplay categoryId={category.id} todolist={todolist.data} getTodolist={getTodolist} />
    </TodolistSection>
  )
}
