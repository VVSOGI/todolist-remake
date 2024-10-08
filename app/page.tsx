'use client'

import { styles } from '@/app/styles'
import { Container, CreateTodolist, Title, TodolistInput } from '@/app/ui'

export default function Home() {
  return (
    <Container
      style={{
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      <CreateTodolist>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <TodolistInput />
      </CreateTodolist>
    </Container>
  )
}
