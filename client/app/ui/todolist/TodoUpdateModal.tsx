import React, { useState } from 'react'
import styled from 'styled-components'
import { AgreementModal, Input } from '@/app/ui'
import { COLORS } from '@/app/styles'
import { UpdateTodoDTO } from '@/app/types'

const EditModalContents = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

interface Props {
  placeholder?: string
  makeUpdatedTodo: () => UpdateTodoDTO | undefined
  handleEditTodo: (updated: UpdateTodoDTO) => Promise<void>
  handleEditModalClose: () => void
}

export function TodoUpdateModal({ placeholder, makeUpdatedTodo, handleEditModalClose, handleEditTodo }: Props) {
  const [updateTitle, setUpdateTitle] = useState('')

  return (
    <AgreementModal
      title="Edit"
      handleAgree={() => {
        const updated = makeUpdatedTodo()
        if (updated) handleEditTodo(updated)
        handleEditModalClose()
      }}
      handleRefuse={handleEditModalClose}
    >
      <EditModalContents>
        <div>Change Todo Title</div>
        <Input
          style={{ width: '100%', border: `1px solid ${COLORS.gray_200}`, borderRadius: '0.25rem' }}
          value={updateTitle}
          changeValue={(value) => setUpdateTitle(value)}
          handleSubmit={() => {}}
          placeholder={placeholder}
        />
      </EditModalContents>
    </AgreementModal>
  )
}
