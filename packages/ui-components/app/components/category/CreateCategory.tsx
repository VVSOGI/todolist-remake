"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BORDER_RADIUS_SIZES, COLORS, FONT_SIZES } from "@/app/styles";

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
    <div>
      <div
        className={`flex w-full min-h-[2.5rem] h-[2.5rem] justify-between border border-[${COLORS.GRAY_200}] overflow-hidden rounded-[0.25rem]`}
      ></div>
      <div className={`my-[0.5625rem]`}>{error}</div>
    </div>
  );
}
