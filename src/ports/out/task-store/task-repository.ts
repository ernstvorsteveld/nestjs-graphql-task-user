import {
  CreateTaskDto,
  UpdateTaskDto,
} from 'src/adapters/in/task/task.controller.dto';
import { TaskEntity } from 'src/application/domain/domain/task.model';

export interface TaskRepository {
  findAll(): Promise<TaskEntity[]>;
  findOne(id: number): Promise<TaskEntity>;
  create(create: CreateTaskDto): Promise<TaskEntity>;
  update(id: number, update: UpdateTaskDto): Promise<TaskEntity>;
  remove(id: number): Promise<TaskEntity>;
}
