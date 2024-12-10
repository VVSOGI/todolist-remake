import React from 'react'
import styled from 'styled-components'
import { Todo } from '@/app/types'
import { SCROLL_BAR_SETTINGS, TODOLIST_HEIGHTS, COLORS } from '@/app/styles'
import { CreateTodolist, DraggableTodolist, TodoUpdateModal } from '@/app/ui'
import { useTodolist, useTodolistEditModal } from '@/app/utils'

const TodolistWrapper = styled.div`
  height: calc(100% - (${TODOLIST_HEIGHTS.HEADER} + ${TODOLIST_HEIGHTS.CREATE_INPUT}));
  ${SCROLL_BAR_SETTINGS};
`

const EmptyTodolist = styled.div`
  position: relative;
  max-height: 2.8125rem;
  display: flex;
  align-items: center;
  gap: 0.875rem;
  padding: 0.75rem 1rem;
  color: ${COLORS.gray_300};
`
interface Props {
  categoryId: string
  todolist: Todo[]
  getTodolist: () => Promise<Todo[]>
}

export function TodolistDisplay({ categoryId, todolist, getTodolist }: Props) {
  const { list, setList, handleCompleteTodo, handleCreateTodo, handleEditTodo } = useTodolist({ categoryId, todolist, getTodolist })
  const {
    modal,
    targetTodo,
    makeUpdatedTodo,
    handleEditModalOpen,
    handleEditModalClose //
  } = useTodolistEditModal()

  return (
    <TodolistWrapper>
      <audio id="audio" src="/poped.wav"></audio>
      {modal === 'edit' && (
        <TodoUpdateModal
          placeholder={targetTodo?.title}
          makeUpdatedTodo={makeUpdatedTodo}
          handleEditTodo={handleEditTodo}
          handleEditModalClose={handleEditModalClose}
        />
      )}
      {!list.length && <EmptyTodolist>Nothing in list 😅</EmptyTodolist>}
      <DraggableTodolist list={list} setList={setList} handleCompleteTodo={handleCompleteTodo} handleEditModalOpen={handleEditModalOpen} />
      <CreateTodolist handleCreateTodo={handleCreateTodo} />
    </TodolistWrapper>
  )
}
