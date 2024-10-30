import { Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { Todolist } from 'src/entities'
import { TodolistService } from './todolist.service'
import { CreateTodolistDto, GetTodolistsResponseType, UpdateTodolistDto } from './types'
import { ValidateCreateTodolistDTO, ValidateGetTodolistCheckedDTO, ValidateUpdateTodolistDto } from './decorator'

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

  @Get('/dates/:categoryId')
  async getTodolistsByDate(@Param('categoryId') categoryId: string): Promise<any> {}

  @Patch()
  async updateTodo(@ValidateUpdateTodolistDto() updateTodolistDto: UpdateTodolistDto): Promise<Todolist> {
    return this.todolistService.updateTodolist(updateTodolistDto)
  }
}
