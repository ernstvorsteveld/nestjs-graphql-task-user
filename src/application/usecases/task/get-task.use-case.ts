import { Inject, Injectable } from '@nestjs/common';
import { TaskEntity } from 'src/application/domain/domain/task.model';
import { GetTaskPort } from 'src/ports/in/task/get-task.port';
import { TaskRepository } from 'src/ports/out/task-store/task-repository';

@Injectable()
export class GetTaskUseCase implements GetTaskPort {
  constructor(
    @Inject(TaskRepository)
    private readonly repo: TaskRepository,
  ) {}

  async execute(id: number): Promise<TaskEntity> {
    return this.repo.findOne(id);
  }
}
