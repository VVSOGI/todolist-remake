import React from 'react'
import styled from 'styled-components'
import { SCROLL_BAR_SETTINGS } from '@/app/styles'
import { TodolistsBySortedDates } from '@/app/types'
import { CheckedTodosByDates } from '@/app/ui'

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${SCROLL_BAR_SETTINGS}
`

interface Props {
  list: TodolistsBySortedDates
}

export function StorageListDisplay({ list }: Props) {
  return (
    <ListWrapper>
      <CheckedTodosByDates list={list} />
    </ListWrapper>
  )
}
