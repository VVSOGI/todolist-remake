import React from 'react'
import { Button } from '.'
import { ButtonSize, ButtonsTheme } from '@/app/styles/button'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  style?: React.CSSProperties
  children: React.ReactNode
  stylesTheme?: ButtonsTheme
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function LargeButton({ style, stylesTheme, children, onClick, ...rest }: Props) {
  return (
    <Button size={ButtonSize.SMALL} theme={stylesTheme} style={{ minWidth: '84px', ...style }} onClick={onClick} {...rest}>
      {children}
    </Button>
  )
}
