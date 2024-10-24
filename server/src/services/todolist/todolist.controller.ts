import { Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Todolist } from 'src/entities'
import { TodolistService } from './todolist.service'
import { CreateTodolistDto, GetTodolistsResponseType, UpdateTodolistDto } from './types'
import { ValidateCreateTodolistDTO, ValidateUpdateTodolistDto } from './decorator'
import { ValidateGetTodolistCheckedDTO } from './decorator/getTodolist.decorator'

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
  async getTodolistsByCategoryId(
    @Param('categoryId') categoryId: string,
    @ValidateGetTodolistCheckedDTO() checked: boolean
  ): Promise<GetTodolistsResponseType> {
    return this.todolistService.getTodolistsByCategoryId({ categoryId, checked })
  }

  @Patch()
  async updateTodo(@ValidateUpdateTodolistDto() updateTodolistDto: UpdateTodolistDto): Promise<Todolist> {
    return this.todolistService.updateTodolist(updateTodolistDto)
  }
}
