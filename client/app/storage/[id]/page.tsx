import React from 'react'
import { StorageHeader, StorageMain } from '@/app/ui'
import { getCategoryById } from '@/app/utils'
import { UUID } from '@/app/types'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)

  return (
    <StorageMain>
      <StorageHeader category={category} />
    </StorageMain>
  )
}
