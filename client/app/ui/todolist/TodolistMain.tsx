import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, colors } from '@/app/styles'

const Main = styled.main`
  position: relative;
  width: 970px;
  height: 480px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  overflow-y: hidden;
  ${BORDER_RADIUS_SIZES.medium};
  ${BOX_SHADOWS.primary};
`

interface Props {
  children: React.ReactNode
}

export function TodolistMain({ children }: Props) {
  return <Main>{children}</Main>
}
