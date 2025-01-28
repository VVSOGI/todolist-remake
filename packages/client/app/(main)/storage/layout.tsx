import React from 'react'
import { Container } from '@todolist/ui-components/app'
import { StorageSection } from './components'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container>
      <StorageSection>{children}</StorageSection>
    </Container>
  )
}
