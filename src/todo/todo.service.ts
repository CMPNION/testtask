import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Todo } from '../database/models/todo.model';
import { TodoDto } from './dto/todo.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo)
    private readonly todoModel: typeof Todo,
  ) {}

  async getAll() {
    try {
      return this.todoModel.findAll();
    } catch (error) {
      throw new Error("Error: Cannot get data from DB");
    }
  }

  async getById(uuid: string) {
    try {
      return this.todoModel.findOne({ where: { uuid } });
    } catch (error) {
      throw new Error("Error: Cannot get data from DB or wrong uuid");
    }
  }

  async createNew(body: TodoDto) {
    try {
      return this.todoModel.create(body as any);
    } catch (error) {
      throw new Error("Error: Cannot create task");
    }
  }

  async delete(uuid: string) {
    try {
      const todo = await this.getById(uuid);
      if (todo) {
        await todo.destroy();
      } else {
        throw new Error("Error: Task not found");
      }
    } catch (error) {
      throw new Error("Error: Cannot delete task or wrong uuid");
    }
  }

  async updateTask(uuid: string, body: UpdateTaskDto) {
    try {
      await this.todoModel.update(body, { where: { uuid } });
      return this.getById(uuid);
    } catch (error) {
      throw new Error("Error: cannot update task or wrong uuid");
    }
  }
}