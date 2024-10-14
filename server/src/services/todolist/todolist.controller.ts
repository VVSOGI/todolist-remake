import { Controller, Get, Post } from '@nestjs/common'
import { TodolistService } from './todolist.service'
import { CreateTodolistDto, GetTodolistsResponseType } from './types'
import { Todolist } from 'src/entities'
import { ValidateCreateTodolistDTO } from './decorator'

@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}

  @Post()
  async createTodolist(@ValidateCreateTodolistDTO() createTodolistDto: CreateTodolistDto): Promise<Todolist> {
    return this.todolistService.createTodolist(createTodolistDto)
  }

  @Get()
  async getTodolists(): Promise<GetTodolistsResponseType> {
    return this.todolistService.getTodolists()
  }
}
