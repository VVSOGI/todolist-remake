import { Test, TestingModule } from '@nestjs/testing'
import { TodolistController, TodolistService } from '../todolist'
import { Category, Todolist } from 'src/entities'
import {
  CreateTodolistValidator,
  GetTodolistCheckedValidator,
  UpdateTodolistOrderValidator,
  UpdateTodolistValidator
} from '../todolist/decorator'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { checkRequestValidate } from './test.utils'
import { TypiaExceptionHandler } from 'src/common'

describe('TodolistModule', () => {
  let controller: TodolistController
  let service: TodolistService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodolistController],
      providers: [
        {
          provide: TodolistService,
          useValue: {
            getTodolists: jest.fn()
          }
        }
      ]
    }).compile()

    controller = module.get<TodolistController>(TodolistController)
    service = module.get<TodolistService>(TodolistService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
