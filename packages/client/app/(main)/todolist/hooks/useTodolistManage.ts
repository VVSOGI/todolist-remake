import { useState } from 'react'
import { APIResponse, CreateTodoDto, Todo, UpdateTodoDTO } from '@/app/types'

interface Props {
  categoryId: string
  todolist: Todo[]
  getTodolist: () => Promise<Todo[]>
  createTodolist: (createTodo: CreateTodoDto) => Promise<APIResponse>
  updateTodolist: (updated: UpdateTodoDTO) => Promise<APIResponse>
}

export function useTodolistManage({ categoryId, todolist, getTodolist, createTodolist, updateTodolist }: Props) {
  const [list, setList] = useState<Todo[]>(todolist)

  const setNewTodolist = async () => {
    const todos = await getTodolist()
    setList(todos)
  }

  const editTodo = async (updated: UpdateTodoDTO) => {
    await updateTodolist(updated)
    await setNewTodolist()
  }

  const completeTodo = async (todo: Todo) => {
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

  const createTodo = async (title: string) => {
    const newTodo: CreateTodoDto = {
      title,
      categoryId
    }
    await createTodolist(newTodo)
    await setNewTodolist()
  }

  return {
    list,
    setList,
    editTodo,
    createTodo,
    completeTodo
  }
}
