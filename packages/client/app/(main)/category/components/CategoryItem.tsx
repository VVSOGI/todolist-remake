import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { D2CodingBold } from '@/public/fonts'
import { Button } from '@todolist/ui-components/app'
import { changeToLocaleTime, dragHorizon } from '@/app/utils'
import { Category, buttonsTheme } from '@/app/types'
import { CATEGORY_MEDIA_QUERY, COLORS, FONT_SIZES } from '@/app/styles'

const CategoryWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.GRAY_200};
`

const CategoryButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.GRAY_100};

    h2 {
      color: ${COLORS.BLACK};
    }
  }

  &:active {
    background-color: ${COLORS.GRAY_200};
  }
`

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 1rem;
  user-select: none;
`

const CategoryTitle = styled.h2`
  font-size: ${FONT_SIZES.sm};
  font-weight: 500;
  color: ${COLORS.GRAY_500};
  ${CATEGORY_MEDIA_QUERY.title}
`

const CategoryTime = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: ${FONT_SIZES.xs};
  color: ${COLORS.GRAY_500};
  span {
    color: ${COLORS.RED_600};
    font-weight: 400;
  }

  ${CATEGORY_MEDIA_QUERY.time}
`

const HiddenButtonsWrapper = styled.div`
  width: 0rem;
  min-width: 0rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  overflow: hidden;
  cursor: pointer;

  button {
    font-size: ${FONT_SIZES.xs};
  }
`

interface Props {
  category: Category
  openTargetModal: (category: Category) => void
  openDeleteModal: (category: Category) => void
  onClickCategory: (id: string, isDragging: boolean) => void
}

function CategoryComponent({ category, openDeleteModal, openTargetModal, onClickCategory }: Props) {
  const isDragging = useRef(false)

  const onCategoryDrag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, categoryId: string) => {
    isDragging.current = false

    const hiddenButton = document.getElementById(`${categoryId}-hidden`)
    if (!hiddenButton) return

    dragHorizon({
      event: e,
      leftCallback: () => {
        isDragging.current = true
        hiddenButton.style.minWidth = '6rem'
      },
      rightCallback: () => {
        isDragging.current = true
        hiddenButton.style.minWidth = '0rem'
      }
    })
  }

  return (
    <CategoryWrapper key={category.id}>
      <CategoryButton onMouseDown={(e) => onCategoryDrag(e, category.id)} onClick={() => onClickCategory(category.id, isDragging.current)}>
        <ContentsWrapper>
          <CategoryTitle className={D2CodingBold.className}>{category.title}</CategoryTitle>
          <CategoryTime>
            <p>최종 수정일</p>
            <span>{changeToLocaleTime(category.updatedAt)}</span>
          </CategoryTime>
        </ContentsWrapper>
      </CategoryButton>
      <HiddenButtonsWrapper id={`${category.id}-hidden`}>
        <Button size="small" theme={buttonsTheme.DARK} onClick={() => openTargetModal(category)}>
          <IoSettings />
        </Button>
        <Button size="small" onClick={() => openDeleteModal(category)}>
          <FaTrashAlt />
        </Button>
      </HiddenButtonsWrapper>
    </CategoryWrapper>
  )
}

export const CategoryItem = memo(CategoryComponent)
