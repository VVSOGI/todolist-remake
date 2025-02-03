import React from 'react'
import { StorageHeader } from '@vvsogi/ui-components/app'

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
