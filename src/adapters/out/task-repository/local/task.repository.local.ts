import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskEntity } from 'src/application/domain/domain/task.model';
import {
  CreateTaskDto,
  UpdateTaskDto,
} from 'src/adapters/in/task/task.controller.dto';
import { TaskRepository } from 'src/ports/out/task-store/task-repository';

@Injectable()
export class TaskStoreLocal implements TaskRepository {
  private tasks: TaskEntity[] = [
    {
      id: 1,
      name: 'INT00001',
      description: 'Start intake proces voor aanvraag.',
      userId: '68bbcf235756a5a9f44aa4ca',
    },
    {
      id: 2,
      name: 'INT000002',
      description: 'Maak kostenverdeling voor aanvraag.',
      userId: '68bbcf235756a5a9f44aa4ca',
    },
  ];
  private nextId = 3;

  async findAll(): Promise<TaskEntity[]> {
    return Promise.resolve(this.tasks);
  }

  async findOne(id: number): Promise<TaskEntity> {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return Promise.resolve(task);
  }

  async create(create: CreateTaskDto): Promise<TaskEntity> {
    const newTask: TaskEntity = {
      id: this.nextId++,
      ...create,
    };
    this.tasks.push(newTask);
    return Promise.resolve(newTask);
  }

  async update(id: number, update: UpdateTaskDto): Promise<TaskEntity> {
    const index = this.tasks.findIndex((i) => i.id === id);

    const updated = this.findOne(id).then((t) => {
      const updated = { ...t, ...update };
      this.tasks[index] = updated;
      return updated;
    });
    this.tasks[index] = await updated;
    return Promise.resolve(updated);
  }

  async remove(id: number): Promise<TaskEntity> {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    const [removedTask] = this.tasks.splice(index, 1);
    return Promise.resolve(removedTask);
  }
}
