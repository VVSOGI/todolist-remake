import { Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ApiDocsController } from 'doke'
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
import {
  ValidateCreateDTO,
  ValidateDeletedCheckedDTO,
  ValidateUpdateDTO,
  SwaggerCreateCategory,
  SwaggerGetCategory,
  SwaggerGetCategoryById,
  SwaggerUpdateCategory,
  SwaggerDeleteCategory
} from './decorator'
import { DocsCreateCategory, DocsGetCategory, DocsUpdateCategory, DocsGetCategoryById, DocsDeleteCategory } from './decorator/custom-docs'
import { ValidateIdParamDTO } from '../common'

@ApiTags('Category')
@ApiDocsController({
  description: 'Category management API endpoints',
  tags: ['Category']
})
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  @DocsCreateCategory()
  @SwaggerCreateCategory()
  async createCategory(@ValidateCreateDTO() createCategoryDto: CreateCategoryDto): Promise<DefaultCategoryResponseType> {
    const { title } = createCategoryDto
    return this.categoryService.createCategory(title)
  }

  @Get()
  @DocsGetCategory()
  @SwaggerGetCategory()
  async getCategories(@ValidateDeletedCheckedDTO() categoryDeleteParamsDto: CategoryDeleteParamsDto): Promise<GetCategoriesResponseType> {
    return this.categoryService.getCategories(categoryDeleteParamsDto)
  }

  @Get(':categoryId')
  @DocsGetCategoryById()
  @SwaggerGetCategoryById()
  async getCategoryById(@ValidateIdParamDTO() getCategoryDto: CategoryIdParamsDto): Promise<DefaultCategoryResponseType> {
    const { categoryId } = getCategoryDto
    return this.categoryService.getCategoryById(categoryId)
  }

  @Patch(':categoryId')
  @DocsUpdateCategory()
  @SwaggerUpdateCategory()
  async updateCategory(
    @ValidateIdParamDTO() idParamsDto: CategoryIdParamsDto,
    @ValidateUpdateDTO() updateCategoryDto: UpdateCategoryDto
  ): Promise<UpdateCategoryResponseType> {
    const { categoryId } = idParamsDto
    const { title } = updateCategoryDto
    return this.categoryService.updateCategory(categoryId, title)
  }

  @Delete('/soft/:categoryId')
  @DocsDeleteCategory()
  @SwaggerDeleteCategory()
  async softDeleteCategoryById(@ValidateIdParamDTO() deleteCategoryDto: CategoryIdParamsDto): Promise<DefaultCategoryResponseType> {
    const { categoryId } = deleteCategoryDto
    return this.categoryService.softDeleteCategoryById(categoryId)
  }
}
