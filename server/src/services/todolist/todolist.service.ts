import { Injectable } from '@nestjs/common'
import { TodolistRepository } from './todolist.repository'

@Injectable()
export class TodolistService {
  constructor(private todolistRepository: TodolistRepository) {}

  async getTodolists() {
    return this.todolistRepository.findAll()
  }
}
