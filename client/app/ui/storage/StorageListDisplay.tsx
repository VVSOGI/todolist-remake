import React from 'react'
import styled from 'styled-components'
import { SCROLL_BAR_SETTINGS, COLORS } from '@/app/styles'
import { TodolistsBySortedDates } from '@/app/types'
import { D2CodingLight } from '@/public/fonts'
import { changeToLocaleTime } from '@/app/utils'

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${SCROLL_BAR_SETTINGS}
`

const Contents = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${COLORS.gray_200};
`

const Date = styled.div`
  margin-bottom: 1.125rem;
  font-size: 1.5rem;
`

const UnorderList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0rem 1.5rem;
`

const ListItemUpdatedAt = styled.div`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
  color: ${COLORS.gray_500};
`

const ListItemTitle = styled.div`
  font-size: 1.125rem;
  color: ${COLORS.black};
`

interface Props {
  list: TodolistsBySortedDates
}

export function StorageListDisplay({ list }: Props) {
  return (
    <ListWrapper>
      {list.map((item) => (
        <Contents key={item.date}>
          <Date className={D2CodingLight.className}>{item.date}</Date>
          <UnorderList>
            {item.todolists.map((todolist) => (
              <div key={todolist.id}>
                <ListItemUpdatedAt className={D2CodingLight.className}>{changeToLocaleTime(todolist.updatedAt)}</ListItemUpdatedAt>
                <ListItemTitle>{todolist.title}</ListItemTitle>
              </div>
            ))}
          </UnorderList>
        </Contents>
      ))}
    </ListWrapper>
  )
}
