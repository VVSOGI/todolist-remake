import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { Category } from '@/app/types'
import { colors, styles } from '@/app/styles'
import { D2CodingBold } from '@/app/fonts'
import { useRouter } from 'next/navigation'
import { changeToLocaleTime } from '@/app/utils/time'
import { FaTrashAlt } from 'react-icons/fa'
import { fetchToWebServer, mouseEvent } from '@/app/utils'
import { IoMdClose } from 'react-icons/io'

const EachCategory = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${styles.borderColor.primary};
`

const CategoryWrapper = styled.div`
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

const DeleteModalContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  user-select: none;
`

const Modal = styled.div`
  width: 800px;
  height: 300px;
  background-color: ${colors.white};
  border-radius: ${styles.borderRadius.medium};
`

const ModalHeader = styled.div`
  display: flex;
`

const ModalTitle = styled.span`
  font-size: 24px;
  font-weight: 400;
`

const ModalIcon = styled.div`
  width: 40px;
  height: 40px;
`

interface Props {
  categories: Category[]
}

export function CategoryList({ categories }: Props) {
  const router = useRouter()
  const isDragging = useRef(false)
  const [modal, setModal] = useState(false)

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

  const onClickDeleteButton = async (id: string) => {
    await fetchToWebServer(`/api/category/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    router.refresh()
  }

  return (
    <CategoryWrapper>
      {modal && (
        <DeleteModalContainer>
          <Modal>
            <ModalHeader>
              <ModalTitle>삭제 확인</ModalTitle>
              <ModalIcon>
                <IoMdClose />
              </ModalIcon>
            </ModalHeader>
            <div></div>
            <div></div>
          </Modal>
        </DeleteModalContainer>
      )}
      {categories.map((category) => {
        return (
          <EachCategory key={category.id}>
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
              onClick={() => {
                setModal(true)
                // onClickDeleteButton(category.id)
              }}
              id={category.id}
            >
              <FaTrashAlt />
            </DeleteButton>
          </EachCategory>
        )
      })}
    </CategoryWrapper>
  )
}
