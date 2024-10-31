import React from 'react'
import { Skeleton, StorageHeader, StorageMain } from '../ui'

export default function loading() {
  return (
    <StorageMain>
      <StorageHeader
        category={{
          id: '',
          title: '...Loading',
          updatedAt: new Date('2000.01.01'),
          createdAt: new Date('2000.01.01')
        }}
      />
      <Skeleton />
    </StorageMain>
  )
}
