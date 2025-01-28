import { TodolistHeader } from '@todolist/ui-components/app'
import { TodolistDisplay } from '@/app/(main)/todolist/components'
import { getCategoryById } from '@/app/(main)/category/api'
import { createTodolist, getTodolistByCategoryId, updateTodolist, saveTodolistOrder } from '@/app/(main)/todolist/api'
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
    <>
      <TodolistHeader category={category} />
      <TodolistDisplay
        categoryId={category.id}
        todolist={todolist.data}
        getTodolist={getTodolist}
        createTodolist={createTodolist}
        updateTodolist={updateTodolist}
        saveTodolistOrder={saveTodolistOrder}
      />
    </>
  )
}
