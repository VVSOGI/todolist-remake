import { v4 } from 'uuid'
import { Injectable, NotFoundException } from '@nestjs/common'
import { CategoryRepository } from './category.repository'
import { CreateCategory, CreateCategoryDto } from './types'
import { Category } from 'src/entities'

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  private async saveCategory(category: Category) {
    return this.categoryRepository.save(category)
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const category: CreateCategory = {
      id: v4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...createCategoryDto
    }

    const created = await this.categoryRepository.create(category)
    return this.saveCategory(created)
  }

  async updateDate(categoryId: string) {
    const category = await this.getCategoryById(categoryId)
    const updated: Category = { ...category, updatedAt: new Date() }
    this.saveCategory(updated)
  }

  async getCategories() {
    return this.categoryRepository.findAll()
  }

  async getCategoryById(categoryId: string) {
    const category = await this.categoryRepository.findById(categoryId)
    if (category) {
      return category
    }

    throw new NotFoundException(`The category you're looking for doesn't exist.`)
  }
}
