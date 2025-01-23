"use client";

import React from "react";
import { CategoryItem } from ".";
import { Category } from "../../types";

interface Props {
  categories: Category[];
  openTargetModal: (category: Category) => void;
  openDeleteModal: (category: Category) => void;
  onClickCategory: (id: string, isDragging: boolean) => void;
}

export function Categories({ categories, openTargetModal, openDeleteModal, onClickCategory }: Props) {
  return (
    <>
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.id}
            category={category}
            openTargetModal={openTargetModal}
            openDeleteModal={openDeleteModal}
            onClickCategory={onClickCategory}
          />
        );
      })}
    </>
  );
}
