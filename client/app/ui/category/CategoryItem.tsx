import React, { useRef } from 'react'
import styled from 'styled-components'
import { colors, styles } from '@/app/styles'
import { ButtonSize, ButtonsTheme } from '@/app/styles/button'
import { D2CodingBold } from '@/app/fonts'
import { mouseEvent, changeToLocaleTime } from '@/app/utils'
import { Button } from '@/app/ui'
import { useRouter } from 'next/navigation'
import { Category } from '@/app/types'
import { FaTrashAlt } from 'react-icons/fa'
import { IoSettings } from 'react-icons/io5'

const CategoryWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${styles.borderColor.primary};
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
    background-color: ${styles.buttons.hover};

    h2 {
      color: ${colors.black};
    }
  }

  &:active {
    background-color: ${styles.buttons.active};
  }
`

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  user-select: none;
`

const CategoryTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.gray_400};
`

const CategoryTime = styled.div`
  display: flex;
  gap: 8px;
  font-size: 14 px;
  color: ${colors.gray_400};
  span {
    color: ${styles.mainColor.primary};
    font-weight: 400;
  }
`

const HiddenButtonsWrapper = styled.div`
  width: 0px;
  min-width: 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  overflow: hidden;
  cursor: pointer;

  button {
    font-size: 14px;
  }
`

interface Props {
  category: Category
  openTargetModal: (category: Category) => void
  openDeleteModal: (category: Category) => void
}

export function CategoryItem({ category, openDeleteModal, openTargetModal }: Props) {
  const router = useRouter()
  const isDragging = useRef(false)

  const onClickCategory = (id: string) => {
    if (isDragging.current) {
      return
    }

    router.push(`/${id}`)
  }

  const onCategoryDrag = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, categoryId: string) => {
    isDragging.current = false

    const HiddenButtonsWrapper = document.getElementById(`${categoryId}-hidden`)
    if (!HiddenButtonsWrapper) return

    mouseEvent.dragHorizon({
      event: e,
      leftCallback: () => {
        isDragging.current = true
        HiddenButtonsWrapper.style.minWidth = '96px'
      },
      rightCallback: () => {
        isDragging.current = true
        HiddenButtonsWrapper.style.minWidth = '0px'
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
        <Button size={ButtonSize.SMALL} theme={ButtonsTheme.DARK} onClick={() => openTargetModal(category)}>
          <IoSettings />
        </Button>
        <Button size={ButtonSize.SMALL} onClick={() => openDeleteModal(category)}>
          <FaTrashAlt />
        </Button>
      </HiddenButtonsWrapper>
    </CategoryWrapper>
  )
}
