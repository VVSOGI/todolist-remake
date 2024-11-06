import { Test, TestingModule } from '@nestjs/testing'
import { TodolistController, TodolistService } from '../../todolist'
import { Category, Todolist } from 'src/entities'
import { GetTodolistCheckedValidator } from '../../todolist/decorator'
import { BadRequestException } from '@nestjs/common'
import { checkRequestValidate } from '../test.utils'
import { TypiaExceptionHandler } from 'src/common'

describe('Testing Get Todolist', () => {
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

  describe('function getTodolists() {}', () => {
    it('should return Todolist type array', async () => {
      const mockTodolist: Todolist[] = [
        {
          id: '1',
          category: new Category(),
          categoryId: '1',
          order: 0,
          title: 'mock todolist title 1',
          checked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          category: new Category(),
          categoryId: '1',
          order: 1,
          title: 'mock todolist title 2',
          checked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]

      jest.spyOn(service, 'getTodolists').mockResolvedValue({
        data: mockTodolist,
        total: mockTodolist.length
      })

      const result = (await controller.getTodolists()).data
      const [first, second] = result

      expect(first.id).toBe('1')
      expect(second.id).toBe('2')
    })

    it('should return empty array', async () => {
      const mockTodolist: Todolist[] = []

      jest.spyOn(service, 'getTodolists').mockResolvedValue({
        data: mockTodolist,
        total: mockTodolist.length
      })

      const result = (await controller.getTodolists()).total
      expect(result).toBe(0)
    })

    it('when request query with dto that not matched', async () => {
      const request = {
        query: {
          checked: 'tru'
        }
      }

      const typiaError = await checkRequestValidate(GetTodolistCheckedValidator, request)

      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data '(\"false\" | \"true\" | undefined)' [INVALID QUERY DATA ERROR]`)
      }
    })
  })
})
