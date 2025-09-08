import { Module } from '@nestjs/common';
import { TaskResolver } from './task.gql.resolver';
import { TaskService } from 'src/task/task.service';
import { UserResolver } from './user.gql.resolver';
import { UserAPI } from 'src/user/user.api';

@Module({
  providers: [TaskService, TaskResolver, UserAPI, UserResolver],
  controllers: [],
})
export class GqlModule {}
