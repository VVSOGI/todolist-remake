import React, { memo, useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Button } from "..";
import { D2CodingBold } from "../../../public/fonts";
import { changeToLocaleTime, dragHorizon } from "../../utils";
import { Category, buttonsTheme } from "../../types";
import { CATEGORY_MEDIA_QUERY_STYLES } from "../../styles";

interface Props {
  category: Category;
  openTargetModal: (category: Category) => void;
  openDeleteModal: (category: Category) => void;
  onClickCategory: (id: string, isDragging: boolean) => void;
}

function CategoryComponent({ category, openDeleteModal, openTargetModal, onClickCategory }: Props) {
  const isDragging = useRef(false);

  const onCategoryDrag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, categoryId: string) => {
    isDragging.current = false;

    const hiddenButton = document.getElementById(`${categoryId}-hidden`);
    if (!hiddenButton) return;

    dragHorizon({
      event: e,
      leftCallback: () => {
        isDragging.current = true;
        hiddenButton.style.minWidth = "6rem";
      },
      rightCallback: () => {
        isDragging.current = true;
        hiddenButton.style.minWidth = "0rem";
      },
    });
  };

  return (
    <div className="w-full h-[3rem] flex justify-between border-b border-gray-200" key={category.id}>
      <button
        className={`
        w-full flex justify-center items-center overflow-hidden bg-[transparent] cursor-pointer
        hover:bg-gray-100 hover:first:first:text-black
        active:bg-gray-200
      `}
        onMouseDown={(e) => onCategoryDrag(e, category.id)}
        onClick={() => onClickCategory(category.id, isDragging.current)}
      >
        <div className="w-full h-full flex justify-between items-center pl-[0.5rem] pr-[1rem] select-none">
          <h2
            className={` 
              text-sm font-[500] text-gray-500
              ${CATEGORY_MEDIA_QUERY_STYLES.title}
              ${D2CodingBold.className}`}
          >
            {category.title}
          </h2>
          <div
            className={`
              flex gap-[0.5rem] text-xs text-gray-500
              last:text-red-600 last:font-[400]
              ${CATEGORY_MEDIA_QUERY_STYLES.time}
          `}
          >
            <p>최종 수정일</p>
            <span>{changeToLocaleTime(category.updatedAt)}</span>
          </div>
        </div>
      </button>
      <div
        className="w-0 min-w-0 h-full flex justify-center items-center transition-[0.2s] overflow-hidden cursor-pointer"
        id={`${category.id}-hidden`}
      >
        <Button
          style={{ fontSize: "0.875rem" }}
          size="small"
          theme={buttonsTheme.DARK}
          onClick={() => openTargetModal(category)}
        >
          <IoSettings />
        </Button>
        <Button style={{ fontSize: "0.875rem" }} size="small" onClick={() => openDeleteModal(category)}>
          <FaTrashAlt />
        </Button>
      </div>
    </div>
  );
}

export const CategoryItem = memo(CategoryComponent);
