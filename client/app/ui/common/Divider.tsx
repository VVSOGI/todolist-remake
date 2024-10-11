import { styles } from '@/app/styles'
import React from 'react'
import styled from 'styled-components'

const DividerStyles = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0px;
  border-top: 1px solid ${styles.borderColor.primary};
`

export function Divider() {
  return <DividerStyles />
}
