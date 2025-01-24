import React, { useCallback, useState } from "react";
import { Button, Input } from "..";

interface Props {
  create: (title: string) => Promise<void>;
}

export function CreateTodolist({ create }: Props) {
  const [title, setTitle] = useState("");

  const handleCreate = useCallback(() => {
    create(title);
    setTitle("");
  }, [create, title]);

  return (
    <div
      className={`
        absolute bottom-0 w-full h-todolist-create min-h-todolist-create flex justify-between border-t border-gray-200 overflow-hidden z-[100]
        rounded-none
        tablet:rounded-bl-medium tablet:rounded-br-medium
      `}
    >
      <Input value={title} handleSubmit={handleCreate} changeValue={setTitle} />
      <Button size="medium" onClick={handleCreate}>
        POST
      </Button>
    </div>
  );
}
