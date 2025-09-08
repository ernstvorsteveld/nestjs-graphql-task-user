import { TaskEntity } from 'src/application/domain/domain/task.model';

export interface RemoveTaskPort {
  execute(id: number): Promise<TaskEntity>;
}
