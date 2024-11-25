import React from 'react'
import styled from 'styled-components'
import { BUTTON_SIZES, BUTTON_DEFAULT_STYLE, ButtonStyleProps, ButtonsTheme, ButtonSize } from '@/app/styles/button'

const StyledButton = styled.button<ButtonStyleProps>`
  ${BUTTON_DEFAULT_STYLE};
  ${(props) => {
    return BUTTON_SIZES[props.size]
  }};
`

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode
  size: ButtonSize
  style?: React.CSSProperties
  theme?: ButtonsTheme
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button({ children, size, style, theme = ButtonsTheme.BRIGHT, onClick, ...rest }: Props) {
  return (
    <StyledButton size={size} stylestheme={theme} style={style} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}
