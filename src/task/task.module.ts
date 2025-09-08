import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskResolver } from './../gql/task.gql.resolver';
import { UserAPI } from 'src/user/user.api';

@Module({
  providers: [TaskService, TaskResolver, UserAPI],
  controllers: [TaskController],
})
export class TaskModule {}
