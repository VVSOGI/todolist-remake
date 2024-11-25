import { styles } from '@/app/styles'
import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styles.backgroundColor.primary};
`

interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
}

export function Container({ children, style }: Props) {
  return <Section style={style}>{children}</Section>
}
