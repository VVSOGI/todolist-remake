import { useState } from 'react'
import { Todo, UpdateTodoDTO } from '@/app/types'

interface Props {
  editTodo: (update: UpdateTodoDTO) => void
}

export function useTodolistModal({ editTodo }: Props) {
  const [modal, setModal] = useState<'edit'>()
  const [targetTodo, setTargetTodo] = useState<Todo>()
  const [updateTitle, setUpdateTitle] = useState('')

  const makeUpdatedTodo = (title: string) => {
    if (!targetTodo) return

    const updated: UpdateTodoDTO = {
      id: targetTodo.id,
      title,
      checked: targetTodo.checked
    }

    return updated
  }

  const handleEditModalAgree = () => {
    const updated = makeUpdatedTodo(updateTitle)
    if (updated) editTodo(updated)
    handleEditModalClose()
  }

  const handleEditModalOpen = (todo: Todo) => {
    setTargetTodo(todo)
    setModal('edit')
  }

  const handleEditModalClose = () => {
    setUpdateTitle('')
    setModal(undefined)
    setTargetTodo(undefined)
  }

  return {
    modal,
    targetTodo,
    updateTitle,
    setUpdateTitle,
    handleEditModalOpen,
    handleEditModalClose,
    handleEditModalAgree
  }
}
