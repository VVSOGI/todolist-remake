import { BORDER_RADIUS_SIZES, BOX_SHADOWS, colors } from '@/app/styles'
import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  position: relative;
  width: 60.625rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  ${BOX_SHADOWS.primary};
  ${BORDER_RADIUS_SIZES.medium}
`

interface Props {
  children: React.ReactNode
}

export function StorageMain({ children }: Props) {
  return <Main>{children}</Main>
}
