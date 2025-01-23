import React from 'react'
import { Container } from '@todolist/ui-components/app'
import { TodolistSection } from '@/app/(main)/todolist/components'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container>
      <TodolistSection>{children}</TodolistSection>
    </Container>
  )
}
