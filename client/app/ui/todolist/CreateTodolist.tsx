import React, { useState } from 'react'
import styled from 'styled-components'
import { styles } from '@/app/styles'
import { Input, LargeButton } from '@/app/ui'

const CreateCategoryWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${styles.borderColor.primary};
  border-bottom-right-radius: ${styles.borderRadius.medium};
  border-bottom-left-radius: ${styles.borderRadius.medium};
  overflow: hidden;
`

export function CreateTodolist() {
  const [categoryTitle, setCategoryTitle] = useState('')

  const changeValue = (value: string) => {
    setCategoryTitle(value)
  }

  const handleSubmit = async (value: string) => {
    console.log(value)
  }

  return (
    <CreateCategoryWrapper>
      <Input handleSubmit={handleSubmit} changeValue={changeValue} value={categoryTitle} />
      <LargeButton onClick={() => handleSubmit(categoryTitle)}>POST</LargeButton>
    </CreateCategoryWrapper>
  )
}
