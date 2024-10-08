'use client'

import { styles } from '@/app/styles'
import { Container, CreateTodolist, Title, TodolistInput } from '@/app/ui'
import { useState } from 'react'

export default function Home() {
  const [createValue, setCreateValue] = useState('')

  const handleSubmit = () => {
    console.log(`${createValue} submit!`)
  }

  const onChangeCreateValue = (value: string) => {
    setCreateValue(value)
  }

  return (
    <Container
      style={{
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      <CreateTodolist>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <TodolistInput handleSubmit={handleSubmit} onChange={onChangeCreateValue} />
      </CreateTodolist>
    </Container>
  )
}
