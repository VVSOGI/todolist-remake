import React from 'react'
import { StorageHeader } from '@/app/(main)/storage/components'

export default function loading() {
  return (
    <>
      <StorageHeader
        category={{
          id: '',
          title: '...Loading',
          updatedAt: new Date('2000.01.01'),
          createdAt: new Date('2000.01.01')
        }}
      />
    </>
  )
}
