interface DragHorizonProps {
  event: MouseEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>
  leftCallback: () => void
  rightCallback: () => void
}

export namespace mouseEvent {
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
}
