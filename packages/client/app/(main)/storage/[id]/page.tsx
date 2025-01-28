import React from 'react'
import { StorageHeader, StorageListDisplay } from '@/app/(main)/storage/components'
import { getCategoryById } from '@/app/(main)/category/api'
import { getTodolistByDates } from '@/app/(main)/todolist/api'
import { UUID } from '@/app/types'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const categoryResponse = await getCategoryById(categoryId)
  const todolistsByDateResponse = await getTodolistByDates(categoryId)

  const { response: category } = categoryResponse
  const { response: todolistsByDate } = todolistsByDateResponse

  return (
    <>
      <StorageHeader category={category} />
      <StorageListDisplay list={todolistsByDate.data} />
    </>
  )
}
