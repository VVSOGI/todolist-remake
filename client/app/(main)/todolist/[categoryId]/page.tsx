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
  const { response: todolist } = responseTodolist

  const getTodolist = async () => {
    'use server'
    const responseNewTodolist = await getTodolistByCategoryId(categoryId)
    const { response } = responseNewTodolist
    return response.data
  }

  return (
    <TodolistSection>
      <TodolistHeader category={category} />
      <TodolistDisplay categoryId={category.id} todolist={todolist.data} getTodolist={getTodolist} />
    </TodolistSection>
  )
}
