import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Todolist } from 'src/entities'
import { Repository } from 'typeorm'
import { createTodolist } from './types'

@Injectable()
export class TodolistRepository {
  constructor(
    @InjectRepository(Todolist)
    private todolistRepository: Repository<Todolist>
  ) {}

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

  async create(todolist: createTodolist) {
    const created = this.todolistRepository.create(todolist)
    return await this.todolistRepository.save(created)
  }

  async findByCategoryId(categoryId: string) {
    const [data, total] = await this.todolistRepository.findAndCount({ where: { categoryId }, order: { createdAt: 'DESC' } })
    return {
      data,
      total
    }
  }
}
