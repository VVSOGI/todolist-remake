import { Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { TodolistService } from './todolist.service'
import {
  CreateTodolistDto,
  TodolistResponseType,
  GetTodolistsByDatesResponseType,
  GetTodolistsResponseType,
  UpdateTodolistDto,
  UpdateTodolistOrderDto,
  UpdateTodolistsOrderResponseType
} from './types'
import {
  ValidateCreateTodolistDTO,
  ValidateGetTodolistCheckedDTO,
  ValidateUpdateTodolistDto,
  ValidateUpdateTodolistOrderDTO
} from './decorator'
import { CategoryIdParamsDto, ValidateIdParamDTO } from '../common'

@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}

  @Post()
  async createTodolist(@ValidateCreateTodolistDTO() createTodolistDto: CreateTodolistDto): Promise<TodolistResponseType> {
    return this.todolistService.createTodolist(createTodolistDto)
  }

  @Get()
  async getTodolists(): Promise<GetTodolistsResponseType> {
    return this.todolistService.getTodolists()
  }

  @Get(':categoryId')
  async getTodolistsByCategoryId(
    @ValidateIdParamDTO() getCategoryDto: CategoryIdParamsDto,
    @ValidateGetTodolistCheckedDTO() checked?: boolean
  ): Promise<GetTodolistsResponseType> {
    const { categoryId } = getCategoryDto
    return this.todolistService.getTodolistsByCategoryId({ categoryId, checked })
  }

  @Get('/dates/:categoryId')
  async getTodolistsByDate(@Param('categoryId') categoryId: string): Promise<GetTodolistsByDatesResponseType> {
    return this.todolistService.getTodolistsByDate(categoryId)
  }

  @Patch()
  async updateTodo(@ValidateUpdateTodolistDto() updateTodolistDto: UpdateTodolistDto): Promise<TodolistResponseType> {
    return this.todolistService.updateTodolist(updateTodolistDto)
  }

  @Patch('/order')
  async updateTodoOrder(
    @ValidateUpdateTodolistOrderDTO() updateTodolistOrderDto: UpdateTodolistOrderDto[]
  ): Promise<UpdateTodolistsOrderResponseType> {
    return this.todolistService.updateTodolistOrder(updateTodolistOrderDto)
  }
}
