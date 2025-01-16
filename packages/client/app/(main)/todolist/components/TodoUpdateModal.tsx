import React from 'react'
import styled from 'styled-components'
import { AgreementModal, Input } from '@/app/components'
import { COLORS } from '@/app/styles'

const EditModalContents = styled.div`
  width: 100%;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

interface Props {
  placeholder?: string
  updateTitle: string
  handleAgree: () => void
  handleRefuse: () => void
  setUpdateTitle: (updated: string) => void
}

export function TodoUpdateModal({ placeholder, updateTitle, setUpdateTitle, handleAgree, handleRefuse }: Props) {
  return (
    <AgreementModal title="Edit" handleAgree={handleAgree} handleRefuse={handleRefuse}>
      <EditModalContents>
        <div>Change Todo Title</div>
        <Input
          style={{ width: '100%', border: `1px solid ${COLORS.GRAY_200}`, borderRadius: '0.25rem' }}
          value={updateTitle}
          changeValue={(value) => setUpdateTitle(value)}
          handleSubmit={() => {}}
          placeholder={placeholder}
        />
      </EditModalContents>
    </AgreementModal>
  )
}
