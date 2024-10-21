import React, { useState } from 'react'
import styled from 'styled-components'
import { CreateTodoDto, Todo, UpdateTodoDTO } from '@/app/types'
import { fetchToWebServer } from '@/app/utils'
import { styles } from '@/app/styles'
import { CheckCircle, CreateTodolist } from '@/app/ui'

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

const Todo = styled.div`
  position: relative;
  max-height: 45px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid ${styles.borderColor.primary};
`

interface Props {
  categoryId: string
  todolist: Todo[]
  getTodolist: () => Promise<Todo[]>
}

export function Todolist({ categoryId, todolist, getTodolist }: Props) {
  const [list, setList] = useState(todolist)

  const completeTodo = async (todo: Todo) => {
    const updated: UpdateTodoDTO = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      checked: !todo.checked
    }

    await fetchToWebServer(`/api/todolist`, {
      method: 'PATCH',
      body: JSON.stringify(updated)
    })

    const checkList = list.map((item) => {
      if (item.id === todo.id) {
        item.checked = !item.checked
      }
      return item
    })

    setList(checkList)

    const audio = document.getElementById('a1') as HTMLAudioElement
    audio.play()
  }

  const handleCreateTodo = async (title: string) => {
    const createTodo: CreateTodoDto = {
      title,
      description: 'not yet',
      categoryId
    }

    await fetchToWebServer(`/api/todolist`, {
      method: 'POST',
      body: JSON.stringify(createTodo)
    })

    const newList = await getTodolist()
    setList(newList)
  }

  return (
    <TodolistWrapper>
      {list.map((todo) => {
        if (todo.checked) return
        return (
          <Todo key={todo.id}>
            <CheckCircle onAnimationEnd={() => completeTodo(todo)} />
            <div>{todo.title}</div>
          </Todo>
        )
      })}
      <audio id="a1" src="/poped.wav"></audio>
      <CreateTodolist handleCreateTodo={handleCreateTodo} />
    </TodolistWrapper>
  )
}
