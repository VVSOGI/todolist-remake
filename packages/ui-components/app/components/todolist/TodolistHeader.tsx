"use client";

import React from "react";
import Link from "next/link";
import { FaBox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Title } from "..";
import { changeToLocaleTime, changeToTime } from "../../utils";
import { Category } from "../../types";

interface Props {
  category: Category;
}

export function TodolistHeader({ category }: Props) {
  return (
    <div className="h-todolist-headers flex justify-between items-center py-[0.75rem] px-[1rem] border-b border-gray-200 bg-white z-[100]">
      <div>
        <Title style={{ margin: 0, fontSize: "1.5rem" }}>{category.title.toUpperCase()}</Title>
        <div className="text-xs">{changeToLocaleTime(category.updatedAt, changeToTime)}</div>
      </div>
      <div className="flex items-center gap-[0.75rem]">
        <Link
          className={`
            w-[2.5rem] h-[2.5rem] flex justify-center items-center gap-[0.75rem] rounded-full cursor-pointer
            hover:bg-gray-100
            first:hover:text-red-600
          `}
          href={`/storage/${category.id}`}
        >
          <FaBox />
        </Link>
        <Link
          className={`
            w-[2.5rem] h-[2.5rem] flex justify-center items-center gap-[0.75rem] rounded-full cursor-pointer
            hover:bg-white
            first:hover:text-red-500
          `}
          href={`/`}
        >
          <IoClose className="text-red-600" fontSize={`1.25rem`} />
        </Link>
      </div>
    </div>
  );
}
