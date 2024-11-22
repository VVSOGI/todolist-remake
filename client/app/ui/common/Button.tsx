import React from 'react'
import styled from 'styled-components'
import { ButtonSizes, ButtonDefault, ButtonStyleProps, ButtonsTheme, ButtonSize } from '@/app/styles/button'

const StyledButton = styled.button<ButtonStyleProps>`
  ${ButtonDefault};
  ${(props) => {
    return ButtonSizes[props.size]
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
