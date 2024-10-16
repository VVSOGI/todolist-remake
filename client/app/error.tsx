'use client'

import styled from 'styled-components'
import { styles } from './styles'
import { Button, Container } from './ui'
import { useEffect, useState } from 'react'
import { InternalError } from './types'

const ErrorSection = styled.section`
  width: 720px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${styles.borderRadius.medium};
  background-color: ${styles.backgroundColor.default};
  box-shadow: ${styles.boxShadow.primary};
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
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styles.backgroundColor.primary
      }}
    >
      <ErrorSection>
        <ErrorMessage>{error && error.message}</ErrorMessage>
        <ErrorStatus>Error Status {error && error.statusCode}</ErrorStatus>
        <ButtonWrapper>
          <Button style={{ width: '144px', borderRadius: '8px' }} onClick={err.reset}>
            Try Reset
          </Button>
        </ButtonWrapper>
      </ErrorSection>
    </Container>
  )
}
