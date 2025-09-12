import { TaskEntity } from 'src/application/domain/domain/task.model';

export const GetTasksPort = Symbol('GetTasksPort');
export interface GetTasksPort {
  execute(): Promise<TaskEntity[]>;
}
