import { TaskEntity } from 'src/application/domain/domain/task.model';

export const GetTaskPort = Symbol('GetTaskPort');
export interface GetTaskPort {
  execute(id: number): Promise<TaskEntity>;
}
