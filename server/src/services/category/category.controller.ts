import { Controller, Delete, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Category } from 'src/entities'
import { CategoryService } from './category.service'
import { CategoryDeleteParamsDto, CategoryIdParamsDto, CreateCategoryDto, GetCategoriesResponseType } from './types'
import { ValidateCreateDTO, ValidateDeletedCheckedDTO, ValidateIdParamDTO } from './decorator'

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async createCategory(@ValidateCreateDTO() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(createCategoryDto)
  }

  @Get()
  async getCategories(@ValidateDeletedCheckedDTO() categoryDeleteParamsDto: CategoryDeleteParamsDto): Promise<GetCategoriesResponseType> {
    return this.categoryService.getCategories(categoryDeleteParamsDto)
  }

  @Get(':categoryId')
  async getCategoryById(@ValidateIdParamDTO() getCategoryDto: CategoryIdParamsDto): Promise<Category> {
    const { categoryId } = getCategoryDto
    return this.categoryService.getCategoryById(categoryId)
  }

  @Delete('/soft/:categoryId')
  async softDeleteCategoryById(@ValidateIdParamDTO() deleteCategoryDto: CategoryIdParamsDto): Promise<Category> {
    const { categoryId } = deleteCategoryDto
    return this.categoryService.softDeleteCategoryById(categoryId)
  }
}
