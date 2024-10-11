import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category) private boardRepository: Repository<Category>,
  ) {}

  async findAllCategories() {
    const [data, total] = await this.boardRepository.findAndCount({
      order: {
        createdAt: 'desc',
      },
    });
    return {
      data,
      total,
    };
  }
}
