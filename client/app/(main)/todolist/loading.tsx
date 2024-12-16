import React from 'react'
import { Container } from '@/app/components'
import { TodolistHeader, TodolistSection } from '@/app/(main)/todolist/components'

export default function loading() {
  return (
    <Container>
      <TodolistSection>
        <TodolistHeader
          category={{
            id: '',
            title: '...Loading',
            updatedAt: new Date('2000.01.01'),
            createdAt: new Date('2000.01.01')
          }}
        />
      </TodolistSection>
    </Container>
  )
}
