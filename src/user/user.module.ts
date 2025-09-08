import { Module } from '@nestjs/common';
import { UserResolver } from 'src/gql/user.gql.resolver';
import { UserAPI } from './user.api';

@Module({
  providers: [UserAPI, UserResolver],
  controllers: [],
})
export class UserModule {}
