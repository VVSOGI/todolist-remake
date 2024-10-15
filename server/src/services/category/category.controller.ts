import { Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Category } from 'src/entities'
import { CategoryService } from './category.service'
import { CreateCategoryDto, GetCategoriesResponseType } from './types'
import { ValidateCreateDTO } from './decorator'
import { ValidateIdParamDTO } from './decorator/validateIdParam.decorator'
import { GetCategoryDto } from './types/get.type'

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
  async getCategoryById(@ValidateIdParamDTO() getCategoryDto: GetCategoryDto): Promise<Category> {
    const { categoryId } = getCategoryDto
    return this.categoryService.getCategoryById(categoryId)
  }
}
