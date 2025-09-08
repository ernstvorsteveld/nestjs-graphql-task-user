import { UpdateTaskDto } from 'src/adapters/in/task/task.controller.dto';
import { TaskEntity } from 'src/application/domain/domain/task.model';

export interface UpdateTaskPort {
  execute(id: number, update: UpdateTaskDto): Promise<TaskEntity>;
}
