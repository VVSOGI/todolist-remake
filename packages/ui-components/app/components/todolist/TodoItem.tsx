"use client";

import React, { memo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CiEdit } from "react-icons/ci";
import { CheckCircle } from "..";
import { Todo } from "@/app/types";

interface Props {
  todo: Todo;
  handleCompleteTodo: (todo: Todo) => void;
  handleEditModalOpen: (todo: Todo) => void;
}

function TodoItemComponent({ todo, handleCompleteTodo, handleEditModalOpen }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: todo.id });

  return (
    <div
      id={`${todo.id}-todo`}
      {...attributes}
      {...listeners}
      className={`
        relative min-h-[3.375rem] flex items-center justify-between py-[0.75rem] px-[1rem] bg-white
        opacity-[${isDragging ? 0.5 : 1}] transform-[${CSS.Translate.toString(transform)}] transition-[${transition}]
        border-b border-${isDragging ? "red-500" : "gray-200"} z-[${isDragging ? 100 : 1}] select-none cursor-move
      `}
      aria-describedby={todo.id}
      ref={setNodeRef}
    >
      <div className="flex items-center gap-[0.875rem]">
        <CheckCircle onAnimationEnd={() => handleCompleteTodo(todo)} />
        <div>{todo.title}</div>
      </div>
      <i className="hidden cursor-pointer">
        <CiEdit
          className={`
            text-xl rounded-md
            hover:text-gray-200
            active:text-gray-100
          `}
          onClick={() => handleEditModalOpen(todo)}
        />
      </i>
    </div>
  );
}

export const TodoItem = memo(TodoItemComponent);
