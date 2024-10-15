import { colors, styles } from '@/app/styles'
import { Category } from '@/app/types'
import { changeToLocaleTime } from '@/app/utils/time'
import styled from 'styled-components'
import { Title } from '..'
import { useRouter } from 'next/navigation'

const Header = styled.div`
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
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${colors.cloudBlue_500};
  color: ${colors.white};
  font-weight: 800;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.cloudBlue_400};
  }

  &:active {
    background-color: ${colors.cloudBlue_500};
  }
`

interface Props {
  category: Category
}

export function TodolistHeader({ category }: Props) {
  const router = useRouter()

  const moveBackPage = () => {
    router.push('/')
  }

  return (
    <Header>
      <div>
        <Title style={{ margin: 0 }}>{category.title}</Title>
        <Time>{changeToLocaleTime(category.updatedAt)}</Time>
      </div>
      <BeforeButton onClick={moveBackPage}>X</BeforeButton>
    </Header>
  )
}
