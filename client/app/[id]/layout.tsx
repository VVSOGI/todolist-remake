import React from 'react'
import { Container } from '@/app/ui'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Container>{children}</Container>
}
