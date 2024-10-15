import React from 'react'
import styled from 'styled-components'
import { Category } from '@/app/types'
import { colors, styles } from '@/app/styles'
import { D2CodingBold } from '@/app/fonts'

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
  height: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: transparent;
  border-bottom: 1px solid ${styles.borderColor.primary};
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

interface Props {
  categories: Category[]
}

export function CategoryList({ categories }: Props) {
  const onClickCategory = (id: string) => {
    console.log(id)
  }

  return (
    <CategoryWrapper>
      {categories.map((category) => {
        const time = new Date(category.updatedAt.toString()).toLocaleString('ko')
        return (
          <CategoryButton key={category.id} onClick={() => onClickCategory(category.id)}>
            <ContentsWrapper>
              <CategoryTitle className={D2CodingBold.className}>{category.title}</CategoryTitle>
              <CategoryTime>
                <p>최종 수정일</p>
                <span>{time}</span>
              </CategoryTime>
            </ContentsWrapper>
          </CategoryButton>
        )
      })}
    </CategoryWrapper>
  )
}
