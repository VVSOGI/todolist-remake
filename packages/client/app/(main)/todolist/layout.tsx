import React from 'react'
import { Container } from '@todolist/ui-components/app'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container>
      <>{children}</>
    </Container>
  )
}
