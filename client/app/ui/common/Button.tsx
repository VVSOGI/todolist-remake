import React from 'react'
import styled from 'styled-components'
import { colors } from '@/app/styles'

const StyledButton = styled.button<StylesProps>`
  width: fit-content;
  min-width: 48px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.stylestheme === ButtonsTheme.bright ? colors.red_600 : colors.gray_500
  }};
  padding: 0 12px;
  color: ${colors.white};
  font-weight: 700;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${(props) => {
      return props.stylestheme === ButtonsTheme.bright ? colors.red_500 : colors.gray_400
    }};
  }

  &:active {
    background-color: ${(props) => {
      return props.stylestheme === ButtonsTheme.bright ? colors.red_600 : colors.gray_500
    }};
  }
`

export enum ButtonsTheme {
  bright = 'BRIGHT',
  dark = 'DARK'
}

interface StylesProps {
  stylestheme: ButtonsTheme
}

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
  stylesTheme?: ButtonsTheme
  onClick: () => void
}

export function Button({ children, style, stylesTheme = ButtonsTheme.bright, onClick }: Props) {
  return (
    <StyledButton stylestheme={stylesTheme} style={style} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
