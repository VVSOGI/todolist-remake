import React from 'react'
import { CreateTodolist, TodoUpdateModal, DraggableTodolist } from '@todolist/ui-components/app'
import { useTodolistManage, useTodolistModal } from '@/app/(main)/todolist/hooks'
import { APIResponse, CreateTodoDto, Todo, UpdateTodoDTO } from '@/app/types'
import { TODOLIST_HEIGHTS } from '@/app/styles'

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
    <div className={`h-[calc(100%-(${TODOLIST_HEIGHTS.header}+${TODOLIST_HEIGHTS.createInput}))] custom-scrollbar`}>
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
      {!list.length && (
        <div className="relative max-h-[2.8125rem] flex items-center gap-[0.875rem] py-[0.75rem] px-[1rem] text-gray-300">
          Nothing in list 😅
        </div>
      )}
      <DraggableTodolist
        list={list}
        setList={setList}
        handleCompleteTodo={completeTodo}
        handleEditModalOpen={handleEditModalOpen}
        saveTodolistOrder={saveListOrder}
      />
      <CreateTodolist create={createTodo} />
    </div>
  )
}
