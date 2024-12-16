import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '@/app/components'
import { TODOLIST_HEIGHTS, COLORS } from '@/app/styles'

const CreateTodolistWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${TODOLIST_HEIGHTS.createInput};
  min-height: ${TODOLIST_HEIGHTS.createInput};
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${COLORS.GRAY_200};
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
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
      <Button size="medium" onClick={handleSubmit}>
        POST
      </Button>
    </CreateTodolistWrapper>
  )
}
