import { Inject } from '@nestjs/common';
import { TaskEntity } from 'src/application/domain/domain/task.model';
import { RemoveTaskPort } from 'src/ports/in/task/remove-task.port';
import { TaskRepository } from 'src/ports/out/task-store/task-repository';

export class RemoveTaskUseCase implements RemoveTaskPort {
  constructor(
    @Inject('TaskRepository')
    private readonly repo: TaskRepository,
  ) {}

  async execute(id: number): Promise<TaskEntity> {
    return this.repo.remove(id);
  }
}
