import typia from 'typia'
import { Test, TestingModule } from '@nestjs/testing'
import { CreateTodolistValidator } from '../../todolist/decorator'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { checkRequestValidate } from '../test.utils'
import { TypiaExceptionHandler } from 'src/common'
import { CreateTodolistsResponseType } from 'src/services/todolist/types'
import { TodolistController, TodolistService } from 'src/services/todolist'
import { Category } from 'src/entities'

describe('Testing Create Todolist', () => {
  let controller: TodolistController
  let service: TodolistService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodolistController],
      providers: [
        {
          provide: TodolistService,
          useValue: {
            createTodolist: jest.fn()
          }
        }
      ]
    }).compile()

    controller = module.get<TodolistController>(TodolistController)
    service = module.get<TodolistService>(TodolistService)
  })

  describe('CreateTodolistValidator test', () => {
    it('should return CreateTodolistDto to controller', async () => {
      const request = {
        body: {
          title: 'test title',
          categoryId: '1'
        }
      }

      jest.spyOn(service, 'createTodolist').mockResolvedValue({
        ...request.body,
        id: '1',
        order: 1,
        checked: false,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      const result = new CreateTodolistValidator(request).validate()
      const created = await controller.createTodolist(result)
      expect(typia.equals<CreateTodolistsResponseType>(created)).toBe(true)
    })

    it('should throw error when sent wrong data', async () => {
      const request = {
        body: {
          title: 'test title',
          categoryId: '1',
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(CreateTodolistValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })

    it('should throw error when forget sent essential data', async () => {
      const request = {
        body: {
          title: 'test title',
          description: 'test description'
        }
      }

      const typiaError = await checkRequestValidate(CreateTodolistValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(NotFoundException)
        expect(err.response.message).toBe(`Received unexpected data 'categoryId' [MISSING DATA ERROR]`)
      }
    })
  })
})
