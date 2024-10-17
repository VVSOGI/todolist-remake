import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
`

interface Props {
  value: string
  placeholder?: string
  buttonContents?: string
  style?: React.CSSProperties
  handleSubmit: (value: string) => void
  changeValue: (value: string) => void
}

export function Input({ value, placeholder = 'Make your todolist', style, handleSubmit, changeValue }: Props) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(value)
    }
  }

  return (
    <StyledInput
      value={value}
      onKeyDown={handleKeyPress}
      onChange={(e) => changeValue(e.target.value)}
      placeholder={placeholder}
      style={style}
    />
  )
}
