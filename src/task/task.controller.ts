import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
  Get, // Note: We include GET for completeness, but the prompt focuses on GraphQL for reads.
} from '@nestjs/common';
import { TaskService } from './task.service';
import {
  CreateTaskDto,
  TaskPayload,
  UpdateTaskDto,
} from './task.controller.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // --- Standard REST endpoint for fetching data ---
  // This is included to show a complete REST API, though the primary
  // goal is to use GraphQL for these kinds of requests.
  @Get()
  findAll(): TaskPayload[] {
    const taskPayloadList: TaskPayload[] = this.taskService
      .findAll()
      .map((task) => ({
        ...task,
      }));
    return taskPayloadList;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): TaskPayload {
    return this.taskService.findOne(id);
  }

  // --- REST Endpoints for Mutations ---

  @Post()
  create(@Body() create: CreateTaskDto): TaskPayload {
    return this.taskService.create(create);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() update: UpdateTaskDto,
  ): TaskPayload {
    return this.taskService.update(id, update);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): TaskPayload {
    return this.taskService.remove(id);
  }
}
