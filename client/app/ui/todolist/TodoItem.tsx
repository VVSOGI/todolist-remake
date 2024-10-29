import React from 'react'
import styled from 'styled-components'
import { colors, styles } from '@/app/styles'
import { CheckCircle } from '@/app/ui'
import { CiEdit } from 'react-icons/ci'
import { Todo } from '@/app/types'

const TodoWrapper = styled.div`
  position: relative;
  max-height: 45px;
  display: flex;
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
}

export function TodoItem({ todo, handleCompleteTodo }: Props) {
  return (
    <TodoWrapper>
      <TodoContents>
        <CheckCircle onAnimationEnd={() => handleCompleteTodo(todo)} />
        <div>{todo.title}</div>
      </TodoContents>
      <TodoIcons>
        <CiEdit />
      </TodoIcons>
    </TodoWrapper>
  )
}
