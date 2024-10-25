import { Test, TestingModule } from '@nestjs/testing'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { Category } from 'src/entities/category.entity'
import { CategoryController, CategoryService } from '../category'
import { CreateCategoryValidator, CategoryIdParamsValidator } from '../category/decorator'
import { checkRequestValidate, execeptionCheck } from './test.utils'

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

  describe('createCategory', () => {
    it('should throw error when sent wrong data', async () => {
      const request = {
        body: {
          title: 'test title',
          hack: 'hack'
        }
      }

      const typiaError = await checkRequestValidate(CreateCategoryValidator, request)
      execeptionCheck(typiaError, BadRequestException, `Received unexpected data 'hack' [WRONG DATA SENT ERROR]`)
    })

    it('should throw error when forget sent essential data', async () => {
      const request = {
        body: {}
      }

      const typiaError = await checkRequestValidate(CreateCategoryValidator, request)
      execeptionCheck(typiaError, NotFoundException, `Received unexpected data 'title' [MISSING DATA ERROR]`)
    })
  })

  describe('getCategories', () => {
    it('should return Category type array', async () => {
      const mockCategories: Category[] = [
        {
          id: '1',
          title: 'Test Category 1',
          createdAt: new Date(),
          updatedAt: new Date(),
          deleted: false,
          todolist: []
        },
        {
          id: '2',
          title: 'Test Category 2',
          createdAt: new Date(),
          updatedAt: new Date(),
          deleted: false,
          todolist: []
        }
      ]

      jest.spyOn(service, 'getCategories').mockResolvedValue({
        data: mockCategories,
        total: mockCategories.length
      })

      const result = (await controller.getCategories('false')).data
      const [first, second] = result

      expect(first.id).toBe('1')
      expect(second.id).toBe('2')
    })

    it('should return empty array', async () => {
      jest.spyOn(service, 'getCategories').mockResolvedValue({
        data: [],
        total: 0
      })
      const result = (await controller.getCategories('false')).data
      expect(result.length).toBe(0)
    })
  })

  describe('getCategoryById', () => {
    it('should throw error when categoryId not matched uuid type', async () => {
      const request = {
        params: {
          categoryId: '1232'
        }
      }

      const typiaError = await checkRequestValidate(CategoryIdParamsValidator, request)
      execeptionCheck(typiaError, BadRequestException, `Received unmatched data 'categoryId' [INVALID UUID TYPE ERROR]`)
    })
  })
})
