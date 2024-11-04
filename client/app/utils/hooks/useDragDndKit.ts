import { DragEndEvent, DragStartEvent, MouseSensor, TouchSensor, UniqueIdentifier, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { useMemo, useState } from 'react'

type ListItem<T> = {
  id: string
} & T

interface Props<T> {
  list: ListItem<T>[]
  setList: (item: ListItem<T>[]) => void
}

interface CustomDragEndEvent extends DragEndEvent {
  saveCallback: (list: any[]) => Promise<any>
}

export function useDragDndKit<T>({ list, setList }: Props<T>) {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)

  const activeItem = useMemo(() => list.find((item) => item.id === activeId), [activeId, list])

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5
      }
    })
  )

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id)
  }

  const handleDragEnd = async ({ over, saveCallback }: CustomDragEndEvent) => {
    if (over && activeId) {
      const activeIndex = list.findIndex((todo) => todo.id === activeId.toString())
      const overIndex = list.findIndex((todo) => todo.id === over.id.toString())
      const newList = arrayMove(list, activeIndex, overIndex)
      await saveCallback(newList)
      setList(newList)
    }
    setActiveId(null)
  }

  return {
    activeItem,
    sensors,
    handleDragStart,
    handleDragEnd
  }
}
