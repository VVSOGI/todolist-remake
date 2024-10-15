import { styles } from '@/app/styles'
import { UUID } from '@/app/types'
import { Container, TodolistHeader, TodolistMain } from '@/app/ui'
import { getCategoryById, getTodolistByCategoryId } from '@/app/utils'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const category = await getCategoryById(categoryId)
  const todolists = await getTodolistByCategoryId(categoryId)

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
      </TodolistMain>
    </Container>
  )
}
