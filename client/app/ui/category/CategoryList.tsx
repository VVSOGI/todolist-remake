import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import { Category } from '@/app/types'
import { colors, styles } from '@/app/styles'
import { D2CodingBold } from '@/app/fonts'
import { useRouter } from 'next/navigation'
import { changeToLocaleTime } from '@/app/utils/time'
import { fetchToWebServer, mouseEvent } from '@/app/utils'
import { AgreementModal } from '@/app/ui'

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
  padding: 0 8px;
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

const DeleteButton = styled.button`
  width: 0px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.red_600};
  font-size: 12px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${colors.red_200};
  }

  &:active {
    background-color: ${colors.red_600};
  }
`

interface Props {
  categories: Category[]
}

export function CategoryList({ categories }: Props) {
  const router = useRouter()
  const isDragging = useRef(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deleteCategory, setDeleteCategory] = useState<Category | null>(null)

  const openModal = (category: Category) => {
    setIsModalOpen(true)
    setDeleteCategory(category)
  }

  const closeModal = () => {
    setIsModalOpen(false)
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

    const deleteButton = document.getElementById(categoryId)
    if (!deleteButton) return

    mouseEvent.dragHorizon({
      event: e,
      leftCallback: () => {
        isDragging.current = true
        deleteButton.style.width = '50px'
      },
      rightCallback: () => {
        isDragging.current = true
        deleteButton.style.width = '0px'
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

    closeModal()

    router.refresh()
  }

  return (
    <CategoryListContainer>
      {isModalOpen && <AgreementModal handleRefuse={closeModal} handleAgree={onClickDeleteButton} />}
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
            <DeleteButton
              id={category.id}
              onClick={(e) => {
                e.currentTarget.style.width = '0px'
                openModal(category)
              }}
            >
              <FaTrashAlt />
            </DeleteButton>
          </CategoryWrapper>
        )
      })}
    </CategoryListContainer>
  )
}
