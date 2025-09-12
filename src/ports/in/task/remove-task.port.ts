import { TaskEntity } from 'src/application/domain/domain/task.model';

export const RemoveTaskPort = Symbol('RemoveTaskPort');
export interface RemoveTaskPort {
  execute(id: number): Promise<TaskEntity>;
}
