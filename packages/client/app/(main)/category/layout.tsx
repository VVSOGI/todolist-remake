import React from 'react'
import { Container, Title } from '@todolist/ui-components/app'
import { CategorySection } from '@/app/(main)/category/components'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container>
      <CategorySection>
        <Title>{String('Make Your Own Business To-Do List').toUpperCase()}</Title>
        {children}
      </CategorySection>
    </Container>
  )
}
