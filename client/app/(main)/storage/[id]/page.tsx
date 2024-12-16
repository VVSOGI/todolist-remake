import React from 'react'
import { StorageHeader, StorageListDisplay, StorageSection } from '@/app/(main)/storage/components'
import { getCategoryById } from '@/app/(main)/category/api'
import { getTodolistByDates } from '@/app/(main)/todolist/api'
import { UUID } from '@/app/types'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)
  const todolistsByDate = await getTodolistByDates(categoryId)

  return (
    <StorageSection>
      <StorageHeader category={category} />
      <StorageListDisplay list={todolistsByDate.data} />
    </StorageSection>
  )
}
