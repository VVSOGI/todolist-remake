import React from 'react'
import styled from 'styled-components'
import { Circle } from '@/app/stories/components'
import { borderRadius } from '@/app/types'
import { COLORS } from '@/app/styles'

const Components = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
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
  color: ${COLORS.GRAY_600};
`

export function BorderRadiuses() {
  const sizes: { size: borderRadius; value: string; description: string }[] = [
    {
      size: 'small',
      value: '0.25rem',
      description: 'Small size border radius'
    },
    {
      size: 'medium',
      value: '0.5rem',
      description: 'Medium size border radius'
    },
    {
      size: 'large',
      value: '0.75rem',
      description: 'Large size border radius'
    }
  ]

  return (
    <Components>
      {sizes.map((size) => (
        <CirclesWrapper key={size.size}>
          <TitleWrapper>
            <Title>{size.size.toUpperCase()}</Title>
            <SubTitle>{size.description}</SubTitle>
          </TitleWrapper>
          <Circle size={size.size}>{size.value}</Circle>
        </CirclesWrapper>
      ))}
    </Components>
  )
}
