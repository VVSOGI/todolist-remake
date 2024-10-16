import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 } from 'uuid'
import { TodolistRepository } from './todolist.repository'
import { CreateTodolistDto, UpdateTodolistDto, createTodolist } from './types'
import { Todolist } from 'src/entities'

@Injectable()
export class TodolistService {
  constructor(private todolistRepository: TodolistRepository) {}

  private async findTodoById(id: string) {
    const target = await this.todolistRepository.findById(id)
    if (target) {
      return target
    }

    throw new NotFoundException(`The todolist you're looking for doesn't exist.`)
  }

  private async saveTodolist(todolist: Todolist) {
    return this.todolistRepository.save(todolist)
  }

  async createTodolist(createTodolist: CreateTodolistDto) {
    const todolist: createTodolist = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      checked: false,
      ...createTodolist
    }
    const created = await this.todolistRepository.create(todolist)
    return this.saveTodolist(created)
  }

  async updateTodolist(updateTodolist: UpdateTodolistDto) {
    const { id } = updateTodolist
    const target = await this.findTodoById(id)
    const updated = { ...target, ...updateTodolist }
    return this.saveTodolist(updated)
  }

  async getTodolists() {
    return this.todolistRepository.findAll()
  }

  async getTodolistsByCategoryId(categoryId: string) {
    return this.todolistRepository.findByCategoryId(categoryId)
  }
}
