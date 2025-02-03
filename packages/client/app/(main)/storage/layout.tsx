import React from 'react'
import { Container, StorageSection } from '@vvsogi/ui-components/app'

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
