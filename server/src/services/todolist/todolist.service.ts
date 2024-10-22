import { Injectable, NotFoundException } from '@nestjs/common'
import { v4 } from 'uuid'
import { TodolistRepository } from './todolist.repository'
import { CreateTodolistDto, GetTodolistDtoFilters, UpdateTodolistDto, createTodolist } from './types'
import { Todolist } from 'src/entities'
import { CategoryService } from '../category'

@Injectable()
export class TodolistService {
  constructor(
    private todolistRepository: TodolistRepository,
    private categoryService: CategoryService
  ) {}

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
    const target = await this.getTodolistById(id)
    const updated: Todolist = { ...target, ...updateTodolist, updatedAt: new Date() }
    this.categoryService.updateDate(target.categoryId)
    return this.saveTodolist(updated)
  }

  async getTodolists() {
    return this.todolistRepository.findAll()
  }

  async getTodolistById(id: string) {
    const target = await this.todolistRepository.findById(id)

    if (target) {
      return target
    }

    throw new NotFoundException(`The todolist you're looking for doesn't exist.`)
  }

  async getTodolistsByCategoryId(filters: GetTodolistDtoFilters) {
    const todolist = await this.todolistRepository.findByCategoryId(filters)
    return todolist
  }
}
