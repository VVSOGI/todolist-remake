import React from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'
import { SectionMediaQuery } from '@/app/styles/sections'

const Main = styled.section`
  ${SectionMediaQuery}
  height: 480px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: ${styles.borderRadius.medium};
  box-shadow: ${styles.boxShadow.primary};
  background-color: ${styles.backgroundColor.default};
`

interface Props {
  children: React.ReactNode
}

export function CategorySection({ children }: Props) {
  return <Main>{children}</Main>
}
