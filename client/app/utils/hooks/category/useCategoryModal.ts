import { Category } from '@/app/types'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { deleteCategory, updateCategory } from '@/app/utils'

export function useCategoryModal() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState<'delete' | 'update' | undefined>()
  const [targetCategory, setTargetCategory] = useState<Category | null>(null)

  const closeModal = useCallback(() => {
    setIsModalOpen(undefined)
    setTargetCategory(null)
  }, [])

  const openDeleteModal = useCallback((category: Category) => {
    const component = document.getElementById(`${category.id}-hidden`)
    if (component) {
      component.style.minWidth = '0rem'
      setIsModalOpen('delete')
      setTargetCategory(category)
    }
  }, [])

  const openTargetModal = useCallback((category: Category) => {
    const component = document.getElementById(`${category.id}-hidden`)
    if (component) {
      component.style.minWidth = '0rem'
      setIsModalOpen('update')
      setTargetCategory(category)
    }
  }, [])

  const onClickDeleteButton = useCallback(async () => {
    if (!targetCategory) return
    await deleteCategory(targetCategory.id)
    closeModal()
    router.refresh()
  }, [targetCategory, closeModal, router])

  const onClickUpdateButton = useCallback(
    async (title: string) => {
      if (!targetCategory) return
      await updateCategory(targetCategory.id, { title })
      closeModal()
      router.refresh()
    },
    [targetCategory, closeModal, router]
  )

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
