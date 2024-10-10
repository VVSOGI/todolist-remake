import React from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'
import { Button } from '@/app/ui'

const Input = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  border: 1px solid ${styles.borderColor.primary};
  border-radius: ${styles.borderRadius.small};
  overflow: hidden;
`

const InputContents = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
`

interface Props {
  handleSubmit: () => void
  onChange: (value: string) => void
}

export function TodolistInput({ handleSubmit, onChange }: Props) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Input>
      <InputContents onKeyDown={handleKeyPress} onChange={(e) => onChange(e.target.value)} placeholder="Make your todolist" />
      <Button onClick={handleSubmit}>Add list</Button>
    </Input>
  )
}
