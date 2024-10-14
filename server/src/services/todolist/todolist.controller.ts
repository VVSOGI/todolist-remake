import { Controller, Get } from '@nestjs/common'
import { TodolistService } from './todolist.service'
import { GetTodolistsResponseType } from './types'

@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}

  @Get()
  async getTodolists(): Promise<GetTodolistsResponseType> {
    return this.todolistService.getTodolists()
  }
}
