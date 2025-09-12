import { Inject, Injectable } from '@nestjs/common';
import { UpdateTaskDto } from 'src/adapters/in/task/task.controller.dto';
import { TaskEntity } from 'src/application/domain/domain/task.model';
import { UpdateTaskPort } from 'src/ports/in/task/update-task.port';
import { TaskRepository } from 'src/ports/out/task-store/task-repository';

@Injectable()
export class UpdateTaskUseCase implements UpdateTaskPort {
  constructor(
    @Inject(TaskRepository)
    private readonly repo: TaskRepository,
  ) {}

  async execute(id: number, update: UpdateTaskDto): Promise<TaskEntity> {
    return this.repo.update(id, update);
  }
}
