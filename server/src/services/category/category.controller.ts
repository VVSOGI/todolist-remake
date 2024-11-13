import { Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Category } from 'src/entities'
import { CategoryService } from './category.service'
import {
  CategoryDeleteParamsDto,
  CategoryIdParamsDto,
  CreateCategoryDto,
  DefaultCategoryResponseType,
  GetCategoriesResponseType,
  UpdateCategoryDto,
  UpdateCategoryResponseType
} from './types'
import { ValidateCreateDTO, ValidateDeletedCheckedDTO, ValidateIdParamDTO, ValidateUpdateDTO } from './decorator'

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async createCategory(@ValidateCreateDTO() createCategoryDto: CreateCategoryDto): Promise<DefaultCategoryResponseType> {
    const { title } = createCategoryDto
    return this.categoryService.createCategory(title)
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

  @Patch(':categoryId')
  async updateCategory(
    @ValidateIdParamDTO() idParamsDto: CategoryIdParamsDto,
    @ValidateUpdateDTO() updateCategoryDto: UpdateCategoryDto
  ): Promise<UpdateCategoryResponseType> {
    const { categoryId } = idParamsDto
    const { title } = updateCategoryDto
    return this.categoryService.updateCategory(categoryId, title)
  }

  @Delete('/soft/:categoryId')
  async softDeleteCategoryById(@ValidateIdParamDTO() deleteCategoryDto: CategoryIdParamsDto): Promise<DefaultCategoryResponseType> {
    const { categoryId } = deleteCategoryDto
    return this.categoryService.softDeleteCategoryById(categoryId)
  }
}
