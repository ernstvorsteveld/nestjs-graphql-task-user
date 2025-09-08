import { TaskEntity } from 'src/application/domain/domain/task.model';

export interface GetTasksPort {
  execute(): Promise<TaskEntity[]>;
}
