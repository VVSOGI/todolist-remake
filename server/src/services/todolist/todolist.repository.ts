import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Todolist } from 'src/entities'
import { Repository } from 'typeorm'
import { GetTodolistDtoFilters, createTodolist } from './types'

@Injectable()
export class TodolistRepository {
  constructor(
    @InjectRepository(Todolist)
    private todolistRepository: Repository<Todolist>
  ) {}

  async save(todolist: Todolist) {
    return await this.todolistRepository.save(todolist)
  }

  async create(todolist: createTodolist) {
    const created = this.todolistRepository.create(todolist)
    return created
  }

  async findAll() {
    const [data, total] = await this.todolistRepository.findAndCount({
      order: {
        createdAt: 'desc'
      }
    })
    return {
      data,
      total
    }
  }

  async findById(id: string) {
    const todo = await this.todolistRepository.findOneBy({ id })
    return todo
  }

  async findByCategoryId(filters: GetTodolistDtoFilters) {
    const { categoryId, checked } = filters
    const [data, total] = await this.todolistRepository.findAndCount({ where: { categoryId, checked }, order: { createdAt: 'DESC' } })
    return {
      data,
      total
    }
  }
}
