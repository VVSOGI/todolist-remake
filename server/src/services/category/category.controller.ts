import { Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Category } from 'src/entities'
import { CategoryService } from './category.service'
import { CreateCategoryDto, GetCategoriesResponseType } from './types'
import { ValidateCreateDTO } from './decorator'

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
    return await this.categoryService.getCategories()
  }
}
