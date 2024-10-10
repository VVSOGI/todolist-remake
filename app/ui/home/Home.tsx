import React, { useEffect, useState } from 'react'
import { styles } from '@/app/styles'
import { Container, CreateTodolist, Divider, Title, TodolistInput } from '@/app/ui'
import { Category } from '@/app/types'
import CategoryList from './Category'

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
