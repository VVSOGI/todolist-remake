'use client'

import { styles } from '@/app/styles'
import React from 'react'
import styled, { keyframes } from 'styled-components'

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`

const Detail = styled.div<{ width?: string; height?: string }>`
  display: inline-block;
  height: ${(props) => props.height || '24px'};
  width: ${(props) => props.width || '100%'};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #f7f7f7;
  background-image: linear-gradient(90deg, #f7f7f7, #fefefe, #f7f7f7);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: ${styles.borderRadius.small};
`

const StyledSkeleton = styled(Detail)`
  width: 100%;
  height: 100%;
  display: block;
`

export function Skeleton() {
  return <StyledSkeleton />
}
