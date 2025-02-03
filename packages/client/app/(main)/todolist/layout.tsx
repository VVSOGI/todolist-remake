import React from 'react'
import { Container, TodolistSection } from '@vvsogi/ui-components/app'

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
