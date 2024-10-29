import React, { useState } from 'react'
import styled from 'styled-components'
import { CreateTodoDto, Todo, UpdateTodoDTO } from '@/app/types'
import { createTodolist, updateTodolist } from '@/app/utils'
import { colors, styles } from '@/app/styles'
import { CreateTodolist, TodoItem } from '@/app/ui'

const TodolistWrapper = styled.div`
  height: calc(100% - (${styles.todolist.header.height} + ${styles.todolist.createInput.height}));
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
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

interface Props {
  categoryId: string
  todolist: Todo[]
  getTodolist: () => Promise<Todo[]>
}

export function Todolist({ categoryId, todolist, getTodolist }: Props) {
  const [list, setList] = useState(todolist)

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

  return (
    <TodolistWrapper>
      {list.map((todo) => {
        if (todo.checked) return
        return <TodoItem key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo} />
      })}
      {!list.length && <NothingInList>Nothing in list 😅</NothingInList>}
      <audio id="audio" src="/poped.wav"></audio>
      <CreateTodolist handleCreateTodo={handleCreateTodo} />
    </TodolistWrapper>
  )
}
