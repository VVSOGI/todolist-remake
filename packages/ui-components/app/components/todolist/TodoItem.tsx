"use client";

import React, { memo } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CiEdit } from "react-icons/ci";
import { Todo } from "@/app/types";
import { CheckCircle } from "@/app/components";

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
        border-b ${isDragging ? "border-red-500" : "border-gray-200"} z-[${isDragging ? 100 : 1}] select-none cursor-move
        [&>i]:hover:block
      `}
      style={{
        transform: CSS.Translate.toString(transform),
        transition: transition,
        opacity: isDragging ? 0.5 : 1,
      }}
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
            hover:text-gray-400
            active:text-gray-300
          `}
          onClick={() => handleEditModalOpen(todo)}
        />
      </i>
    </div>
  );
}

export const TodoItem = memo(TodoItemComponent);
