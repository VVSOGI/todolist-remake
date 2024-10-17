import { styles } from '@/app/styles'
import { UUID } from '@/app/types'
import { Container, Todolist, TodolistHeader, TodolistMain } from '@/app/ui'
import { getCategoryById, getTodolistByCategoryId } from '@/app/utils'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)
  let todolist = await getTodolistByCategoryId(categoryId)

  const getTodolist = async () => {
    'use server'
    const getTodolist = await getTodolistByCategoryId(categoryId)
    return getTodolist.data
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
      <TodolistMain>
        <TodolistHeader category={category} />
        <Todolist todolist={todolist.data} getTodolist={getTodolist} />
      </TodolistMain>
    </Container>
  )
}
