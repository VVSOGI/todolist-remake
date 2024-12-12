'use client'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Container } from '@/app/ui'
import { InternalError, mediaQueryStandard } from '@/app/types'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS, COLORS, FONT_SIZES } from '@/app/styles'

const ErrorSection = styled.section`
  width: ${mediaQueryStandard.TABLET};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${COLORS.WHITE};
  ${BOX_SHADOWS.primary};
  ${BORDER_RADIUS_SIZES.medium};
`

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${FONT_SIZES.xl};
  font-weight: 700;
`

const ErrorStatus = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
`

const ButtonWrapper = styled.div`
  height: 2rem;
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
          <Button size="medium" style={{ width: '9rem', borderRadius: '0.5rem' }} onClick={err.reset}>
            Try Reset
          </Button>
        </ButtonWrapper>
      </ErrorSection>
    </Container>
  )
}
