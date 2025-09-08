import { Module } from '@nestjs/common';
import { UserResolver } from 'src/adapters/in/gql/user.gql.resolver';

@Module({
  providers: [UserResolver],
  controllers: [],
})
export class UserModule {}
