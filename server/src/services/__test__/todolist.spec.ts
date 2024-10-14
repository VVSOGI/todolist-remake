import { Test, TestingModule } from '@nestjs/testing'
import { TodolistController, TodolistService } from '../todolist'
import { Category, Todolist } from 'src/entities'

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

  describe('getTodolists', () => {
    it('should return Todolist type array', async () => {
      const mockTodolist: Todolist[] = [
        {
          id: '1',
          category: new Category(),
          categoryId: '1',
          title: 'mock todolist title 1',
          description: 'mock todolist description 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '2',
          category: new Category(),
          categoryId: '2',
          title: 'mock todolist title 2',
          description: 'mock todolist description 2',
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
  })

  describe('createTodolist', () => {
    it('should throw error when sent wrong data', async () => {})
  })
})
