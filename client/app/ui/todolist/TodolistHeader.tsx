import { colors, styles } from '@/app/styles'
import { Category } from '@/app/types'
import { changeToLocaleTime } from '@/app/utils/time'
import styled from 'styled-components'
import { Title } from '@/app/ui'
import { useRouter } from 'next/navigation'

const Header = styled.div`
  height: ${styles.todolist.header.height};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${styles.borderColor.primary};
`

const Time = styled.div`
  font-size: 12px;
`

const BeforeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${colors.red_600};
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray_100};
    color: ${colors.red_400};
  }

  &:active {
    background-color: ${colors.white};
    color: ${colors.red_500};
  }
`

interface Props {
  category: Category
}

export function TodolistHeader({ category }: Props) {
  const router = useRouter()

  const moveBackPage = () => {
    router.push('/')
    router.refresh()
  }

  return (
    <Header>
      <div>
        <Title style={{ margin: 0, fontSize: '24px' }}>{category.title.toUpperCase()}</Title>
        <Time>{changeToLocaleTime(category.updatedAt)}</Time>
      </div>
      <BeforeButton onClick={moveBackPage}>X</BeforeButton>
    </Header>
  )
}
