import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '@/app/styles'
import { GiCheckMark } from 'react-icons/gi'

const Circle = styled.div`
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray_300};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    svg {
      color: ${COLORS.red_400};
    }
  }
`

const CheckIcon = styled(GiCheckMark)`
  color: ${COLORS.white};
  font-size: 0.625rem;
  transition: 0.2s;
`

interface Props {
  onAnimationEnd: () => void
}

export function CheckCircle({ onAnimationEnd }: Props) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleAnimate = () => {
    setIsAnimating(true)
  }

  const handleAnimateStop = () => {
    setIsAnimating(false)
  }

  return (
    <Circle
      className={isAnimating ? 'animate' : 'animate-stop'}
      onClick={() => {
        handleAnimate()
      }}
      onAnimationEnd={() => {
        handleAnimateStop()
        onAnimationEnd()
      }}
    >
      <CheckIcon />
    </Circle>
  )
}
