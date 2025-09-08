import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  Get,
  Inject,
} from '@nestjs/common';
import {
  CreateTaskDto,
  TaskPayload,
  UpdateTaskDto,
} from './task.controller.dto';
import { CreateTaskPort } from 'src/ports/in/task/create-task.port';
import { GetTaskPort } from 'src/ports/in/task/get-task.port';
import { RemoveTaskPort } from 'src/ports/in/task/remove-task.port';
import { UpdateTaskPort } from 'src/ports/in/task/update-task.port';
import { GetTasksPort } from 'src/ports/in/task/get-tasks.port';

@Controller('tasks')
export class TaskController {
  constructor(
    @Inject('CreateTaskPort')
    private readonly createTaskPort: CreateTaskPort,
    @Inject('UpdateTaskPort')
    private readonly updateTaskPort: UpdateTaskPort,
    @Inject('RemoveTaskPort')
    private readonly removeTaskPort: RemoveTaskPort,
    @Inject('GetTaskPort')
    private readonly getTaskPort: GetTaskPort,
    @Inject('GetTaskPort')
    private readonly getTasksPort: GetTasksPort,
  ) {}

  @Get()
  async findAll(): Promise<TaskPayload[]> {
    return this.getTasksPort.execute();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<TaskPayload> {
    return this.getTaskPort.execute(id);
  }

  @Post()
  async create(@Body() create: CreateTaskDto): Promise<TaskPayload> {
    return this.createTaskPort.execute(create);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() update: UpdateTaskDto,
  ): Promise<TaskPayload> {
    return this.updateTaskPort.execute(id, update);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<TaskPayload> {
    return this.removeTaskPort.execute(id);
  }
}
