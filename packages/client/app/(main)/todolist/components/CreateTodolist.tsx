import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Input } from '@todolist/ui-components/app'
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
  create: (title: string) => Promise<void>
}

export function CreateTodolist({ create }: Props) {
  const [title, setTitle] = useState('')

  const handleCreate = useCallback(() => {
    create(title)
    setTitle('')
  }, [create, title])

  return (
    <CreateTodolistWrapper>
      <Input value={title} handleSubmit={handleCreate} changeValue={setTitle} />
      <Button size="medium" onClick={handleCreate}>
        POST
      </Button>
    </CreateTodolistWrapper>
  )
}
