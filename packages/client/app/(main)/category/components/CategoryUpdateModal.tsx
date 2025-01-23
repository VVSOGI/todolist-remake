import React, { useState } from 'react'
import styled from 'styled-components'
import { AgreementModal, Input } from '@todolist/ui-components/app'
import { COLORS } from '@/app/styles'

const UpdateModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 0.75rem;
`

interface Props {
  placeholder?: string
  closeModal: () => void
  onClickUpdateButton: (title: string) => Promise<void>
}

export function CategoryUpdateModal({ placeholder, closeModal, onClickUpdateButton }: Props) {
  const [updateTitle, setUpdateTitle] = useState('')

  return (
    <AgreementModal title="Update" handleRefuse={closeModal} handleAgree={() => onClickUpdateButton(updateTitle)}>
      <UpdateModalContents>
        <div>Change Title this category</div>
        <Input
          style={{ width: '100%', border: `1px solid ${COLORS.GRAY_200}`, borderRadius: '0.25rem' }}
          value={updateTitle}
          changeValue={(value) => setUpdateTitle(value)}
          handleSubmit={() => {}}
          placeholder={placeholder}
        />
      </UpdateModalContents>
    </AgreementModal>
  )
}
