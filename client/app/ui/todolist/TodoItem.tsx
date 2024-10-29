import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, styles } from '@/app/styles'
import { CheckCircle } from '@/app/ui'
import { CiEdit } from 'react-icons/ci'
import { Todo } from '@/app/types'

const TodoWrapper = styled.div`
  position: relative;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${styles.borderColor.primary};
  cursor: pointer;
`

const TodoContents = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const TodoIcons = styled.div`
  svg {
    border-radius: ${styles.borderRadius.small};
    font-size: 24px;

    &:hover {
      background-color: ${colors.gray_200};
    }

    &:active {
      background-color: ${colors.gray_100};
    }
  }
`

interface Props {
  todo: Todo
  handleCompleteTodo: (todo: Todo) => void
  handleEditModalOpen: (todo: Todo) => void
}

export function TodoItem({ todo, handleCompleteTodo, handleEditModalOpen }: Props) {
  const [isHover, setIsHover] = useState(false)

  return (
    <TodoWrapper onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <TodoContents>
        <CheckCircle onAnimationEnd={() => handleCompleteTodo(todo)} />
        <div>{todo.title}</div>
      </TodoContents>
      {isHover && (
        <TodoIcons>
          <CiEdit onClick={() => handleEditModalOpen(todo)} />
        </TodoIcons>
      )}
    </TodoWrapper>
  )
}
