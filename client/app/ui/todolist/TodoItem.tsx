import React, { memo } from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, COLORS } from '@/app/styles'
import { CheckCircle } from '@/app/ui'
import { CiEdit } from 'react-icons/ci'
import { Todo } from '@/app/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS, Transform } from '@dnd-kit/utilities'

const TodoWrapper = styled.div<TodolistWrapperStylesProps>`
  position: relative;
  min-height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: ${COLORS.WHITE};
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
  transform: ${({ stringTransform }) => CSS.Translate.toString(stringTransform)};
  transition: ${({ transition }) => transition};
  border: ${({ isDragging }) => (isDragging ? '1px solid red' : 'none')};
  border-bottom: ${({ isDragging }) => (isDragging ? '1px solid red' : `1px solid ${COLORS.GRAY_200}`)};
  z-index: ${({ isDragging }) => (isDragging ? '100' : `1`)};
  user-select: none;
  cursor: move;

  &:hover {
    i {
      display: block;
    }
  }
`

const TodoContents = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
`

const TodoIcons = styled.i`
  display: none;
  cursor: pointer;

  svg {
    font-size: 1.5rem;

    &:hover {
      background-color: ${COLORS.GRAY_200};
    }

    &:active {
      background-color: ${COLORS.GRAY_100};
    }

    ${BORDER_RADIUS_SIZES.medium}
  }
`

interface TodolistWrapperStylesProps {
  isDragging: boolean
  stringTransform: Transform | null
  transition?: string
}

interface Props {
  todo: Todo
  handleCompleteTodo: (todo: Todo) => void
  handleEditModalOpen: (todo: Todo) => void
}

function TodoItemComponent({ todo, handleCompleteTodo, handleEditModalOpen }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: todo.id })

  return (
    <TodoWrapper
      id={`${todo.id}-todo`}
      {...attributes}
      {...listeners}
      isDragging={isDragging}
      stringTransform={transform}
      transition={transition}
      ref={setNodeRef}
    >
      <TodoContents>
        <CheckCircle onAnimationEnd={() => handleCompleteTodo(todo)} />
        <div>{todo.title}</div>
      </TodoContents>
      <TodoIcons>
        <CiEdit onClick={() => handleEditModalOpen(todo)} />
      </TodoIcons>
    </TodoWrapper>
  )
}

export const TodoItem = memo(TodoItemComponent)
