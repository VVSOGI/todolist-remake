import React from 'react'
import { DesignSystemComponent, boxShadow } from '@/app/types'
import { BORDER_RADIUS_SIZES, BOX_SHADOWS } from '@/app/styles'
import { DesignSystemPlate } from '@/app/stories/components'

export function BoxShadows() {
  const shadows: DesignSystemComponent<boxShadow>[] = [
    {
      name: 'primary',
      value: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)',
      description: 'Primary box shadow',
      styles: [BOX_SHADOWS.primary, BORDER_RADIUS_SIZES.small]
    },
    {
      name: 'secondary',
      value: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)',
      description: 'Secondary box shadow',
      styles: [BOX_SHADOWS.secondary, BORDER_RADIUS_SIZES.small]
    }
  ]

  return <DesignSystemPlate list={shadows} />
}
