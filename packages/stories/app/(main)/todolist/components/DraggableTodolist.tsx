import React from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { SortableOverlay } from "@/app/components";
import { TodoItem } from "@/app/(main)/todolist/components";
import { useDragDndKit } from "@/app/(main)/todolist/hooks";
import { Todo } from "@/app/types";

interface Props {
  list: Todo[];
  setList: (item: Todo[]) => void;
  handleCompleteTodo: (todo: Todo) => Promise<void>;
  handleEditModalOpen: (todo: Todo) => void;
}

export function DraggableTodolist({ list, setList, handleCompleteTodo, handleEditModalOpen }: Props) {
  const { activeItem, sensors, handleDragStart, handleDragEnd } = useDragDndKit<Todo>({ list, setList });
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={(props) =>
        handleDragEnd({
          ...props,
          saveCallback: (some) => {
            return new Promise((res) => res(some));
          },
        })
      }
    >
      <SortableContext items={list}>
        {list.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleCompleteTodo={handleCompleteTodo}
            handleEditModalOpen={handleEditModalOpen}
          />
        ))}
      </SortableContext>
      <SortableOverlay>
        {activeItem ? (
          <TodoItem
            key={activeItem.id}
            todo={activeItem}
            handleCompleteTodo={handleCompleteTodo}
            handleEditModalOpen={handleEditModalOpen}
          />
        ) : null}
      </SortableOverlay>
    </DndContext>
  );
}
