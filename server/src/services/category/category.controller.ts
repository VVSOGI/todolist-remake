import { Controller, Delete, Get, Patch, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Category } from 'src/entities'
import { CategoryService } from './category.service'
import { CategoryDeleteParamsDto, CategoryIdParamsDto, CreateCategoryDto, GetCategoriesResponseType, UpdateCategoryDto } from './types'
import { ValidateCreateDTO, ValidateDeletedCheckedDTO, ValidateIdParamDTO, ValidateUpdateDTO } from './decorator'

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  async createCategory(@ValidateCreateDTO() createCategoryDto: CreateCategoryDto): Promise<Category> {
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
  async updateTodo(
    @ValidateIdParamDTO() idParamsDto: CategoryIdParamsDto,
    @ValidateUpdateDTO() updateCategoryDto: UpdateCategoryDto
  ): Promise<Category> {
    const { categoryId } = idParamsDto
    const { title } = updateCategoryDto
    return this.categoryService.updateCategory(categoryId, title)
  }

  @Delete('/soft/:categoryId')
  async softDeleteCategoryById(@ValidateIdParamDTO() deleteCategoryDto: CategoryIdParamsDto): Promise<Category> {
    const { categoryId } = deleteCategoryDto
    return this.categoryService.softDeleteCategoryById(categoryId)
  }
}
