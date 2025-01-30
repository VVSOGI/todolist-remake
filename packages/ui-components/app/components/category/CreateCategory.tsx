"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "../../components";

interface Props {
  createCategory: (body: { title: string }) => Promise<{
    response: unknown;
    status: number;
  }>;
}

export function CreateCategory({ createCategory }: Props) {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const changeValue = (value: string) => {
    setCategoryTitle(value);
  };

  const handleSubmit = async (title: string) => {
    try {
      setError("");
      setCategoryTitle("");
      await createCategory({ title });
      router.refresh();
    } catch (e: any) {
      setError(JSON.parse(e.message).response.message);
    }
  };

  return (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full min-h-[2.5rem] h-[2.5rem] flex justify-between border border-gray-200 overflow-hidden rounded-small">
        <Input handleSubmit={handleSubmit} changeValue={changeValue} value={categoryTitle} />
        <Button size="small" onClick={() => handleSubmit(categoryTitle)}>
          +
        </Button>
      </div>
      <div className="my-[0.5625rem]">{error}</div>
    </div>
  );
}
