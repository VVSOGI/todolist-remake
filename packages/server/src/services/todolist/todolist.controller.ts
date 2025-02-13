import { Controller, Get, Patch, Post, Query } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TodolistService } from './todolist.service'
import {
  CreateTodolistDto,
  TodolistResponseType,
  GetTodolistsByDatesResponseType,
  GetTodolistsResponseType,
  UpdateTodolistDto,
  UpdateTodolistOrderDto,
  UpdateTodolistsOrderResponseType,
  GetTodolistDto,
  GetTodolistDatesDto
} from './types'
import {
  ValidateCreateTodolistDTO,
  ValidateGetTodolistCheckedDTO,
  ValidateUpdateTodolistDto,
  ValidateUpdateTodolistOrderDTO,
  SwaggerCreateTodolist,
  SwaggerGetTodolist,
  SwaggerGetTodolistById,
  SwaggerGetTodolistByDate,
  SwaggerUpdateTodolist,
  SwaggerUpdateTodolistOrder
} from './decorator'
import { CategoryIdParamsDto, ValidateIdParamDTO } from '../common'
import { DocsCreateTodolist, DocsGetTodolist, DocsGetTodolistByDate, DocsGetTodolistById } from './decorator/custom-docs'

@ApiTags('Todolist')
@Controller('todolist')
export class TodolistController {
  constructor(private todolistService: TodolistService) {}

  @Post()
  @DocsCreateTodolist()
  @SwaggerCreateTodolist()
  async createTodolist(@ValidateCreateTodolistDTO() createTodolistDto: CreateTodolistDto): Promise<TodolistResponseType> {
    return this.todolistService.createTodolist(createTodolistDto)
  }

  @Get()
  @DocsGetTodolist()
  @SwaggerGetTodolist()
  async getTodolists(): Promise<GetTodolistsResponseType> {
    return this.todolistService.getTodolists()
  }

  @Get(':categoryId')
  @DocsGetTodolistById()
  @SwaggerGetTodolistById()
  async getTodolistsByCategoryId(
    @ValidateIdParamDTO() getCategoryDto: CategoryIdParamsDto,
    @ValidateGetTodolistCheckedDTO() checked?: GetTodolistDto
  ): Promise<GetTodolistsResponseType> {
    const { categoryId } = getCategoryDto
    let isChecked: boolean
    if (checked === 'true') {
      isChecked = true
    } else {
      isChecked = false
    }
    return this.todolistService.getTodolistsByCategoryId({ categoryId, checked: isChecked })
  }

  @Get('/dates/:categoryId')
  @DocsGetTodolistByDate()
  @SwaggerGetTodolistByDate()
  async getTodolistsByDate(
    @ValidateIdParamDTO() getCategoryDto: CategoryIdParamsDto,
    @Query('checked') checked: GetTodolistDatesDto = 'true'
  ): Promise<GetTodolistsByDatesResponseType> {
    return this.todolistService.getTodolistsByDate(getCategoryDto.categoryId, checked)
  }

  @Patch()
  @SwaggerUpdateTodolist()
  async updateTodo(@ValidateUpdateTodolistDto() updateTodolistDto: UpdateTodolistDto): Promise<TodolistResponseType> {
    return this.todolistService.updateTodolist(updateTodolistDto)
  }

  @Patch('/order')
  @SwaggerUpdateTodolistOrder()
  async updateTodoOrder(
    @ValidateUpdateTodolistOrderDTO() updateTodolistOrderDto: UpdateTodolistOrderDto[]
  ): Promise<UpdateTodolistsOrderResponseType> {
    return this.todolistService.updateTodolistOrder(updateTodolistOrderDto)
  }
}
