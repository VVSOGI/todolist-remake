import typia from 'typia'
import { Test, TestingModule } from '@nestjs/testing'
import { BadRequestException } from '@nestjs/common'
import { TypiaExceptionHandler } from 'src/common'
import { UpdateTodolistOrderValidator, UpdateTodolistValidator } from '../../todolist/decorator'
import { checkRequestValidate } from '../test.utils'
import { UpdateTodolistDto, UpdateTodolistsOrderResponseType } from 'src/services/todolist/types'
import { TodolistController, TodolistService } from 'src/services/todolist'
import { Category } from 'src/entities'

describe('Testing Update Todolist', () => {
  let controller: TodolistController
  let service: TodolistService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodolistController],
      providers: [
        {
          provide: TodolistService,
          useValue: {
            getTodolists: jest.fn(),
            updateTodolist: jest.fn(),
            updateTodolistOrder: jest.fn()
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

  describe('PATCH /todolist', () => {
    it('should return todolist when successed call patch api', async () => {
      const request = {
        body: {
          id: '1',
          title: 'test title',
          checked: true
        }
      }

      jest.spyOn(service, 'updateTodolist').mockResolvedValue({
        ...request.body,
        category: {} as Category,
        categoryId: '1',
        order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      const result = new UpdateTodolistValidator(request).validate()
      const updated = await controller.updateTodo(result)

      expect(updated.checked).toBe(true)
    })
  })

  describe('UpdateTodolistValidator test', () => {
    it('should return UpdateTodolistDto to controller', async () => {
      const request = {
        body: {
          id: '1',
          title: 'test title',
          checked: true
        }
      }

      const result = new UpdateTodolistValidator(request).validate()
      expect(typia.equals<UpdateTodolistDto>(result)).toBe(true)
    })

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

  describe('UpdateTodolistOrderValidator test', () => {
    it('should return UpdateTodolistOrderDto to controller', async () => {
      const request = {
        body: [
          {
            id: '1',
            order: 0
          }
        ]
      }

      jest.spyOn(service, 'updateTodolistOrder').mockResolvedValue({
        data: 'success'
      })

      const validateResult = new UpdateTodolistOrderValidator(request).validate()
      const result = await controller.updateTodoOrder(validateResult)

      expect(typia.equals<UpdateTodolistsOrderResponseType>(result)).toBe(true)
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
