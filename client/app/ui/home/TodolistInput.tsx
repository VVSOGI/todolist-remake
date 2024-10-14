import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { styles } from '@/app/styles'
import { Button } from '@/app/ui'
import { customFetch } from '@/app/utils/customFetch'

const Input = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
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

export function TodolistInput() {
  const [createValue, setCreateValue] = useState('')
  const router = useRouter()

  const handleSubmit = async () => {
    await customFetch('/api/category', {
      method: 'POST',
      body: JSON.stringify({
        title: createValue
      })
    })
    router.refresh()
  }

  const onChangeCreateValue = (value: string) => {
    setCreateValue(value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <Input>
      <InputContents onKeyDown={handleKeyPress} onChange={(e) => onChangeCreateValue(e.target.value)} placeholder="Make your todolist" />
      <Button onClick={handleSubmit}>+</Button>
    </Input>
  )
}
