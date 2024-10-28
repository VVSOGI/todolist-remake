import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { Category } from '@/app/types'
import { colors, styles } from '@/app/styles'
import { D2CodingBold } from '@/app/fonts'
import { useRouter } from 'next/navigation'
import { changeToLocaleTime } from '@/app/utils/time'
import { fetchToWebServer, mouseEvent } from '@/app/utils'
import { AgreementModal, Button, ButtonsTheme } from '@/app/ui'
import { IoSettings } from 'react-icons/io5'

const CategoryWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${styles.borderColor.primary};
`

const CategoryListContainer = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
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
  categories: Category[]
}

export function CategoryList({ categories }: Props) {
  const router = useRouter()
  const isDragging = useRef(false)
  const [isModalOpen, setIsModalOpen] = useState<'delete' | 'update' | undefined>()
  const [deleteCategory, setDeleteCategory] = useState<Category | null>(null)

  const openDeleteModal = (category: Category) => {
    const component = document.getElementById(`${category.id}-hidden`)
    if (component) {
      component.style.minWidth = '0px'
      setIsModalOpen('delete')
      setDeleteCategory(category)
    }
  }

  const closeDeleteModal = () => {
    setIsModalOpen(undefined)
    setDeleteCategory(null)
  }

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

  const onClickDeleteButton = async () => {
    if (!deleteCategory) return

    await fetchToWebServer(`/api/category/${deleteCategory.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    closeDeleteModal()

    router.refresh()
  }

  return (
    <CategoryListContainer>
      {isModalOpen && (
        <AgreementModal title="Delete" handleRefuse={closeDeleteModal} handleAgree={onClickDeleteButton}>
          Are you sure you want to delete that category?
        </AgreementModal>
      )}
      {categories.map((category) => {
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
              <Button stylesTheme={ButtonsTheme.dark} onClick={() => {}}>
                <IoSettings />
              </Button>
              <Button onClick={() => openDeleteModal(category)}>
                <FaTrashAlt />
              </Button>
            </HiddenButtonsWrapper>
          </CategoryWrapper>
        )
      })}
    </CategoryListContainer>
  )
}
