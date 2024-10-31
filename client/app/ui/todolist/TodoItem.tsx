import React, { useEffect, useState } from 'react'
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
  background-color: ${colors.white};
  user-select: none;
`

const TodoContents = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const TodoIcons = styled.div`
  cursor: pointer;

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
  draggedItem: Todo | null
  handleCompleteTodo: (todo: Todo) => void
  handleEditModalOpen: (todo: Todo) => void
  handleDragStart: (e: React.DragEvent<HTMLElement>, todo: Todo) => void
  handleDragEnd: (e: React.DragEvent<HTMLElement>) => void
  handleDragOver: (e: React.DragEvent<HTMLElement>, todo: Todo) => void
}

export function TodoItem({
  todo,
  draggedItem,
  handleCompleteTodo,
  handleEditModalOpen,
  handleDragStart,
  handleDragEnd,
  handleDragOver
}: Props) {
  const [isHover, setIsHover] = useState(false)

  return (
    <TodoWrapper
      id={`${todo.id}-todo`}
      draggable
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onDragStart={(e) => handleDragStart(e, todo)}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => handleDragOver(e, todo)}
      style={{
        borderTop: draggedItem?.id === todo.id ? '1px solid red' : 'none',
        borderLeft: draggedItem?.id === todo.id ? '1px solid red' : 'none',
        borderRight: draggedItem?.id === todo.id ? '1px solid red' : 'none',
        borderBottom: draggedItem?.id === todo.id ? '1px solid red' : '1px solid #eee',
        cursor: 'move'
      }}
    >
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
