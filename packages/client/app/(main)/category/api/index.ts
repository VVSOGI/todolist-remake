'use server'

import { fetchToBackend } from '@/app/utils/customFetch'
import { Category, GetResponseCategories, UUID } from '@/app/types'

export async function getCategoryList() {
  const response = await fetchToBackend<GetResponseCategories>('/category?deleted=false', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  return response
}

export async function getCategoryById(categoryId: UUID) {
  const response = await fetchToBackend<Category>(`/category/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-cache'
  })
  return response
}

export async function createCategory(body: { title: string }) {
  const response = await fetchToBackend(`/category`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return response
}

export async function deleteCategory(categoryId: string) {
  const response = await fetchToBackend(`/category/soft/${categoryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response
}

export async function updateCategory(categoryId: string, body: { title: string }) {
  const response = await fetchToBackend(`/category/${categoryId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  return response
}
