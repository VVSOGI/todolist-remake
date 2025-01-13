import React from "react";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { SortableOverlay } from "@/app/stories/components";
import { TodoItem } from "@/app/stories/components/todolist";
import { useDragDndKit } from "@/app/stories/components/todolist/hooks";
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
