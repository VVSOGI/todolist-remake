import React from 'react'
import styled, { RuleSet } from 'styled-components'
import { Example } from '@/app/stories/components'
import { borderRadius } from '@/app/types'
import { BORDER_RADIUS_SIZES, COLORS } from '@/app/styles'

const Components = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`

const CirclesWrapper = styled.div`
  display: flex;
`

const TitleWrapper = styled.div`
  font-size: 0.875rem !important;
  flex: 0 0 30%;
`

const Title = styled.div`
  font-weight: 700 !important;
`

const SubTitle = styled.div`
  color: ${COLORS.GRAY_500};
`

export function BorderRadiuses() {
  const sizes: { name: borderRadius; value: string; description: string; styles: RuleSet }[] = [
    {
      name: 'small',
      value: '0.25rem',
      description: 'Small size border radius',
      styles: BORDER_RADIUS_SIZES.small
    },
    {
      name: 'medium',
      value: '0.5rem',
      description: 'Medium size border radius',
      styles: BORDER_RADIUS_SIZES.medium
    },
    {
      name: 'large',
      value: '0.75rem',
      description: 'Large size border radius',
      styles: BORDER_RADIUS_SIZES.large
    }
  ]

  return (
    <Components>
      {sizes.map((size) => (
        <CirclesWrapper key={size.name}>
          <TitleWrapper>
            <Title>{size.name.toUpperCase()}</Title>
            <SubTitle>{size.description}</SubTitle>
          </TitleWrapper>
          <Example styles={size.styles}>{size.value}</Example>
        </CirclesWrapper>
      ))}
    </Components>
  )
}
