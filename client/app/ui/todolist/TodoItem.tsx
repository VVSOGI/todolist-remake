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
  background-color: ${colors.white};
  cursor: pointer;
  user-select: none;
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
    <TodoWrapper
      id={`${todo.id}-todo`}
      onMouseDown={(event) => {
        const { top, left } = event.currentTarget.getBoundingClientRect()
        const target = document.getElementById(`${todo.id}-todo`)
        if (!target) return
        target.style.zIndex = '10'

        const mouseMoveHandler = (e: MouseEvent) => {
          const moveY = e.pageY - event.pageY
          target.style.top = `${moveY}px`
        }

        const mouseUpHandler = () => {
          target.style.top = `0px`
          target.style.zIndex = '0'
          document.removeEventListener('mousemove', mouseMoveHandler)
        }

        document.addEventListener('mousemove', mouseMoveHandler)
        document.addEventListener('mouseup', () => mouseUpHandler(), { once: true })
      }}
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
