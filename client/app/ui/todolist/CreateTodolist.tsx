import React, { useState } from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'
import { Input, LargeButton } from '@/app/ui'

const CreateTodolistWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${styles.todolist.createInput.height};
  min-height: ${styles.todolist.createInput.height};
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${styles.borderColor.primary};
  border-bottom-right-radius: ${styles.borderRadius.medium};
  border-bottom-left-radius: ${styles.borderRadius.medium};
  overflow: hidden;
  z-index: 100;
`

interface Props {
  handleCreateTodo: (title: string) => Promise<void>
}

export function CreateTodolist({ handleCreateTodo }: Props) {
  const [title, setTitle] = useState('')

  const changeValue = (value: string) => {
    setTitle(value)
  }

  const handleSubmit = async () => {
    await handleCreateTodo(title)
    setTitle('')
  }

  return (
    <CreateTodolistWrapper>
      <Input value={title} handleSubmit={handleSubmit} changeValue={changeValue} />
      <LargeButton onClick={handleSubmit}>POST</LargeButton>
    </CreateTodolistWrapper>
  )
}
