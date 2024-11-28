import { Container, CategorySection, Title, CreateCategory, CategoryDisplay } from '@/app/ui'
import { getCategoryList } from '@/app/utils'

export default async function page() {
  const { data } = await getCategoryList()

  return (
    <Container>
      <CategorySection>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <CreateCategory />
        {data && <CategoryDisplay categories={data} />}
      </CategorySection>
    </Container>
  )
}
