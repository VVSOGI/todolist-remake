import React from 'react'
import { Container, TodolistSection } from '@todolist/ui-components/app'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container>
      <TodolistSection>
        <>{children}</>
      </TodolistSection>
    </Container>
  )
}
