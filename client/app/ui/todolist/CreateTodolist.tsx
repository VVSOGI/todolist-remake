import React, { useState } from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'
import { Input, LargeButton } from '@/app/ui'
import { CreateTodoDto } from '@/app/types'
import { fetchToWebServer } from '@/app/utils'

const CreateCategoryWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${styles.todolist.createInput.height};
  min-height: ${styles.todolist.createInput.height};
  display: flex;
  justify-content: space-between;
  border: 1px solid ${styles.borderColor.primary};
  border-bottom-right-radius: ${styles.borderRadius.medium};
  border-bottom-left-radius: ${styles.borderRadius.medium};
  overflow: hidden;
`

interface Props {
  categoryId: string
}

export function CreateTodolist({ categoryId }: Props) {
  const [categoryTitle, setCategoryTitle] = useState('')

  const changeValue = (value: string) => {
    setCategoryTitle(value)
  }

  const handleSubmit = async (title: string) => {
    const createTodo: CreateTodoDto = {
      title,
      description: 'not yet',
      categoryId
    }

    await fetchToWebServer(`/api/todolist`, {
      method: 'POST',
      body: JSON.stringify(createTodo)
    })
  }

  return (
    <CreateCategoryWrapper>
      <Input handleSubmit={handleSubmit} changeValue={changeValue} value={categoryTitle} />
      <LargeButton onClick={() => handleSubmit(categoryTitle)}>POST</LargeButton>
    </CreateCategoryWrapper>
  )
}
