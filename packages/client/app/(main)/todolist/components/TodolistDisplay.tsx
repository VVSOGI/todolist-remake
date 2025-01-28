import React from 'react'
import styled from 'styled-components'
import { useTodolistManage, useTodolistModal } from '@/app/(main)/todolist/hooks'
import { APIResponse, CreateTodoDto, Todo, UpdateTodoDTO } from '@/app/types'
import { SCROLL_BAR_SETTINGS, TODOLIST_HEIGHTS, COLORS } from '@/app/styles'
import { CreateTodolist, TodoUpdateModal, DraggableTodolist } from '@todolist/ui-components/app'

const TodolistWrapper = styled.div`
  height: calc(100% - (${TODOLIST_HEIGHTS.header} + ${TODOLIST_HEIGHTS.createInput}));
  ${SCROLL_BAR_SETTINGS};
`

const EmptyTodolist = styled.div`
  position: relative;
  max-height: 2.8125rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem 1rem;
  color: ${COLORS.GRAY_300};
`
interface Props {
  categoryId: string
  todolist: Todo[]
  getTodolist: () => Promise<Todo[]>
  createTodolist: (createTodo: CreateTodoDto) => Promise<APIResponse>
  updateTodolist: (updated: UpdateTodoDTO) => Promise<APIResponse>
  saveTodolistOrder: (todolist: Todo[]) => Promise<APIResponse>
}

export function TodolistDisplay({ categoryId, todolist, getTodolist, createTodolist, updateTodolist, saveTodolistOrder }: Props) {
  const { list, setList, editTodo, createTodo, completeTodo, saveListOrder } = useTodolistManage({
    categoryId,
    todolist,
    getTodolist,
    createTodolist,
    updateTodolist,
    saveTodolistOrder
  })
  const { modal, targetTodo, updateTitle, setUpdateTitle, handleEditModalOpen, handleEditModalClose, handleEditModalAgree } =
    useTodolistModal({ editTodo })

  return (
    <TodolistWrapper>
      <audio id="audio" src="/poped.wav"></audio>
      {modal === 'edit' && (
        <TodoUpdateModal
          placeholder={targetTodo?.title}
          updateTitle={updateTitle}
          setUpdateTitle={setUpdateTitle}
          handleAgree={handleEditModalAgree}
          handleRefuse={handleEditModalClose}
        />
      )}
      {!list.length && <EmptyTodolist>Nothing in list 😅</EmptyTodolist>}
      <DraggableTodolist
        list={list}
        setList={setList}
        handleCompleteTodo={completeTodo}
        handleEditModalOpen={handleEditModalOpen}
        saveTodolistOrder={saveListOrder}
      />
      <CreateTodolist create={createTodo} />
    </TodolistWrapper>
  )
}
