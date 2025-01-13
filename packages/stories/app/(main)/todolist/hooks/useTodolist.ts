import { useState } from "react";
import { Todo } from "@/app/types";

interface Props {
  categoryId: string;
  todolist: Todo[];
  getTodolist: () => Promise<Todo[]>;
}

export function useTodolist({ todolist, getTodolist }: Props) {
  const [list, setList] = useState<Todo[]>(todolist);

  const setNewTodolist = async () => {
    const todos = await getTodolist();
    setList(todos);
  };

  const handleEditTodo = async () => {
    await setNewTodolist();
  };

  const handleCompleteTodo = async () => {
    await setNewTodolist();

    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.play();
  };

  const handleCreateTodo = async () => {
    await setNewTodolist();
  };

  return {
    list,
    setList,
    handleCompleteTodo,
    handleCreateTodo,
    handleEditTodo,
  };
}
