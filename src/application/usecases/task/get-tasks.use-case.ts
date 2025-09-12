import { Inject, Injectable } from '@nestjs/common';
import { TaskEntity } from 'src/application/domain/domain/task.model';
import { GetTasksPort } from 'src/ports/in/task/get-tasks.port';
import { TaskRepository } from 'src/ports/out/task-store/task-repository';

@Injectable()
export class GetTasksUseCase implements GetTasksPort {
  constructor(
    @Inject(TaskRepository)
    private readonly repo: TaskRepository,
  ) {}

  async execute(): Promise<TaskEntity[]> {
    return this.repo.findAll();
  }
}
