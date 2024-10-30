import React from 'react'
import { StorageHeader, StorageList, StorageMain } from '@/app/ui'
import { getCategoryById, getTodolistByDates } from '@/app/utils'
import { UUID } from '@/app/types'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)
  const todolistsByDate = await getTodolistByDates(categoryId)

  return (
    <StorageMain>
      <StorageHeader category={category} />
      <StorageList list={todolistsByDate.data} />
    </StorageMain>
  )
}
