import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, COLORS, COMMON_MEDIA_QUERY } from '@/app/styles'

const Section = styled.section`
  position: relative;
  width: 60.625rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.WHITE};
  ${BOX_SHADOWS.primary};
  ${BORDER_RADIUS_SIZES.medium}
  ${COMMON_MEDIA_QUERY.section};
`

interface Props {
  children: React.ReactNode
}

export function StorageSection({ children }: Props) {
  return <Section>{children}</Section>
}
