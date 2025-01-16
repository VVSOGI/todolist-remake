'use client'

import { Container, Title, Skeleton } from '@/app/components'
import { CategorySection, CreateCategory } from './components'

export default function HomeLoading() {
  async function mock() {
    return { response: {}, status: 100 }
  }

  return (
    <Container>
      <CategorySection>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <CreateCategory createCategory={mock} />
        <div
          style={{
            width: '100%',
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem'
          }}
        >
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </CategorySection>
    </Container>
  )
}
