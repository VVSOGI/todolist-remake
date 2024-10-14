import { v4 } from 'uuid'
import { Injectable } from '@nestjs/common'
import { CategoryRepository } from './category.repository'
import { CreateCategory, CreateCategoryDto } from './types'

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getCategories() {
    return await this.categoryRepository.findAll()
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const category: CreateCategory = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createCategoryDto
    }

    return await this.categoryRepository.create(category)
  }
}
