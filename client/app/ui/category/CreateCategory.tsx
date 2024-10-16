import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { customFetch } from '@/app/utils/customFetch'
import { Button, Input } from '@/app/ui'
import { styles } from '@/app/styles'

const CreateCategoryWrapper = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  border-radius: ${styles.borderRadius.small};
  border: 1px solid ${styles.borderColor.primary};
  overflow: hidden;
`

export function CreateCategory() {
  const [categoryTitle, setCategoryTitle] = useState('')

  const router = useRouter()

  const changeValue = (value: string) => {
    setCategoryTitle(value)
  }

  const handleSubmit = async (value: string) => {
    await customFetch('/api/category', {
      method: 'POST',
      body: JSON.stringify({
        title: value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    router.refresh()
  }

  return (
    <CreateCategoryWrapper>
      <Input handleSubmit={handleSubmit} changeValue={changeValue} value={categoryTitle} />
      <Button onClick={() => handleSubmit(categoryTitle)}>+</Button>
    </CreateCategoryWrapper>
  )
}
