import { useState } from 'react'
import { APIResponse, CreateTodoDto, Todo, UpdateTodoDTO } from '@/app/types'

interface Props {
  categoryId: string
  todolist: Todo[]
  getTodolist: () => Promise<Todo[]>
  createTodolist: (createTodo: CreateTodoDto) => Promise<APIResponse>
  updateTodolist: (updated: UpdateTodoDTO) => Promise<APIResponse>
}

export function useTodolist({ categoryId, todolist, getTodolist, createTodolist, updateTodolist }: Props) {
  const [list, setList] = useState<Todo[]>(todolist)

  const setNewTodolist = async () => {
    const todos = await getTodolist()
    setList(todos)
  }

  const handleEditTodo = async (updated: UpdateTodoDTO) => {
    await updateTodolist(updated)
    await setNewTodolist()
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

  return {
    list,
    setList,
    handleCompleteTodo,
    handleCreateTodo,
    handleEditTodo
  }
}
