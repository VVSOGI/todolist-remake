import React from 'react'
import { Category } from '@/app/types'
import { colors, styles } from '@/app/styles'
import styled from 'styled-components'

const CategoryWrapper = styled.button`
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
`

const CategoryTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
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
  onClickCategory: (id: string) => void
}

export default function CategoryList({ categories, onClickCategory }: Props) {
  return categories.map((category) => {
    const time = new Date(category.updatedAt.toString()).toLocaleString('ko')
    return (
      <CategoryWrapper key={category.id} onClick={() => onClickCategory(category.id)}>
        <ContentsWrapper>
          <CategoryTitle>{category.title}</CategoryTitle>
          <CategoryTime>
            <p>최종 수정일</p>
            <span>{time}</span>
          </CategoryTime>
        </ContentsWrapper>
      </CategoryWrapper>
    )
  })
}
