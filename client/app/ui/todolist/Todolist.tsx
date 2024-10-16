import React from 'react'
import { Todo } from '@/app/types'
import styled from 'styled-components'
import { colors } from '@/app/styles'

const TodolistWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`

const Todo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
`

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
`

const Line = styled.div<{ checked: boolean }>`
  position: absolute;
  top: 50%;
  left: 32px;
  transform: translateY(-50%);
  width: ${({ checked }) => {
    return checked ? '95%' : '0%'
  }};
  height: 1px;
  background-color: ${colors.red_600};
  transition: 1s;
`

interface Props {
  todolist: Todo[]
}

export function Todolist({ todolist }: Props) {
  return (
    <TodolistWrapper>
      {todolist.map((todo) => {
        return (
          <Todo>
            <Circle />
            <div>{todo.title}</div>
            <Line checked={todo.checked} />
          </Todo>
        )
      })}
    </TodolistWrapper>
  )
}
