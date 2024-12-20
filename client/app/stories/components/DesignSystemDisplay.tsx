import React from 'react'
import styled, { RuleSet } from 'styled-components'
import { COLORS } from '@/app/styles'

const Components = styled.div<ComponentStyleProps>`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.WHITE};
  border: 1px solid ${COLORS.GRAY_300};
  font-size: 14px !important;
  color: ${COLORS.GRAY_500};
  ${(props) => props.styles}
`

interface ComponentStyleProps {
  styles: RuleSet[]
}

interface Props extends ComponentStyleProps {
  children: React.ReactNode
}

export function DesignSystemDisplay({ children, styles }: Props) {
  return <Components styles={styles}>{children}</Components>
}
