import { Container, CategorySection, Title, CreateCategory } from '@/app/ui'
import { Skeleton } from '@/app/ui/common/Skeleton'

export default function loading() {
  return (
    <Container>
      <CategorySection>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <CreateCategory />
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
