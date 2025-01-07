'use client'

import React from 'react'
import { CategoryItem } from './CategoryItem'
import { Category } from '@/app/types'

interface Props {
  categories: Category[]
  openTargetModal: (category: Category) => void
  openDeleteModal: (category: Category) => void
}

export function Categories({ categories, openTargetModal, openDeleteModal }: Props) {
  return (
    <>
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} openTargetModal={openTargetModal} openDeleteModal={openDeleteModal} />
      })}
    </>
  )
}
