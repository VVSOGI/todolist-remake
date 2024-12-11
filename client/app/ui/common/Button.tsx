import React from 'react'
import styled from 'styled-components'
import { BUTTON_SIZES, BUTTON_DEFAULT_STYLE } from '@/app/styles/button'
import { ButtonStyleProps, buttonsTheme, buttonSize } from '@/app/types'

const StyledButton = styled.button<ButtonStyleProps>`
  ${BUTTON_DEFAULT_STYLE};
  ${(props) => {
    return BUTTON_SIZES[props.size]
  }};
`

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode
  size: buttonSize
  style?: React.CSSProperties
  theme?: buttonsTheme
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function Button({ children, size, style, theme = buttonsTheme.BRIGHT, onClick, ...rest }: Props) {
  return (
    <StyledButton size={size} stylestheme={theme} style={style} onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  )
}
