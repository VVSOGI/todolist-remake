import { useState } from 'react'
import { Todo, UpdateTodoDTO } from '@/app/types'

export function useTodolistEditModal() {
  const [modal, setModal] = useState<'edit'>()
  const [targetTodo, setTargetTodo] = useState<Todo>()
  const [updateTitle, setUpdateTitle] = useState('')

  const makeUpdatedTodo = () => {
    if (!targetTodo) return

    const updated: UpdateTodoDTO = {
      id: targetTodo.id,
      title: updateTitle,
      checked: targetTodo.checked
    }

    return updated
  }

  const handleEditModalOpen = (todo: Todo) => {
    setTargetTodo(todo)
    setModal('edit')
  }

  const handleEditModalClose = () => {
    setModal(undefined)
    setTargetTodo(undefined)
    setUpdateTitle('')
  }

  return {
    modal,
    targetTodo,
    updateTitle,
    setUpdateTitle,
    makeUpdatedTodo,
    handleEditModalOpen,
    handleEditModalClose
  }
}
