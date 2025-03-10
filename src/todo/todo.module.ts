// filepath: /Users/cmpnion/test/test-task/src/todo/todo.module.ts
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from '../database/models/todo.model'

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}