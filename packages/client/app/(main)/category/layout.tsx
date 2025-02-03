import React from 'react'
import { Container, Title, CategorySection } from '@vvsogi/ui-components/app'

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
