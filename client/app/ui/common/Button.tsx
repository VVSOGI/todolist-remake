import React from 'react'
import styled from 'styled-components'
import { colors } from '@/app/styles'

const StyledButton = styled.button`
  width: fit-content;
  min-width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.red_600};
  padding: 0 12px;
  color: ${colors.white};
  font-weight: 700;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${colors.red_500};
  }

  &:active {
    background-color: ${colors.red_600};
  }
`

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  onClick: () => void
}

export function Button({ children, style, onClick }: Props) {
  return (
    <StyledButton style={style} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
