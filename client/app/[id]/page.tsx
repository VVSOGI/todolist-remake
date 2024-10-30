import { UUID } from '@/app/types'
import { Todolist, TodolistHeader, TodolistMain } from '@/app/ui'
import { getCategoryById, getTodolistByCategoryId } from '@/app/utils'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)
  const todolist = await getTodolistByCategoryId(categoryId)

  const getTodolist = async () => {
    'use server'
    const getTodolist = await getTodolistByCategoryId(categoryId)
    return getTodolist.data
  }

  return (
    <TodolistMain>
      <TodolistHeader category={category} />
      <Todolist categoryId={category.id} todolist={todolist.data} getTodolist={getTodolist} />
    </TodolistMain>
  )
}
