import React from 'react'
import { Container, TodolistHeader, TodolistMain } from '@/app/ui'

export default function loading() {
  return (
    <Container>
      <TodolistMain>
        <TodolistHeader
          category={{
            id: '',
            title: '...Loading',
            updatedAt: new Date('2000.01.01'),
            createdAt: new Date('2000.01.01')
          }}
        />
      </TodolistMain>
    </Container>
  )
}
