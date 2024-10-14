import { Controller, Get, Param, Post } from '@nestjs/common'
import { Todolist } from 'src/entities'
import { TodolistService } from './todolist.service'
import { CreateTodolistDto, GetTodolistsResponseType } from './types'
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

  @Get(':categoryId')
  async getTodolistsByCategoryId(@Param('categoryId') categoryId: string): Promise<GetTodolistsResponseType> {
    return this.todolistService.getTodolistsByCategoryId(categoryId)
  }
}
