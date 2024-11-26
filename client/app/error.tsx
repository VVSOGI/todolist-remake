'use client'

import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, colors } from './styles'
import { Button, Container } from './ui'
import { useEffect, useState } from 'react'
import { InternalError, ButtonSize } from './types'

const ErrorSection = styled.section`
  width: 720px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  ${BOX_SHADOWS.primary};
  ${BORDER_RADIUS_SIZES.medium};
`

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
`

const ErrorStatus = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`

const ButtonWrapper = styled.div`
  height: 32px;
  display: flex;
  justify-content: center;
`

export default function error(err: any) {
  const [error, setError] = useState<InternalError>()

  useEffect(() => {
    setError(JSON.parse(err.error.message))
  }, [])

  return (
    <Container>
      <ErrorSection>
        <ErrorMessage>{error && error.message}</ErrorMessage>
        <ErrorStatus>Error Status {error && error.status}</ErrorStatus>
        <ButtonWrapper>
          <Button size={ButtonSize.MEDIUM} style={{ width: '9rem', borderRadius: '0.5rem' }} onClick={err.reset}>
            Try Reset
          </Button>
        </ButtonWrapper>
      </ErrorSection>
    </Container>
  )
}
