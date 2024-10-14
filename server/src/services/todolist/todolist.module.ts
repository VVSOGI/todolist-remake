import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todolist } from 'src/entities/todolist.entity'
import { TodolistController, TodolistService, TodolistRepository } from '.'

@Module({
  imports: [TypeOrmModule.forFeature([Todolist])],
  controllers: [TodolistController],
  providers: [TodolistService, TodolistRepository]
})
export class TodolistModule {}
