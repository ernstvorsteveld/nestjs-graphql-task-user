import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { TaskService } from '../task/task.service';
import { TaskGqlDto, UserGqlDto } from './gql.dto';
import { UserAPI } from 'src/user/user.api';

@Resolver(() => TaskGqlDto)
export class TaskResolver {
  constructor(
    private readonly taskService: TaskService,
    private readonly userApi: UserAPI,
  ) {}

  @Query(() => [TaskGqlDto], { name: 'tasks' })
  findAll() {
    return this.taskService.findAll();
  }

  @Query(() => TaskGqlDto, { name: 'task' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.taskService.findOne(id);
  }

  @ResolveField('user', () => UserGqlDto, { nullable: true })
  findUser(@Parent() task: TaskGqlDto): Promise<UserGqlDto | null> {
    if (task.userId == null) {
      return Promise.resolve(null);
    }
    return this.userApi.getUser(task.userId);
  }
}
