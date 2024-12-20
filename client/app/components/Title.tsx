import React from 'react'
import styled from 'styled-components'
import { D2CodingBold } from '@/public/fonts'
import { COLORS, COMMON_MEDIA_QUERY } from '@/app/styles'

const Paragraph = styled.h1`
  width: 100%;
  margin-bottom: 1.5rem;
  color: ${COLORS.RED_600};
  ${COMMON_MEDIA_QUERY.title}
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
