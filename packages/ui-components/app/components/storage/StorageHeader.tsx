import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { Title } from "../../";
import { changeToLocaleTime, changeToTime } from "../../utils";
import { Category } from "../../types";
import { SECTION_LINK_STYLES } from "../../styles";

interface Props {
  category: Category;
}

export function StorageHeader({ category }: Props) {
  return (
    <div className="flex justify-between items-center py-[0.75rem] px-[1rem] border-b border-gray-200">
      <div>
        <Title style={{ margin: 0, fontSize: "1.5rem" }}>{category.title.toUpperCase()}</Title>
        <div className="text-xs">{changeToLocaleTime(category.updatedAt, changeToTime)}</div>
      </div>
      <Link className={SECTION_LINK_STYLES} href={`/todolist/${category.id}`}>
        <IoClose />
      </Link>
    </div>
  );
}
