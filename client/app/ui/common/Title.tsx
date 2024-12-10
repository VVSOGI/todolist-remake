import React from 'react'
import styled from 'styled-components'
import { COLORS } from '@/app/styles'
import { D2CodingBold } from '@/public/fonts'

const Paragraph = styled.h1`
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: ${COLORS.red_600};
`

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
}

export function Title({ children, style }: Props) {
  return (
    <Paragraph className={D2CodingBold.className} style={style}>
      {children}
    </Paragraph>
  )
}
