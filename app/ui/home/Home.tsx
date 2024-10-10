import React, { useEffect, useState } from 'react'
import { styles } from '@/app/styles'
import { Container, CreateTodolist, Divider, Title, TodolistInput } from '@/app/ui'
import { Category } from '@/app/types'

interface Props {
  data: Category[]
}

export function Home({ data }: Props) {
  const [createValue, setCreateValue] = useState('')

  const handleSubmit = () => {
    console.log(`${createValue} submit!`)
  }

  const onChangeCreateValue = (value: string) => {
    setCreateValue(value)
  }

  useEffect(() => {
    console.log(data)
  }, [])

  return (
    <Container
      style={{
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      <CreateTodolist>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <TodolistInput handleSubmit={handleSubmit} onChange={onChangeCreateValue} />
        <Divider />
      </CreateTodolist>
    </Container>
  )
}
