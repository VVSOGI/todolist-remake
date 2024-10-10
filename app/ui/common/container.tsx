import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
}

export function Container({ children, style }: Props) {
  return <Section style={style}>{children}</Section>
}
