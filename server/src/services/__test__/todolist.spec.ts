import { Test, TestingModule } from '@nestjs/testing'
import { TodolistController, TodolistService } from '../todolist'

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
    it('should return Todolist type array', async () => {})

    it('should return empty array', async () => {})
  })

  describe('createTodolist', () => {
    it('should throw error when sent wrong data', async () => {})
  })
})
