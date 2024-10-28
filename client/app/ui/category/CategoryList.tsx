import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { Category } from '@/app/types'
import { styles } from '@/app/styles'
import { deleteCategory } from '@/app/utils'
import { AgreementModal, Input } from '@/app/ui'
import CategoryItem from './CategoryItem'

const CategoryListContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`

const UpdateModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

interface Props {
  categories: Category[]
}

export function CategoryList({ categories }: Props) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<'delete' | 'update' | undefined>()
  const [targetCategory, setTargetCategory] = useState<Category | null>(null)
  const [updateTitle, setUpdateTitle] = useState('')

  const openDeleteModal = (category: Category) => {
    const component = document.getElementById(`${category.id}-hidden`)
    if (component) {
      component.style.minWidth = '0px'
      setIsModalOpen('delete')
      setTargetCategory(category)
    }
  }

  const openTargetModal = (category: Category) => {
    const component = document.getElementById(`${category.id}-hidden`)
    if (component) {
      component.style.minWidth = '0px'
      setIsModalOpen('update')
      setTargetCategory(category)
    }
  }

  const closeDeleteModal = () => {
    setIsModalOpen(undefined)
    setTargetCategory(null)
  }

  const onClickDeleteButton = async () => {
    if (!targetCategory) return
    await deleteCategory(targetCategory.id)
    closeDeleteModal()
    router.refresh()
  }

  return (
    <CategoryListContainer>
      {isModalOpen === 'update' && (
        <AgreementModal title="Update" handleRefuse={closeDeleteModal} handleAgree={onClickDeleteButton}>
          <UpdateModalContents>
            <div>Change Title this category</div>
            <Input
              style={{ width: '100%', border: `1px solid ${styles.borderColor.primary}`, borderRadius: '4px' }}
              value={updateTitle}
              changeValue={(value) => setUpdateTitle(value)}
              handleSubmit={() => {}}
              placeholder={targetCategory?.title}
            />
          </UpdateModalContents>
        </AgreementModal>
      )}
      {isModalOpen === 'delete' && (
        <AgreementModal title="Delete" handleRefuse={closeDeleteModal} handleAgree={onClickDeleteButton}>
          Are you sure you want to delete that category?
        </AgreementModal>
      )}
      {categories.map((category) => {
        return <CategoryItem category={category} openTargetModal={openTargetModal} openDeleteModal={openDeleteModal} />
      })}
    </CategoryListContainer>
  )
}
