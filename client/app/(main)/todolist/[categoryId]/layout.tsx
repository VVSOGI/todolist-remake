import React from 'react'
import { Container } from '@/app/components'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Container>{children}</Container>
}
