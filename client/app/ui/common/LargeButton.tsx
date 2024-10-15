import React from 'react'
import { Button } from '.'

interface Props {
  children: React.ReactNode
  onClick: () => void
}

export function LargeButton({ children, onClick }: Props) {
  return (
    <Button style={{ minWidth: '84px' }} onClick={onClick}>
      {children}
    </Button>
  )
}
