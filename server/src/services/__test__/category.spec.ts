import { Test, TestingModule } from '@nestjs/testing'
import { BadRequestException } from '@nestjs/common'
import { TypiaAssertError, TypiaExceptionHandler } from 'src/common'
import { Category } from 'src/entities/category.entity'
import { CategoryController, CategoryService } from '../category'
import { CreateCategoryValidator } from '../category/decorator'

describe('CategoryModule', () => {
  let controller: CategoryController
  let service: CategoryService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [
        {
          provide: CategoryService,
          useValue: {
            getCategories: jest.fn()
          }
        }
      ]
    }).compile()

    controller = module.get<CategoryController>(CategoryController)
    service = module.get<CategoryService>(CategoryService)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getCategories', () => {
    it('should return Category type array', async () => {
      const mockCategories: Category[] = [
        {
          id: '1',
          title: 'Test Category 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          todolist: []
        },
        {
          id: '2',
          title: 'Test Category 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          todolist: []
        }
      ]

      jest.spyOn(service, 'getCategories').mockResolvedValue({
        data: mockCategories,
        total: mockCategories.length
      })

      const result = (await controller.getCategories()).data
      const [first, second] = result

      expect(first.id).toBe('1')
      expect(second.id).toBe('2')
    })

    it('should return empty array', async () => {
      jest.spyOn(service, 'getCategories').mockResolvedValue({
        data: [],
        total: 0
      })
      const result = (await controller.getCategories()).data
      expect(result.length).toBe(0)
    })
  })

  describe('createCategory', () => {
    it('should throw error when sent wrong data', async () => {
      let typiaError: TypiaAssertError | undefined
      const request = {
        body: {
          title: 'test title',
          hack: 'hack'
        }
      }

      try {
        new CreateCategoryValidator(request).validate()
      } catch (err) {
        typiaError = err
      }

      if (!typiaError) return
      try {
        new TypiaExceptionHandler(typiaError.response).handleValidationError()
      } catch (err) {
        expect(err).toBeInstanceOf(BadRequestException)
        expect(err.response.message).toBe(`Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
      }
    })
  })
})
