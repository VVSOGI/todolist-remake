import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '@/app/components'
import { TODOLIST_HEIGHTS, COLORS, TODOLIST_MEDIA_QUERY } from '@/app/styles'

const CreateTodolistWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${TODOLIST_HEIGHTS.createInput};
  min-height: ${TODOLIST_HEIGHTS.createInput};
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${COLORS.GRAY_200};
  overflow: hidden;
  z-index: 100;
  ${TODOLIST_MEDIA_QUERY.createButtonWrapper}
`

interface Props {
  createTodo: (title: string) => Promise<void>
}

export function CreateTodolist({ createTodo }: Props) {
  const [title, setTitle] = useState('')

  const changeValue = (value: string) => {
    setTitle(value)
  }

  const create = async () => {
    await createTodo(title)
    setTitle('')
  }

  return (
    <CreateTodolistWrapper>
      <Input value={title} handleSubmit={create} changeValue={changeValue} />
      <Button size="medium" onClick={create}>
        POST
      </Button>
    </CreateTodolistWrapper>
  )
}
