import { Controller, Get, Post, Put, Delete, Query, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';
import { UpdateTaskDto } from './dto/updateTask.dto';
import { Todo } from '../database/models/todo.model';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/get/:id')
  async find(@Param('id') id: number) {
    return this.todoService.getById(id);
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

  @Delete('/delete/:id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    return this.todoService.delete(id);
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async updateTask(@Param('id') id: number, @Body() body: UpdateTaskDto): Promise<Todo> {
    return this.todoService.updateTask(id, body);
  }
}