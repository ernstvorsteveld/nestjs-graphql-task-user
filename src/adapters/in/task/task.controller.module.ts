import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskResolver } from '../gql/task.gql.resolver';

@Module({
  providers: [TaskResolver],
  controllers: [TaskController],
})
export class TaskControllerModule {}
