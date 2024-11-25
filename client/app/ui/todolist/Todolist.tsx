import React from 'react'
import styled from 'styled-components'
import { DndContext } from '@dnd-kit/core'
import { SortableContext } from '@dnd-kit/sortable'
import { Todo } from '@/app/types'
import { colors, styles } from '@/app/styles'
import { AgreementModal, CreateTodolist, Input, SortableOverlay, TodoItem } from '@/app/ui'
import { saveTodolistOrder, useDragDndKit, useTodolist, useTodolistEditModal } from '@/app/utils'

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
  const { list, setList, handleCompleteTodo, handleCreateTodo, handleEditTodo } = useTodolist({ categoryId, todolist, getTodolist })
  const { activeItem, sensors, handleDragStart, handleDragEnd } = useDragDndKit<Todo>({ list, setList })
  const {
    modal,
    targetTodo,
    updateTitle,
    setUpdateTitle,
    makeUpdatedTodo,
    handleEditModalOpen,
    handleEditModalClose //
  } = useTodolistEditModal()

  return (
    <TodolistWrapper>
      {modal === 'edit' && (
        <AgreementModal
          title="Edit"
          handleAgree={() => {
            const updated = makeUpdatedTodo()
            if (updated) handleEditTodo(updated)
            handleEditModalClose()
          }}
          handleRefuse={handleEditModalClose}
        >
          <EditModalContents>
            <div>Change Todo Title</div>
            <Input
              style={{ width: '100%', border: `1px solid ${colors.gray_200}`, borderRadius: '4px' }}
              value={updateTitle}
              changeValue={(value) => setUpdateTitle(value)}
              handleSubmit={() => {}}
              placeholder={targetTodo?.title}
            />
          </EditModalContents>
        </AgreementModal>
      )}

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={(props) => handleDragEnd({ ...props, saveCallback: saveTodolistOrder })}
      >
        <SortableContext items={list}>
          {list.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo} handleEditModalOpen={handleEditModalOpen} />
          ))}
        </SortableContext>
        <SortableOverlay>
          {activeItem ? (
            <TodoItem
              key={activeItem.id}
              todo={activeItem}
              handleCompleteTodo={handleCompleteTodo}
              handleEditModalOpen={handleEditModalOpen}
            />
          ) : null}
        </SortableOverlay>
      </DndContext>

      {!list.length && <NothingInList>Nothing in list 😅</NothingInList>}

      <audio id="audio" src="/poped.wav"></audio>
      <CreateTodolist handleCreateTodo={handleCreateTodo} />
    </TodolistWrapper>
  )
}
