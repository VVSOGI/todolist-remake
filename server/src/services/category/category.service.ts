import { v4 } from 'uuid'
import { Injectable, NotFoundException } from '@nestjs/common'
import { CategoryRepository } from './category.repository'
import { CreateCategory, CreateCategoryDto } from './types'

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const category: CreateCategory = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createCategoryDto
    }

    return this.categoryRepository.create(category)
  }

  async getCategories() {
    return this.categoryRepository.findAll()
  }

  async getCategoryById(categoryId: string) {
    const category = await this.categoryRepository.findById(categoryId)
    if (category) {
      return category
    }

    throw new NotFoundException('There are no applicable categories.')
  }
}
