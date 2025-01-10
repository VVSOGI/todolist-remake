import React from 'react'
import styled from 'styled-components'
import { AgreementModal } from '@/app/components'

const DeleteModalContents = styled.div`
  width: 100%;
  padding: 3rem 0;
`

interface Props {
  closeModal: () => void
  onClickDeleteButton: () => Promise<void>
}

export function CategoryDeleteModal({ closeModal, onClickDeleteButton }: Props) {
  return (
    <AgreementModal title="Delete" handleRefuse={closeModal} handleAgree={onClickDeleteButton}>
      <DeleteModalContents>Are you sure you want to delete this category?</DeleteModalContents>
    </AgreementModal>
  )
}
