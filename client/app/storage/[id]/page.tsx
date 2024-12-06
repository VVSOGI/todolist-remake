import React from 'react'
import { StorageHeader, StorageListDisplay, StorageSection } from '@/app/ui'
import { getCategoryById, getTodolistByDates } from '@/app/utils'
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
