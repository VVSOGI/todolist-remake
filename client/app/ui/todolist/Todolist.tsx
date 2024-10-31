import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { CreateTodoDto, Todo, UpdateTodoDTO } from '@/app/types'
import { createTodolist, updateTodolist } from '@/app/utils'
import { colors, styles } from '@/app/styles'
import { AgreementModal, CreateTodolist, Input, TodoItem } from '@/app/ui'

const TodolistWrapper = styled.div`
  height: calc(100% - (${styles.todolist.header.height} + ${styles.todolist.createInput.height}));
  ${styles.yScrollDefaultSetting}
`

const NothingInList = styled.div`
  position: relative;
  max-height: 45px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  color: ${colors.gray_300};
`

const EditModalContents = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

interface Props {
  categoryId: string
  todolist: Todo[]
  getTodolist: () => Promise<Todo[]>
}

export function Todolist({ categoryId, todolist, getTodolist }: Props) {
  const [list, setList] = useState<Todo[]>(todolist)
  const [modal, setModal] = useState<'edit' | undefined>()
  const [targetTodo, setTargetTodo] = useState<Todo>()
  const [updateTitle, setUpdateTitle] = useState('')

  const setNewTodolist = async () => {
    const todos = await getTodolist()
    setList(todos)
  }

  const handleCompleteTodo = async (todo: Todo) => {
    const updated: UpdateTodoDTO = {
      id: todo.id,
      title: todo.title,
      checked: !todo.checked
    }

    await updateTodolist(updated)
    await setNewTodolist()

    const audio = document.getElementById('audio') as HTMLAudioElement
    audio.play()
  }

  const handleCreateTodo = async (title: string) => {
    const createTodo: CreateTodoDto = {
      title,
      categoryId
    }

    await createTodolist(createTodo)
    await setNewTodolist()
  }

  const handleEditTodo = async () => {
    if (!targetTodo) return

    const updated: UpdateTodoDTO = {
      id: targetTodo.id,
      title: updateTitle,
      checked: targetTodo.checked
    }

    await updateTodolist(updated)
    await setNewTodolist()
    handleEditModalClose()
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

  const [draggedItem, setDraggedItem] = useState<Todo | null>(null)
  const [draggedOverItem, setDraggedOverItem] = useState<Todo | null>(null)

  const listRef = useRef(null)

  const handleDragStart = (e: React.DragEvent<HTMLElement>, todo: Todo) => {
    setDraggedItem(todo)

    const dragImage = new Image()
    dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    e.dataTransfer.setDragImage(dragImage, 0, 0)
    e.currentTarget.style.opacity = '0.5'
  }

  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    setDraggedItem(null)
    setDraggedOverItem(null)
    e.currentTarget.style.opacity = '1'
  }

  const handleDragOver = (e: React.DragEvent<HTMLElement>, todo: Todo) => {
    e.preventDefault()
    if (draggedItem === todo) return

    setDraggedOverItem(todo)

    const draggedItemIndex = list.findIndex((i) => i.id === draggedItem?.id)
    const draggedOverItemIndex = list.findIndex((i) => i.id === todo.id)

    if (draggedItemIndex === draggedOverItemIndex) return

    const newItems = [...list]
    const removedItem = newItems.splice(draggedItemIndex, 1)[0]
    newItems.splice(draggedOverItemIndex, 0, removedItem)

    setList(newItems)
  }

  return (
    <TodolistWrapper>
      {modal === 'edit' && (
        <AgreementModal title="Edit" handleAgree={handleEditTodo} handleRefuse={handleEditModalClose}>
          <EditModalContents>
            <div>Change Todo Title</div>
            <Input
              style={{ width: '100%', border: `1px solid ${styles.borderColor.primary}`, borderRadius: '4px' }}
              value={updateTitle}
              changeValue={(value) => setUpdateTitle(value)}
              handleSubmit={() => {}}
              placeholder={targetTodo?.title}
            />
          </EditModalContents>
        </AgreementModal>
      )}

      <div ref={listRef}>
        {list.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            draggedItem={draggedItem}
            handleCompleteTodo={handleCompleteTodo}
            handleEditModalOpen={handleEditModalOpen}
            handleDragStart={handleDragStart}
            handleDragEnd={handleDragEnd}
            handleDragOver={handleDragOver}
          />
        ))}
      </div>

      {!list.length && <NothingInList>Nothing in list 😅</NothingInList>}

      <audio id="audio" src="/poped.wav"></audio>
      <CreateTodolist handleCreateTodo={handleCreateTodo} />
    </TodolistWrapper>
  )
}
