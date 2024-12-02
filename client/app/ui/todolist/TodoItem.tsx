import React, { useState } from 'react'
import styled from 'styled-components'
import { BORDER_RADIUS_SIZES, colors } from '@/app/styles'
import { CheckCircle } from '@/app/ui'
import { CiEdit } from 'react-icons/ci'
import { Todo } from '@/app/types'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const TodoWrapper = styled.div`
  position: relative;
  min-height: 3.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: ${colors.white};
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
      background-color: ${colors.gray_200};
    }

    &:active {
      background-color: ${colors.gray_100};
    }

    ${BORDER_RADIUS_SIZES.medium}
  }
`

interface Props {
  todo: Todo
  handleCompleteTodo: (todo: Todo) => void
  handleEditModalOpen: (todo: Todo) => void
}

export function TodoItem({ todo, handleCompleteTodo, handleEditModalOpen }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: todo.id })

  return (
    <TodoWrapper
      id={`${todo.id}-todo`}
      {...attributes}
      {...listeners}
      style={{
        opacity: isDragging ? 0.5 : 1,
        transform: CSS.Translate.toString(transform),
        transition,
        border: isDragging ? '1px solid red' : 'none',
        borderBottom: isDragging ? '1px solid red' : `1px solid ${colors.gray_200}`,
        zIndex: isDragging ? '100' : '1'
      }}
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
