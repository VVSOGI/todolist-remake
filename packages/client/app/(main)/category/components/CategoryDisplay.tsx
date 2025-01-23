import React from 'react'
import { Categories, CategoryDeleteModal, CategoryUpdateModal } from '@todolist/ui-components/app'
import { useCategoryManage } from '@/app/(main)/category/hooks'
import { APIResponse, Category } from '@/app/types'

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
    <div className="overflow-y-scroll custom-scrollbar">
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
    </div>
  )
}
