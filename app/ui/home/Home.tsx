import React, { useState } from 'react'
import { styles } from '@/app/styles'
import { CategoryList, Container, CreateTodolist, Title, TodolistInput } from '@/app/ui'
import { Category } from '@/app/types'

interface Props {
  categories: Category[]
}

export function Home({ categories = [] }: Props) {
  const [createValue, setCreateValue] = useState('')

  const handleSubmit = () => {
    console.log(`${createValue} submit!`)
  }

  const onChangeCreateValue = (value: string) => {
    setCreateValue(value)
  }

  const onClickCategory = (id: string) => {
    console.log(id)
  }

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      <CreateTodolist>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <TodolistInput handleSubmit={handleSubmit} onChange={onChangeCreateValue} />
        <CategoryList categories={categories} onClickCategory={onClickCategory} />
      </CreateTodolist>
    </Container>
  )
}
