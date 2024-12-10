import styled from 'styled-components'
import Link from 'next/link'
import { Title } from '@/app/ui'
import { Category } from '@/app/types'
import { changeToLocaleTime } from '@/app/utils'
import { TODOLIST_HEIGHTS, COLORS } from '@/app/styles'
import { IoClose } from 'react-icons/io5'

const Header = styled.div`
  height: ${TODOLIST_HEIGHTS.HEADER};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${COLORS.gray_200};
`

const Time = styled.div`
  font-size: 0.75rem;
`

const LinkWrapper = styled(Link)`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.gray_100};
  }

  &:active {
    background-color: ${COLORS.white};
    svg {
      color: ${COLORS.red_500};
    }
  }

  svg {
    font-size: 1.25rem;
    color: ${COLORS.red_600};
  }
`

interface Props {
  category: Category
}

export function StorageHeader({ category }: Props) {
  return (
    <Header>
      <div>
        <Title style={{ margin: 0, fontSize: '1.5rem' }}>{category.title.toUpperCase()}</Title>
        <Time>{changeToLocaleTime(category.updatedAt)}</Time>
      </div>
      <LinkWrapper href={`/todolist/${category.id}`}>
        <IoClose />
      </LinkWrapper>
    </Header>
  )
}
