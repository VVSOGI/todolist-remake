import React from 'react'
import styled from 'styled-components'
import { borderRadius } from '@/app/types'
import { BORDER_RADIUS_SIZES, COLORS } from '@/app/styles'

const Components = styled.div<ComponentStyleProps>`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GRAY_400};
  ${(props) => BORDER_RADIUS_SIZES[props.borderRadius]}
`

interface ComponentStyleProps {
  borderRadius: borderRadius
}

interface Props {
  children: React.ReactNode
  size: borderRadius
}

export function Circle({ children, size }: Props) {
  return <Components borderRadius={size}>{children}</Components>
}
