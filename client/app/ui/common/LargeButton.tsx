import React from 'react'
import { Button } from '.'

interface Props {
  style?: React.CSSProperties
  children: React.ReactNode
  onClick: () => void
}

export function LargeButton({ style, children, onClick }: Props) {
  return (
    <Button style={{ minWidth: '84px', ...style }} onClick={onClick}>
      {children}
    </Button>
  )
}
