import { Module } from '@nestjs/common';
import { TaskResolver } from './task.gql.resolver';
import { UserResolver } from './user.gql.resolver';

@Module({
  providers: [TaskResolver, UserResolver],
  controllers: [],
})
export class GqlModule {}
