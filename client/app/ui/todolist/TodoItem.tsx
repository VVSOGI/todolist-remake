import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, styles } from '@/app/styles'
import { CheckCircle } from '@/app/ui'
import { CiEdit } from 'react-icons/ci'
import { Todo } from '@/app/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

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
  handleCompleteTodo: (todo: Todo) => void
  handleEditModalOpen: (todo: Todo) => void
}

export function TodoItem({ todo, handleCompleteTodo, handleEditModalOpen }: Props) {
  const [isHover, setIsHover] = useState(false)
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: todo.id })

  return (
    <TodoWrapper
      id={`${todo.id}-todo`}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? '100' : '1'
      }}
      ref={setNodeRef}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
