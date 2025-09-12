import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/adapters/in/task/task.controller.dto';
import { TaskEntity } from 'src/application/domain/domain/task.model';
import { CreateTaskPort } from 'src/ports/in/task/create-task.port';
import { TaskRepository } from 'src/ports/out/task-store/task-repository';

@Injectable()
export class CreateTaksUseCase implements CreateTaskPort {
  constructor(
    @Inject(TaskRepository)
    private readonly repo: TaskRepository,
  ) {}

  async execute(create: CreateTaskDto): Promise<TaskEntity> {
    return this.repo.create(create);
  }
}
