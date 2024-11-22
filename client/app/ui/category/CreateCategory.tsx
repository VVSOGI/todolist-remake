import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { fetchToWebServer } from '@/app/utils/customFetch'
import { Button, Input } from '@/app/ui'
import { colors, styles } from '@/app/styles'
import { ButtonSize } from '@/app/styles/button'

const CreateCategoryWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const Create = styled.div`
  width: 100%;
  height: 40px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  border-radius: ${styles.borderRadius.small};
  border: 1px solid ${styles.borderColor.primary};
  overflow: hidden;
`

const CreateError = styled.p`
  margin: 9px 0;
  font-size: 14px;
  color: ${colors.red_600};
`

export function CreateCategory() {
  const [categoryTitle, setCategoryTitle] = useState('')
  const [error, setError] = useState('')

  const router = useRouter()

  const changeValue = (value: string) => {
    setCategoryTitle(value)
  }

  const handleSubmit = async (value: string) => {
    try {
      setError('')
      setCategoryTitle('')

      await fetchToWebServer('/api/category', {
        method: 'POST',
        body: JSON.stringify({
          title: value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      router.refresh()
    } catch (e: any) {
      setError(JSON.parse(e.message).message)
    }
  }

  return (
    <CreateCategoryWrapper>
      <Create>
        <Input handleSubmit={handleSubmit} changeValue={changeValue} value={categoryTitle} />
        <Button size={ButtonSize.SMALL} onClick={() => handleSubmit(categoryTitle)}>
          +
        </Button>
      </Create>
      <CreateError>{error}</CreateError>
    </CreateCategoryWrapper>
  )
}
