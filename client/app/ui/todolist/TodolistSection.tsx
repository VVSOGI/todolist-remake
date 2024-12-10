import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, COLORS, CATEGORY_MEDIA_QUERY } from '@/app/styles'

const Section = styled.section`
  position: relative;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.WHITE};
  overflow-y: hidden;
  ${BORDER_RADIUS_SIZES.medium};
  ${BOX_SHADOWS.primary};
  ${CATEGORY_MEDIA_QUERY.section};
`

interface Props {
  children: React.ReactNode
}

export function TodolistSection({ children }: Props) {
  return <Section>{children}</Section>
}
