import { TaskEntity } from 'src/application/domain/domain/task.model';

export interface GetTaskPort {
  execute(id: number): Promise<TaskEntity>;
}
