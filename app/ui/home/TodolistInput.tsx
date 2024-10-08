import React from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'

const Input = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid ${styles.borderColor.primary};
  border-radius: ${styles.borderRadius.small};
  overflow: hidden;
`

const InputContents = styled.input`
  width: 100%;
  border: none;
  padding: 12px;
  outline: none;
`

const CreateButton = styled.button`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${styles.mainColor.secondary};
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${styles.buttons.hover};
  }

  &:active {
    background-color: ${styles.buttons.active};
  }
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
      <CreateButton onClick={handleSubmit}>+</CreateButton>
    </Input>
  )
}
