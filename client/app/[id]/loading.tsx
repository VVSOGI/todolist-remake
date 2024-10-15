import React from 'react'
import { Container, TodolistHeader, TodolistMain } from '@/app/ui'
import { styles } from '@/app/styles'

export default function loading() {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor.primary
      }}
    >
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
