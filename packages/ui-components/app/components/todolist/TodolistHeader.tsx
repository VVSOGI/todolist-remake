"use client";

import React from "react";
import Link from "next/link";
import { FaBox } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Title } from "..";
import { changeToLocaleTime, changeToTime } from "../../utils";
import { Category } from "../../types";
import { SECTION_LINK_STYLES } from "../../styles";

interface Props {
  category: Category;
}

export function TodolistHeader({ category }: Props) {
  return (
    <div className="h-todolist-headers flex justify-between items-center py-[0.75rem] px-[1rem] border-b border-gray-200 bg-white z-[100]">
      <div>
        <Title style={{ margin: 0 }}>{category.title.toUpperCase()}</Title>
        <div className="text-xs">{changeToLocaleTime(category.updatedAt, changeToTime)}</div>
      </div>
      <div className="flex items-center gap-[0.75rem]">
        <Link className={SECTION_LINK_STYLES} href={`/storage/${category.id}`}>
          <FaBox />
        </Link>
        <Link className={SECTION_LINK_STYLES} href={`/`}>
          <IoClose className="text-red-600" fontSize={`1.25rem`} />
        </Link>
      </div>
    </div>
  );
}
