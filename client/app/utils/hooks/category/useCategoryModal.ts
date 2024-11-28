import { Category } from '@/app/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { deleteCategory, updateCategory } from '@/app/utils'

export function useCategoryModal() {
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

  return {
    isModalOpen,
    targetCategory,
    closeModal,
    openDeleteModal,
    openTargetModal,
    onClickDeleteButton,
    onClickUpdateButton
  }
}
