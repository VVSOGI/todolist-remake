import { styles } from '@/app/styles'
import { UUID } from '@/app/types'
import { Container, TodolistMain } from '@/app/ui'
import { getTodolistByCategoryId } from '@/app/utils'

interface Props {
  params: { id: UUID }
}

export default async function page({ params: { id: categoryId } }: Props) {
  const data = await getTodolistByCategoryId(categoryId)

  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      <TodolistMain>.</TodolistMain>
    </Container>
  )
}
