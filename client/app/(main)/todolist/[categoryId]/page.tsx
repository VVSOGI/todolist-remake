import { TodolistHeader, TodolistDisplay, TodolistSection } from '@/app/(main)/todolist/components'
import { getCategoryById } from '@/app/(main)/category/api'
import { GetResponseTodolist, UUID } from '@/app/types'
import { newFetchToBackend } from '@/app/utils'

interface Props {
  params: { categoryId: UUID }
}

export default async function page({ params: { categoryId: categoryId } }: Props) {
  const responseCategory = await getCategoryById(categoryId)
  const responseTodolist = await newFetchToBackend<GetResponseTodolist>(`/todolist/${categoryId}?checked=false`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })

  const { response: category } = responseCategory
  const { response: todolist } = responseTodolist

  const getTodolist = async () => {
    'use server'
    const responseNewTodolist = await newFetchToBackend<GetResponseTodolist>(`/todolist/${categoryId}?checked=false`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-cache'
    })

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
