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

const InputIcon = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${styles.mainColor.secondary};
  cursor: pointer;
  &:hover {
    background-color: ${styles.buttons.hover};
  }

  &:active {
    background-color: ${styles.buttons.active};
  }
`

export function TodolistInput() {
  return (
    <Input>
      <InputContents placeholder="Make your todolist" />
      <InputIcon>+</InputIcon>
    </Input>
  )
}
