import React from 'react'
import { Container } from '@/app/ui'
import { styles } from '@/app/styles'

export default function layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      {children}
    </Container>
  )
}
