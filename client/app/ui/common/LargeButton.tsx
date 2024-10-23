import React from 'react'
import { Button, ButtonsTheme } from '.'

interface Props {
  style?: React.CSSProperties
  children: React.ReactNode
  stylesTheme?: ButtonsTheme
  onClick: () => void
}

export function LargeButton({ style, stylesTheme, children, onClick }: Props) {
  return (
    <Button stylesTheme={stylesTheme} style={{ minWidth: '84px', ...style }} onClick={onClick}>
      {children}
    </Button>
  )
}
