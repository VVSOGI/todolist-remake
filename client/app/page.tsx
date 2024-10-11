import { CategoryList, Container, CreateTodolist, Title, TodolistInput } from '@/app/ui'
import { getCategoryList } from '@/app/utils/getCategoryList'
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
      <CreateTodolist>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        <TodolistInput />
        <div>{data && <CategoryList categories={data} />}</div>
      </CreateTodolist>
    </Container>
  )
}
