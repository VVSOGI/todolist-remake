import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import { CATEGORY_MEDIA_QUERY, COLORS } from '@/app/styles'
import { mouseEvent, changeToLocaleTime } from '@/app/utils'
import { Category, buttonsTheme } from '@/app/types'
import { Button } from '@/app/ui'
import { useRouter } from 'next/navigation'
import { FaTrashAlt } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'
import { D2CodingBold } from '@/public/fonts'

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
  font-size: 1rem;
  font-weight: 500;
  color: ${COLORS.GRAY_500};
  ${CATEGORY_MEDIA_QUERY.title}
`

const CategoryTime = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
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
    font-size: 0.875rem;
  }
`

interface Props {
  category: Category
  openTargetModal: (category: Category) => void
  openDeleteModal: (category: Category) => void
}

function CategoryComponent({ category, openDeleteModal, openTargetModal }: Props) {
  const router = useRouter()
  const isDragging = useRef(false)

  const onClickCategory = (id: string) => {
    if (isDragging.current) {
      return
    }

    router.push(`/todolist/${id}`)
  }

  const onCategoryDrag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, categoryId: string) => {
    isDragging.current = false

    const HiddenButtonsWrapper = document.getElementById(`${categoryId}-hidden`)
    if (!HiddenButtonsWrapper) return

    mouseEvent.dragHorizon({
      event: e,
      leftCallback: () => {
        isDragging.current = true
        HiddenButtonsWrapper.style.minWidth = '6rem'
      },
      rightCallback: () => {
        isDragging.current = true
        HiddenButtonsWrapper.style.minWidth = '0rem'
      }
    })
  }

  return (
    <CategoryWrapper key={category.id}>
      <CategoryButton onMouseDown={(e) => onCategoryDrag(e, category.id)} onClick={() => onClickCategory(category.id)}>
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
