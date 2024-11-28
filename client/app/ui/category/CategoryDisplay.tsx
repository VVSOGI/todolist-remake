import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { Category } from '@/app/types'
import { colors } from '@/app/styles'
import { deleteCategory, updateCategory } from '@/app/utils'
import { AgreementModal, Input, CategoryItem } from '@/app/ui'

const CategoryDisplayContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.125rem;
    background: #ccc;
  }
`

const UpdateModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  gap: 0.75rem;
`

const DeleteModalContents = styled.div`
  width: 100%;
  padding: 3rem 0;
`

interface Props {
  categories: Category[]
}

export function CategoryDisplay({ categories }: Props) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<'delete' | 'update' | undefined>()
  const [targetCategory, setTargetCategory] = useState<Category | null>(null)
  const [updateTitle, setUpdateTitle] = useState('')

  const openDeleteModal = (category: Category) => {
    const component = document.getElementById(`${category.id}-hidden`)
    if (component) {
      component.style.minWidth = '0rem'
      setIsModalOpen('delete')
      setTargetCategory(category)
    }
  }

  const openTargetModal = (category: Category) => {
    const component = document.getElementById(`${category.id}-hidden`)
    if (component) {
      component.style.minWidth = '0rem'
      setIsModalOpen('update')
      setTargetCategory(category)
    }
  }

  const closeModal = () => {
    setIsModalOpen(undefined)
    setTargetCategory(null)
  }

  const onClickDeleteButton = async () => {
    if (!targetCategory) return
    await deleteCategory(targetCategory.id)
    closeModal()
    router.refresh()
  }

  const onClickUpdateButton = async () => {
    if (!targetCategory) return
    await updateCategory(targetCategory.id, {
      title: updateTitle
    })
    closeModal()
    router.refresh()
  }

  return (
    <CategoryDisplayContainer>
      {isModalOpen === 'update' && (
        <AgreementModal title="Update" handleRefuse={closeModal} handleAgree={onClickUpdateButton}>
          <UpdateModalContents>
            <div>Change Title this category</div>
            <Input
              style={{ width: '100%', border: `1px solid ${colors.gray_200}`, borderRadius: '0.25rem' }}
              value={updateTitle}
              changeValue={(value) => setUpdateTitle(value)}
              handleSubmit={() => {}}
              placeholder={targetCategory?.title}
            />
          </UpdateModalContents>
        </AgreementModal>
      )}
      {isModalOpen === 'delete' && (
        <AgreementModal title="Delete" handleRefuse={closeModal} handleAgree={onClickDeleteButton}>
          <DeleteModalContents>Are you sure you want to delete that category?</DeleteModalContents>
        </AgreementModal>
      )}
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} openTargetModal={openTargetModal} openDeleteModal={openDeleteModal} />
      })}
    </CategoryDisplayContainer>
  )
}