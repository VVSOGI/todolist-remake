import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Todolist } from 'src/entities'
import { Repository } from 'typeorm'

@Injectable()
export class TodolistRepository {
  constructor(
    @InjectRepository(Todolist)
    private categoryRepository: Repository<Todolist>
  ) {}

  async findAll() {
    const [data, total] = await this.categoryRepository.findAndCount({
      order: {
        createdAt: 'desc'
      }
    })
    return {
      data,
      total
    }
  }
}
