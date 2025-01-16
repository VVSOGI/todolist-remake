import { useState } from 'react'
import { Todo, UpdateTodoDTO } from '@/app/types'

export function useTodolistModal() {
  const [modal, setModal] = useState<'edit'>()
  const [targetTodo, setTargetTodo] = useState<Todo>()

  const makeUpdatedTodo = (title: string) => {
    if (!targetTodo) return

    const updated: UpdateTodoDTO = {
      id: targetTodo.id,
      title,
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
  }

  return {
    modal,
    targetTodo,
    makeUpdatedTodo,
    handleEditModalOpen,
    handleEditModalClose
  }
}
