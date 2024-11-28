import React from 'react'
import styled from 'styled-components'
import { Category } from '@/app/types'
import { CategoryDeleteModal, CategoryItem, CategoryUpdateModal } from '@/app/ui'
import { useCategoryModal } from '@/app/utils'

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

interface Props {
  categories: Category[]
}

export function CategoryDisplay({ categories }: Props) {
  const {
    isModalOpen, //
    targetCategory,
    closeModal,
    openDeleteModal,
    openTargetModal,
    onClickDeleteButton,
    onClickUpdateButton
  } = useCategoryModal()

  return (
    <CategoryDisplayContainer>
      {isModalOpen === 'update' && (
        <CategoryUpdateModal placeholder={targetCategory?.title} closeModal={closeModal} onClickUpdateButton={onClickUpdateButton} />
      )}
      {isModalOpen === 'delete' && ( //
        <CategoryDeleteModal closeModal={closeModal} onClickDeleteButton={onClickDeleteButton} />
      )}
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} openTargetModal={openTargetModal} openDeleteModal={openDeleteModal} />
      })}
    </CategoryDisplayContainer>
  )
}
