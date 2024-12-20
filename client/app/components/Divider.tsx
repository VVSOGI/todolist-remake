import { COLORS } from '@/app/styles'
import React from 'react'
import styled from 'styled-components'

const DividerStyles = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0rem;
  border-top: 1px solid ${COLORS.GRAY_200};
`

export function Divider() {
  return <DividerStyles />
}
