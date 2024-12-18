/** MouseEvent */

import { ColorsByGroup, ColorGroup } from '@/app/types'
import { COLORS } from '@/app/styles'

interface DragHorizonProps {
  event: MouseEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>
  leftCallback: () => void
  rightCallback: () => void
}

export function dragHorizon({ event, leftCallback, rightCallback }: DragHorizonProps) {
  const start = event.pageX

  const mouseMoveHandler = (e: MouseEvent) => {
    const end = e.pageX
    if (start - end > 5) {
      leftCallback()
      return
    }

    if (start - end < -5) {
      rightCallback()
      return
    }
  }

  const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler)
  }

  document.addEventListener('mousemove', mouseMoveHandler)
  document.addEventListener('mouseup', mouseUpHandler, { once: true })
}

/** Time */

export function changeToLocaleTime(time: Date, change: (data: Date) => string = changeToDate) {
  return change(time)
}

export function changeToDate(time: Date): string {
  return new Date(time.toString()).toLocaleString('ko').split('. ').slice(0, 3).join('. ')
}

export function changeToTime(time: Date): string {
  return new Date(time.toString()).toLocaleString('ko')
}

/** Colors */

export function getColorsByGroup<T extends ColorGroup>(color: T): ColorsByGroup<T> {
  return Object.entries(COLORS)
    .filter(([key]) => key.startsWith(`${color}_`))
    .reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value
      }),
      {} as ColorsByGroup<T>
    )
}
