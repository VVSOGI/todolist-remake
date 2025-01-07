import React from 'react'
import { Container } from '@/app/components'
import { StorageHeader, StorageSection } from '@/app/(main)/storage/components'

export default function loading() {
  return (
    <Container>
      <StorageSection>
        <StorageHeader
          category={{
            id: '',
            title: '...Loading',
            updatedAt: new Date('2000.01.01'),
            createdAt: new Date('2000.01.01')
          }}
        />
      </StorageSection>
    </Container>
  )
}
