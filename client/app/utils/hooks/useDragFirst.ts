import React, { useState } from 'react'

export function useDragFirst<T>(list: T[], setList: (item: T[]) => void) {
  const [draggedItem, setDraggedItem] = useState<T | null>(null)

  const handleDragStart = (e: React.DragEvent<HTMLElement>, item: T) => {
    setDraggedItem(item)

    const dragImage = new Image()
    dragImage.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    e.dataTransfer.setDragImage(dragImage, 0, 0)
    e.currentTarget.style.opacity = '0.5'
  }

  const handleDragEnd = (e: React.DragEvent<HTMLElement>) => {
    setDraggedItem(null)
    e.currentTarget.style.opacity = '1'
  }

  const handleDragOver = (e: React.DragEvent<HTMLElement>, item: T) => {
    e.preventDefault()
    if (!draggedItem) return

    if (draggedItem === item) return

    const draggedItemIndex = list.findIndex((i) => (i as any).id === (draggedItem as any).id)
    const draggedOverItemIndex = list.findIndex((i) => (i as any).id === (item as any).id)

    if (draggedItemIndex === draggedOverItemIndex) return

    const newItems = [...list]
    const removedItem = newItems.splice(draggedItemIndex, 1)[0]
    newItems.splice(draggedOverItemIndex, 0, removedItem)

    setList(newItems)
  }

  return {
    draggedItem,
    handleDragStart,
    handleDragEnd,
    handleDragOver
  }
}
