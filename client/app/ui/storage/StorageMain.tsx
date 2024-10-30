import { styles } from '@/app/styles'
import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  position: relative;
  width: 970px;
  height: 480px;
  display: flex;
  flex-direction: column;
  border-radius: ${styles.borderRadius.medium};
  background-color: ${styles.backgroundColor.default};
  box-shadow: ${styles.boxShadow.primary};
`

interface Props {
  children: React.ReactNode
}

export function StorageMain({ children }: Props) {
  return <Main>{children}</Main>
}
