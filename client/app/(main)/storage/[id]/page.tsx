import React from 'react'
import { getCategoryById, getTodolistByDates } from '@/app/utils'
import { StorageHeader, StorageListDisplay, StorageSection } from '@/app/(main)/storage/components'
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
