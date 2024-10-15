import { CategoryList, Container, CategoryMain, Title, CategoryInput } from '@/app/ui'
import { getCategoryList } from '@/app/utils'
import { styles } from '@/app/styles'

export default async function page() {
  const { data } = await getCategoryList()

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
        {data && <CategoryList categories={data} />}
      </CategoryMain>
    </Container>
  )
}
