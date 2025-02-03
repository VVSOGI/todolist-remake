import React from 'react'
import { TodolistHeader } from '@vvsogi/ui-components/app'

export default function loading() {
  return (
    <TodolistHeader
      category={{
        id: '',
        title: '...Loading',
        updatedAt: new Date('2000.01.01'),
        createdAt: new Date('2000.01.01')
      }}
    />
  )
}
