import { Todo, TodolistsBySortedDates } from '@/app/types'

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

const otherDateMockTodoitems: Todo[] = [
  {
    id: '4',
    categoryId: '2',
    title: 'Test todo item title -1',
    checked: false,
    createdAt: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    order: 3
  },
  {
    id: '5',
    categoryId: '2',
    title: 'Test todo item title -2',
    checked: false,
    createdAt: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    updatedAt: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    order: 4
  }
]

export const mockStorageTodoLists: TodolistsBySortedDates = [
  {
    date: new Date().toLocaleString('ko').split('. ').slice(0, 3).join('. '),
    todolists: mockTodoItems
  },
  {
    date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toLocaleString('ko').split('. ').slice(0, 3).join('. '),
    todolists: otherDateMockTodoitems
  }
]
