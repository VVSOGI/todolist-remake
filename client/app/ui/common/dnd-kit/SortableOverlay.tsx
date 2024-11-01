import type { PropsWithChildren } from 'react'
import { DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import type { DropAnimation } from '@dnd-kit/core'
import { styles } from '@/app/styles'

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.1'
      }
    }
  })
}

export function SortableOverlay({ children }: PropsWithChildren) {
  return (
    <DragOverlay
      style={{
        height: 'fit-content',
        borderRadius: styles.borderRadius.medium,
        overflow: 'hidden',
        boxShadow: '0 5px 10px rgba(0,0,0,0.1)'
      }}
      dropAnimation={dropAnimationConfig}
    >
      {children}
    </DragOverlay>
  )
}
