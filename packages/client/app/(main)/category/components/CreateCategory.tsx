import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@/app/components'
import { BORDER_RADIUS_SIZES, COLORS, FONT_SIZES } from '@/app/styles'

const CreateCategoryWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`

const Create = styled.div`
  width: 100%;
  height: 2.5rem;
  min-height: 2.5rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${COLORS.GRAY_200};
  overflow: hidden;
  ${BORDER_RADIUS_SIZES.small}
`

const CreateError = styled.p`
  margin: 0.5625rem 0;
  font-size: ${FONT_SIZES.xs};
  color: ${COLORS.RED_600};
`

interface Props {
  createCategory: (title: string) => Promise<{
    response: unknown
    status: number
  }>
}

export function CreateCategory({ createCategory }: Props) {
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
      await createCategory(value)
      router.refresh()
    } catch (e: any) {
      setError(JSON.parse(e.message).response.message)
    }
  }

  return (
    <CreateCategoryWrapper>
      <Create>
        <Input handleSubmit={handleSubmit} changeValue={changeValue} value={categoryTitle} />
        <Button size="small" onClick={() => handleSubmit(categoryTitle)}>
          +
        </Button>
      </Create>
      <CreateError>{error}</CreateError>
    </CreateCategoryWrapper>
  )
}
