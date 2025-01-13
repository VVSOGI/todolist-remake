import React from "react";
import styled from "styled-components";
import { Categories, CategoryDeleteModal, CategoryUpdateModal } from "@/app/stories/components/category";
import { useCategoryModal } from "@/app/stories/components/category/hooks";
import { Category } from "@/app/types";

const CategoryDisplayContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 0.125rem;
    background: #ccc;
  }
`;

interface Props {
  categories: Category[];
}

export function CategoryDisplay({ categories }: Props) {
  const {
    isModalOpen, //
    targetCategory,
    closeModal,
    openDeleteModal,
    openTargetModal,
    onClickDeleteButton,
    onClickUpdateButton,
  } = useCategoryModal();

  return (
    <CategoryDisplayContainer>
      {isModalOpen === "update" && (
        <CategoryUpdateModal
          placeholder={targetCategory?.title}
          closeModal={closeModal}
          onClickUpdateButton={onClickUpdateButton}
        />
      )}
      {isModalOpen === "delete" && ( //
        <CategoryDeleteModal closeModal={closeModal} onClickDeleteButton={onClickDeleteButton} />
      )}
      <Categories categories={categories} openTargetModal={openTargetModal} openDeleteModal={openDeleteModal} />
    </CategoryDisplayContainer>
  );
}
