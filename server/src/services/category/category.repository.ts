import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from 'src/entities'
import { Repository } from 'typeorm'
import { CreateCategory } from './types'

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async create(category: CreateCategory) {
    const created = this.categoryRepository.create(category)
    return await this.categoryRepository.save(created)
  }

  async findAll() {
    const [data, total] = await this.categoryRepository.findAndCount({
      order: {
        createdAt: 'desc'
      }
    })
    return {
      data,
      total
    }
  }

  async findById(categoryId: string) {
    const category = await this.categoryRepository.findOneBy({ id: categoryId })
    return category
  }
}
