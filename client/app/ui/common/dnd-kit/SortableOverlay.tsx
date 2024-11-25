import styled from 'styled-components'
import { DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import { BORDER_RADIUS_SIZES } from '@/app/styles'

import type { PropsWithChildren } from 'react'
import type { DropAnimation } from '@dnd-kit/core'

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.1'
      }
    }
  })
}

const DragOverlayContainer = styled(DragOverlay)`
  height: fit-content;
  overflow: hidden;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  ${BORDER_RADIUS_SIZES.small};
`

export function SortableOverlay({ children }: PropsWithChildren) {
  return <DragOverlayContainer dropAnimation={dropAnimationConfig}>{children}</DragOverlayContainer>
}
