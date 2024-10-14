import { Injectable } from '@nestjs/common'
import { TodolistRepository } from './todolist.repository'
import { CreateTodolistDto, createTodolist } from './types'
import { v4 } from 'uuid'

@Injectable()
export class TodolistService {
  constructor(private todolistRepository: TodolistRepository) {}

  async createTodolist(createTodolist: CreateTodolistDto) {
    const todolist: createTodolist = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createTodolist
    }
    return this.todolistRepository.create(todolist)
  }

  async getTodolists() {
    return this.todolistRepository.findAll()
  }
}
