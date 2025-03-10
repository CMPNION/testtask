import { Controller, Get, Post, Put, Delete, Query, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { Todo } from '../database/models/todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/get/:uuid')
  async find(@Param('uuid') uuid: string) {
    return this.todoService.getById(uuid);
  }

  @Get()
  async findAll() {
    return this.todoService.getAll();
  }

  @Post('/new')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async newTask(@Body() body: TodoDto): Promise<Todo> {
    return this.todoService.createNew(body);
  }

  @Delete('/delete/:uuid')
  async deleteTask(@Param('uuid') uuid: string): Promise<void> {
    return this.todoService.delete(uuid);
  }

  @Put('/update/:uuid')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateTask(@Param('uuid') uuid: string, @Body() body: UpdateTaskDto): Promise<Todo> {
    return this.todoService.updateTask(uuid, body);
  }
}