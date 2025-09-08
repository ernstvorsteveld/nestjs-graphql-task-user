import { UserAPI } from 'src/user/user.api';
import { UserGqlDto } from './gql.dto';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => UserGqlDto)
export class UserResolver {
  constructor(private readonly userApi: UserAPI) {}

  @Query(() => [UserGqlDto], { name: 'users' })
  findAll() {
    return this.userApi.findAll();
  }

  @Query(() => UserGqlDto, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.userApi.getUser(id);
  }
}
