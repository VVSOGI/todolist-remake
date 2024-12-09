import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, SECTION_MEDIA_QUERY, colors } from '@/app/styles'

const Main = styled.section`
  height: 30rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
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
