import React from 'react'
import styled from 'styled-components'
import { Example } from '@/app/stories/components'
import { COLORS } from '@/app/styles'
import { DesignSystemComponent } from '@/app/types'

const Components = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`

const Component = styled.div`
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

interface Props<T extends string> {
  list: DesignSystemComponent<T>[]
}

export function DesignSystemPlate<T extends string>({ list }: Props<T>) {
  return (
    <Components>
      {list.map((item) => (
        <Component key={item.name}>
          <TitleWrapper>
            <Title>{item.name.toUpperCase()}</Title>
            <SubTitle>{item.description}</SubTitle>
          </TitleWrapper>
          <Example styles={item.styles}>{item.value}</Example>
        </Component>
      ))}
    </Components>
  )
}
