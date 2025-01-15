import React from 'react'
import styled from 'styled-components'
import { Categories, CategoryDeleteModal, CategoryUpdateModal } from '@/app/(main)/category/components'
import { useCategoryManage } from '@/app/(main)/category/hooks'
import { APIResponse, Category } from '@/app/types'

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
  deleteCategory: (categoryId: string) => Promise<APIResponse>
  updateCategory: (categoryId: string, body: { title: string }) => Promise<APIResponse>
}

export function CategoryDisplay({ categories, deleteCategory, updateCategory }: Props) {
  const {
    isModalOpen, //
    targetCategory,
    closeModal,
    openDeleteModal,
    openTargetModal,
    onClickCategory,
    onClickDeleteButton,
    onClickUpdateButton
  } = useCategoryManage({ deleteCategory, updateCategory })

  return (
    <CategoryDisplayContainer>
      {isModalOpen === 'update' && (
        <CategoryUpdateModal placeholder={targetCategory?.title} closeModal={closeModal} onClickUpdateButton={onClickUpdateButton} />
      )}
      {isModalOpen === 'delete' && ( //
        <CategoryDeleteModal closeModal={closeModal} onClickDeleteButton={onClickDeleteButton} />
      )}
      <Categories
        categories={categories}
        openTargetModal={openTargetModal}
        openDeleteModal={openDeleteModal}
        onClickCategory={onClickCategory}
      />
    </CategoryDisplayContainer>
  )
}
