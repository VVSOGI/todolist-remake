import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import { FaBox } from 'react-icons/fa'
import { Title } from '@/app/ui'
import { Category } from '@/app/types'
import { changeToLocaleTime } from '@/app/utils'
import { TODOLIST_HEIGHTS, colors } from '@/app/styles'

const Header = styled.div`
  height: ${TODOLIST_HEIGHTS.HEADER};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${colors.gray_200};
  background-color: ${colors.white};
  z-index: 100;
`

const Time = styled.div`
  font-size: 0.75rem;
`

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: ${colors.red_600};
    font-weight: 800;
    font-size: 1.125rem;
    cursor: pointer;

    &:hover {
      background-color: ${colors.gray_100};
      color: ${colors.red_400};
    }

    &:active {
      background-color: ${colors.white};
      color: ${colors.red_500};
    }

    svg {
      font-size: 0.875rem;
      color: ${colors.black};
    }
  }
`

interface Props {
  category: Category
}

export function TodolistHeader({ category }: Props) {
  const router = useRouter()

  const moveStorage = () => {
    router.push(`/storage/${category.id}`)
  }

  const moveBackPage = () => {
    router.push('/')
    router.refresh()
  }

  return (
    <Header>
      <div>
        <Title style={{ margin: 0, fontSize: '1.5rem' }}>{category.title.toUpperCase()}</Title>
        <Time>{changeToLocaleTime(category.updatedAt)}</Time>
      </div>
      <IconsWrapper>
        <button onClick={moveStorage}>
          <FaBox />
        </button>
        <button onClick={moveBackPage}>X</button>
      </IconsWrapper>
    </Header>
  )
}
