import React from 'react'
import { DesignSystemComponent, borderRadius } from '@/app/types'
import { DesignSystemGuideRow } from '@/app/stories/components'
import { BORDER_RADIUS_SIZES } from '@/app/styles'

export function BorderRadiuses() {
  const sizes: DesignSystemComponent<borderRadius>[] = [
    {
      name: 'small',
      value: '0.25rem',
      description: 'Small size border radius',
      styles: [BORDER_RADIUS_SIZES.small]
    },
    {
      name: 'medium',
      value: '0.5rem',
      description: 'Medium size border radius',
      styles: [BORDER_RADIUS_SIZES.medium]
    },
    {
      name: 'large',
      value: '0.75rem',
      description: 'Large size border radius',
      styles: [BORDER_RADIUS_SIZES.large]
    }
  ]

  return <DesignSystemGuideRow list={sizes} />
}
