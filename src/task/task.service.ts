import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './task.controller.dto';
import { TaskEntity } from './task.model';

@Injectable()
export class TaskService {
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

  findAll(): TaskEntity[] {
    return this.tasks;
  }

  findOne(id: number): TaskEntity {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return task;
  }

  create(create: CreateTaskDto): TaskEntity {
    const newTask: TaskEntity = {
      id: this.nextId++,
      ...create,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  update(id: number, update: UpdateTaskDto): TaskEntity {
    const task = this.findOne(id);
    const index = this.tasks.findIndex((i) => i.id === id);

    const updated = { ...task, ...update };
    this.tasks[index] = updated;
    return updated;
  }

  remove(id: number): TaskEntity {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    const [removedTask] = this.tasks.splice(index, 1);
    return removedTask;
  }
}
