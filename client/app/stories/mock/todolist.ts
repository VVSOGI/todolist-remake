import { Todo } from '@/app/types'

export const mockTodoItems: Todo[] = [
  {
    id: '1',
    categoryId: '2',
    title: 'Test todo item title 1',
    checked: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    order: 0
  },
  {
    id: '2',
    categoryId: '2',
    title: 'Test todo item title 2',
    checked: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    order: 1
  },
  {
    id: '3',
    categoryId: '2',
    title: 'Test todo item title 3',
    checked: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    order: 2
  }
]
