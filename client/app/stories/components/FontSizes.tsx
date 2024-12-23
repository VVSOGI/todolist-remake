import React from 'react'
import styled from 'styled-components'
import { COLORS, FONT_SIZES } from '@/app/styles'

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Component = styled.div`
  display: flex;
  align-items: center;
`

const TitleWrapper = styled.div`
  flex: 0 0 30%;
`

const Title = styled.div`
  font-weight: 600;
`

const SubTitle = styled.div`
  font-size: 0.875rem !important;
  color: ${COLORS.GRAY_500};
`

const Contents = styled.div``

export function FontSizes() {
  const sizes = Object.entries(FONT_SIZES)

  return (
    <ComponentWrapper>
      {sizes.map(([key, value]: [key: string, value: string]) => (
        <Component key={key}>
          <TitleWrapper>
            <Title>{key.toUpperCase()}</Title>
            <SubTitle>{value}</SubTitle>
          </TitleWrapper>
          <Contents style={{ fontSize: value }}>HELLO WORLD!</Contents>
        </Component>
      ))}
    </ComponentWrapper>
  )
}
