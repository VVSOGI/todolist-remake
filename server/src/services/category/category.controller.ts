import { Controller, Delete, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Category } from 'src/entities'
import { CategoryService } from './category.service'
import { CategoryIdParamsDto, CreateCategoryDto, GetCategoriesResponseType } from './types'
import { ValidateCreateDTO, ValidateIdParamDTO } from './decorator'
import { DeleteResult } from 'typeorm'

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async createCategory(@ValidateCreateDTO() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto)
  }

  @Get()
  async getCategories(): Promise<GetCategoriesResponseType> {
    return this.categoryService.getCategories()
  }

  @Get(':categoryId')
  async getCategoryById(@ValidateIdParamDTO() getCategoryDto: CategoryIdParamsDto): Promise<Category> {
    const { categoryId } = getCategoryDto
    return this.categoryService.getCategoryById(categoryId)
  }

  @Delete(':categoryId')
  async deleteCategoryById(@ValidateIdParamDTO() deleteCategoryDto: CategoryIdParamsDto): Promise<DeleteResult> {
    const { categoryId } = deleteCategoryDto
    return this.categoryService.deleteCategoryById(categoryId)
  }
}
