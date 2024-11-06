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

  describe('updateTodo', () => {
    it('should throw error when sent wrong data', async () => {
      const request = {
        body: {
          id: '1',
          title: 'test title',
          checked: false,
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(UpdateTodolistValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })
  })

  describe('updateTodoOrder', () => {
    it('should return UpdateTodolistOrderDto[] when send right request', async () => {
      const request = {
        body: [
          {
            id: '1',
            order: 0
          }
        ]
      }
      const todolist = new UpdateTodolistOrderValidator(request).validate()
      expect(todolist[0].id).toBe('1')
    })

    it('should throw error when sent wrong data', async () => {
      const request = {
        body: [
          {
            id: '1',
            order: 0,
            hack: ''
          }
        ]
      }

      const typiaError = await checkRequestValidate(UpdateTodolistOrderValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })
  })
})
