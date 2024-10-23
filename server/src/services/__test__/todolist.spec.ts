import { Test, TestingModule } from '@nestjs/testing'
import { TodolistController, TodolistService } from '../todolist'
import { Category, Todolist } from 'src/entities'
import { CreateTodolistValidator, GetTodolistCheckedValidator, UpdateTodolistValidator } from '../todolist/decorator'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { checkRequestValidate, execeptionCheck } from './test.utils'

describe('CategoryModule', () => {
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

  describe('createTodolist', () => {
    it('should throw error when sent wrong data', async () => {
      const request = {
        body: {
          title: 'test title',
          categoryId: '1',
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(CreateTodolistValidator, request)
      execeptionCheck(typiaError, BadRequestException, `Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
    })

    it('should throw error when forget sent essential data', async () => {
      const request = {
        body: {
          title: 'test title',
          description: 'test description'
        }
      }

      const typiaError = await checkRequestValidate(CreateTodolistValidator, request)
      execeptionCheck(typiaError, NotFoundException, `Received unexpected data 'categoryId' [MISSING DATA ERROR]`)
    })
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
      execeptionCheck(typiaError, BadRequestException, `Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
    })
  })

  describe('getTodolists', () => {
    it('should return Todolist type array', async () => {
      const mockTodolist: Todolist[] = [
        {
          id: '1',
          category: new Category(),
          categoryId: '1',
          title: 'mock todolist title 1',
          checked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          category: new Category(),
          categoryId: '1',
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
      execeptionCheck(
        typiaError,
        BadRequestException,
        `Received unexpected data '(\"false\" | \"true\" | undefined)' [INVALID QUERY DATA ERROR]`
      )
    })
  })
})
