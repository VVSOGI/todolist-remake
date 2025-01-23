'use client'

import { Container } from '@/app/components'
import { Skeleton, CreateCategory, Title } from '@todolist/ui-components/app'
import { CategorySection } from './components'

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
            gap: '0.5rem'
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
