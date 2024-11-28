import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { Category } from '@/app/types'
import { deleteCategory, updateCategory } from '@/app/utils'
import { CategoryDeleteModal, CategoryItem, CategoryUpdateModal } from '@/app/ui'

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
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<'delete' | 'update' | undefined>()
  const [targetCategory, setTargetCategory] = useState<Category | null>(null)

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

  const onClickUpdateButton = async (title: string) => {
    if (!targetCategory) return
    await updateCategory(targetCategory.id, { title })
    closeModal()
    router.refresh()
  }

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
