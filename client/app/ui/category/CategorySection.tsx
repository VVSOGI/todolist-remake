import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, colors } from '@/app/styles'
import { SECTION_MEDIA_QUERY } from '@/app/styles/sections'

const Main = styled.section`
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: ${colors.white};
  ${BOX_SHADOWS.primary};
  ${BORDER_RADIUS_SIZES.medium};
  ${SECTION_MEDIA_QUERY};
`

interface Props {
  children: React.ReactNode
}

export function CategorySection({ children }: Props) {
  return <Main>{children}</Main>
}
