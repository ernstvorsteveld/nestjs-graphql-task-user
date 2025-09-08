import { CreateTaskDto } from 'src/adapters/in/task/task.controller.dto';
import { TaskEntity } from 'src/application/domain/domain/task.model';

export interface CreateTaskPort {
  execute(create: CreateTaskDto): Promise<TaskEntity>;
}
