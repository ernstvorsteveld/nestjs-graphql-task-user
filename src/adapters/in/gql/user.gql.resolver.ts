import { Inject } from '@nestjs/common';
import { UserGqlDto } from './gql.dto';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { GetUserPort } from 'src/ports/in/user/get-user.port';
import { GetUsersPort } from 'src/ports/in/user/get-users.port';

@Resolver(() => UserGqlDto)
export class UserResolver {
  constructor(
    @Inject('GetUserPort')
    private readonly getUserUseCase: GetUserPort,
    @Inject('GetUsersPort')
    private readonly getUsersUseCase: GetUsersPort,
  ) {}

  @Query(() => [UserGqlDto], { name: 'users' })
  findAll() {
    return this.getUsersUseCase.execute();
  }

  @Query(() => UserGqlDto, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.getUserUseCase.execute(id);
  }
}
