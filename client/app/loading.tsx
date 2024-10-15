import { Container, CategoryMain, Title, CategoryInput } from '@/app/ui'
import { styles } from '@/app/styles'
import { Skeleton } from '@/app/ui/common/Skeleton'

export default function loading() {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      <CategoryMain>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <CategoryInput />
        <div
          style={{
            width: '100%',
            height: '60%',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </CategoryMain>
    </Container>
  )
}
