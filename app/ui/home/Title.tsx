import React from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'

const Paragraph = styled.h1`
  width: 100%;
  margin-bottom: 24px;
  font-size: 18px;
  color: ${styles.mainColor.primary};
`

interface Props {
  children: React.ReactNode
}

export function Title({ children }: Props) {
  return <Paragraph>{children}</Paragraph>
}
