import React from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, SECTION_MEDIA_QUERY, colors } from '@/app/styles'

const Section = styled.section`
  position: relative;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  overflow-y: hidden;
  ${BORDER_RADIUS_SIZES.medium};
  ${BOX_SHADOWS.primary};
  ${SECTION_MEDIA_QUERY};
`

interface Props {
  children: React.ReactNode
}

export function TodolistSection({ children }: Props) {
  return <Section>{children}</Section>
}
